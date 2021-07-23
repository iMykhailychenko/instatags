import { makeAutoObservable } from 'mobx';

export interface ILoading {
    status: boolean;
    start: () => void;
    end: () => void;
    toggle: () => void;
}

export default class Loading implements ILoading {
    status = false;

    constructor() {
        makeAutoObservable(this);
    }

    start = (): void => {
        this.status = true;
    };

    end = (): void => {
        this.status = false;
    };

    toggle = (): void => {
        this.status = !this.status;
    };
}
