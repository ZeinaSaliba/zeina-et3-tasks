import { makeAutoObservable,makeObservable, observable, computed, action, flow } from "mobx"

export default class CartStore {
    cartItems = []

    constructor() {
        makeAutoObservable(this,{
            addToCart : action,
            removeFromCart : action,
            cartCount : computed
        });
        // makeObservable
    }

    addToCart(product) {
        this.cartItems.push(product)
    }

    removeFromCart(product) {
        this.cartItems = this.cartItems.filter(item => item?.id !== product?.id);
    }

    get cartCount() {
        return this.cartItems.length;
    }
}

const cartStore = new CartStore();
