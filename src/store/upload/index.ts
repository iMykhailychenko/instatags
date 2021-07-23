import { makeAutoObservable } from 'mobx';

export interface IUpload {
    original: string | null;
    file: string | null;
    addServerUrl: (value: string) => Promise<string>;
    addOriginalFile: (value: string) => Promise<string>;
    remove: () => Promise<null>;
}

export default class Upload implements IUpload {
    file: string | null = null;
    original: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    addServerUrl = async (value: string): Promise<string> => (this.file = value);
    addOriginalFile = async (value: string): Promise<string> => (this.original = value);
    remove = async (): Promise<null> => (this.file = null);
}
