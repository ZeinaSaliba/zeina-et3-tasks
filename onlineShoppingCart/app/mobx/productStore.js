import { makeAutoObservable } from 'mobx';

export default class ProductStore {
    products = [
        { id: 1, name: 'Product 1',  },
        { id: 2, name: 'Product 2',  },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    getProducts() {
        return this.products;
    }
}

const productStore = new ProductStore(); 