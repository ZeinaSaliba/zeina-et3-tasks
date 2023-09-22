import { makeAutoObservable } from 'mobx';

// Create a ProductStore class
class ProductStore {
  // Initialize the products array to store product information
  products = [
    { id: 0, title: 'Tomatoes', count: 0 },
    { id: 1, title: 'Apples', count: 0 },
    { id: 2, title: 'Bananas', count: 0 },
    { id: 3, title: 'Oranges', count: 0 },
    { id: 4, title: 'Grapes', count: 0 },
  ];

  // Constructor for the ProductStore class
  constructor() {
    // Automatically make the class observable with MobX
    makeAutoObservable(this);
  }
}

const productStore = new ProductStore();

export default productStore;
