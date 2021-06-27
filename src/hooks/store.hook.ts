import { IStore, store } from '../store/store';

export const useStore = <T>(selector: (state: IStore) => T): T => selector(store);
