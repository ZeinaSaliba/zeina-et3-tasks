// CartStore.js
import { makeAutoObservable } from 'mobx';

class CartStore {
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product) {
    const existingProduct = this.cartItems.find((item) => item.title === product.title);
    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      this.cartItems.push({ ...product, count: 1 });
    }
  }

  removeFromCart(product) {
    const index = this.cartItems.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      const item = this.cartItems[index];
      if (item.count > 1) {
        item.count -= 1;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }
}

const cartStore = new CartStore();
export default cartStore;
