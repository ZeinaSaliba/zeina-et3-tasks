import { makeAutoObservable } from 'mobx';

export default class UserStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }

    clearUser() {
        this.user = null;
    }

    get isLoggedIn() {
        return !!this.user;
    }
}

const userStore = new UserStore();