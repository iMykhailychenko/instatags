import { makeAutoObservable } from 'mobx';

export interface IUpload {
    file: string | null;
    add: (value: string) => Promise<string>;
    remove: () => Promise<null>;
}

export default class Upload implements IUpload {
    file: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    add = async (value: string): Promise<string> => (this.file = value);
    remove = async (): Promise<null> => (this.file = null);
}
