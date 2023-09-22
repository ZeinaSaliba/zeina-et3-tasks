// Explain what Mobx is


// MobX is a proven tool that simplifies and scales state management using reactive programming.

//exemple 

// MobX is a state management library that simplifies the handling of application data.

// In this example, we have a CartStore class that manages a shopping cart.

// First, we import 'makeAutoObservable' from MobX to enable observability for our store.
import { makeAutoObservable } from 'mobx';

// Next, we create a CartStore class to store cart items.
class CartStore {
  cartItems = []; // This is an observable array to store items in the cart.

  // In the constructor, we make the class observable using 'makeAutoObservable'.
  constructor() {
    makeAutoObservable(this);
  }

  // The 'addToCart' method allows us to add a product to the cart.
  addToCart(product) {
    // Check if the product already exists in the cart.
    const existingProduct = this.cartItems.find((item) => item.title === product.title);
    if (existingProduct) {
      // If it exists, increment the count.
      existingProduct.count += 1;
    } else {
      // If it doesn't exist, create a new product object and add it to the cart.
      const newProduct = {
        title: product.title,
        count: 1, // We start with a count of 1 for the new product.
      };
      this.cartItems.push(newProduct);
    }
  }

  // The 'removeFromCart' method allows us to remove a product from the cart.
  removeFromCart(product) {
    // Find the index of the product in the cart.
    const index = this.cartItems.findIndex((item) => item.title === product.title);
    if (index !== -1) {
      // If the product is found in the cart.
      const item = this.cartItems[index];
      if (item.count > 1) {
        // If the count is greater than 1, decrement the count.
        item.count -= 1;
      } else {
        // If the count is 1, remove the product from the cart.
        this.cartItems.splice(index, 1);
      }
    }
  }
}

// Create an instance of the CartStore class.
const cartStore = new CartStore();

// Finally, we export the cartStore instance for use in our application.

// In another component, such as 'cartComponent', we observe changes in cartStore using 'observer'.
// This means that when the cartStore changes, this component automatically updates its UI to reflect those changes.

// The 'cartComponent' component displays the cart items and their counts.


// What are observables, observers, computed,stores, and reactions

// Observables: These are data items that can change, and MobX watches them for changes.
// Observers: Components or functions that automatically update when observables change.
// Computed: Values derived from observables, auto-updating when dependencies change.
// Stores: JavaScript classes that manage application state and actions.
// Reactions: Functions that trigger when observables change, used for side effects or UI updates.


// Observables:
// Example: cartItems in CartStore is an observable array.
// Explanation: Observables are variables or data structures that can be observed for changes. In your code, cartItems is observed by MobX, and any changes to it trigger reactions in components that use it, such as cartComponent.
// observers:
// Example: The cartComponent function is wrapped with observer.
// Explanation: Observers are components or functions that observe (listen to) changes in observables. When an observable like cartItems changes, an observer like cartComponent automatically re-renders to reflect the changes in the UI.
// Computed:
// Example: In your code, there's no computed property, but you can create one in MobX to derive values based on observables.
// Explanation: Computed properties are values that are derived from observables. They automatically update when their dependencies (observables) change, ensuring that derived values are always up-to-date.
// Stores:
// Example: CartStore is a store class that manages the state related to the shopping cart.
// Explanation: Stores are classes or objects that hold and manage your application's state. In this case, CartStore contains cartItems and methods like addToCart and removeFromCart for managing the shopping cart state.
// Reactions:
// Example: Reactions occur when changes happen to observables, and observers are automatically updated.
// Explanation: Reactions are functions or updates that occur in response to changes in observables. When you add or remove items from the cart using addToCart and removeFromCart, the changes trigger reactions in components like cartComponent, causing it to re-render with the updated cart data.