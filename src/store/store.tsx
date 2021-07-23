import Hashtags from './hashtags';
import Loading from './loader';
import Upload from './upload';

export interface IStore {
    loading: Loading;
    upload: Upload;
    hashtags: Hashtags;
}

class Store implements IStore {
    constructor(public loading: Loading, public upload: Upload, public hashtags: Hashtags) {}
}

export const store = new Store(new Loading(), new Upload(), new Hashtags());
