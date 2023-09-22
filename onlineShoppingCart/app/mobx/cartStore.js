// Import the necessary function from MobX
import { makeAutoObservable } from 'mobx';

// Create a CartStore class
class CartStore {
  // Initialize the cartItems array to store items in the cart
  cartItems = [];

  // Constructor for the CartStore class
  constructor() {
    // Automatically make the class observable with MobX
    makeAutoObservable(this);
  }

  // Method to add a product to the cart
  addToCart(product) {
    // Check if the product already exists in the cart
    const existingProduct = this.cartItems.find((item) => item.title === product.title);
    if (existingProduct) {
      // If it exists, increment the count
      existingProduct.count += 1;
    } else {
      // If it doesn't exist, create a new product object and add it to the cart
      const newProduct = {
        title: product.title,
        count: 1, // Start with a count of 1 for the new product
      };
      this.cartItems.push(newProduct);
    }
  }

  // Method to remove a product from the cart
  removeFromCart(product) {
    // Find the index of the product in the cart
    const index = this.cartItems.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      // If the product is found in the cart
      const item = this.cartItems[index];
      if (item.count > 1) {
        // If the count is greater than 1, decrement the count
        item.count -= 1;
      } else {
        // If the count is 1, remove the product from the cart
        this.cartItems.splice(index, 1);
      }
    }
  }
}

// Create an instance of the CartStore class
const cartStore = new CartStore();

// Export the cartStore instance as the default export of this module
export default cartStore;
