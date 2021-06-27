import Upload from './upload';

export interface IStore {
    upload: Upload;
}

class Store implements IStore {
    constructor(public upload: Upload) {}
}

export const store = new Store(new Upload());
