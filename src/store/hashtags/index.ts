import { makeAutoObservable } from 'mobx';
import { Alert } from 'react-native';

import { api } from '../../api';
import { IAdaptedHashtag, IVisionResponse } from '../../interfaces';
import { visionResponse } from './__mocks__';
import { adapter } from './hashtags.utils';

export interface IHashtags {
    loading: boolean;
    origin: IVisionResponse | null;
    tags: IAdaptedHashtag[];
    // methods
    toggle: (value: string) => Promise<IAdaptedHashtag[]>;
    toggleAll: (value?: boolean) => Promise<IAdaptedHashtag[]>;
    run: (url: string) => Promise<IAdaptedHashtag[] | void>;
    set: (value: IVisionResponse) => Promise<IAdaptedHashtag[]>;
    reset: () => Promise<void>;
}

export default class Hashtags implements IHashtags {
    loading = true;
    tags: IAdaptedHashtag[] = [];
    origin: IVisionResponse | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    toggle = async (value: string): Promise<IAdaptedHashtag[]> =>
        (this.tags = this.tags.map<IAdaptedHashtag>(item => (item.tag === value ? { ...item, active: !item.active } : item)));

    toggleAll = async (value = false): Promise<IAdaptedHashtag[]> =>
        (this.tags = this.tags.map<IAdaptedHashtag>(item => ({ ...item, active: value })));

    run = async (url: string): Promise<IAdaptedHashtag[] | void> => {
        this.loading = true;
        const list: IVisionResponse | void = await api.vision(url);
        if (list) return await this.set(list);

        // TEMP DEVELOPMENT MOCK
        // const temp = new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(url);
        //     }, 1500);
        // });

        // await temp.catch(error => Alert.alert(error));
        return await this.set(visionResponse).catch(error => Alert.alert(error));
    };

    set = async (value: IVisionResponse): Promise<IAdaptedHashtag[]> => {
        this.loading = false;
        this.origin = value;
        this.tags = adapter(value);
        return this.tags;
    };

    reset = async (): Promise<void> => {
        this.loading = true;
        this.origin = null;
        this.tags = [];
    };
}
