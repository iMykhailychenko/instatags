import Hashtags from './hashtags';
import Upload from './upload';

export interface IStore {
    upload: Upload;
    hashtags: Hashtags;
}

class Store implements IStore {
    constructor(public upload: Upload, public hashtags: Hashtags) {}
}

export const store = new Store(new Upload(), new Hashtags());
