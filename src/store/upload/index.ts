import { makeAutoObservable } from 'mobx';
import { ImagePickerResponse } from 'react-native-image-picker';

export interface IUpload {
    loading: boolean;
    file: ImagePickerResponse | null;
    add: (value: ImagePickerResponse) => Promise<ImagePickerResponse>;
    remove: () => Promise<null>;
}

export default class Upload implements IUpload {
    loading = true;
    file: ImagePickerResponse | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    add = async (value: ImagePickerResponse): Promise<ImagePickerResponse> => (this.file = value);
    remove = async (): Promise<null> => (this.file = null);
}
