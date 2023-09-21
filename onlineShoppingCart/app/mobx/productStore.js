// ProductStore.js
import { makeAutoObservable } from 'mobx';

class ProductStore {
  products = [
    { id: 0, title: 'Tomatoes', count: 0 },
    { id: 1, title: 'Apples', count: 0 },
    { id: 2, title: 'Bananas', count: 0 },
    { id: 3, title: 'Oranges', count: 0 },
    { id: 4, title: 'Grapes', count: 0 },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const productStore = new ProductStore();
export default productStore;
