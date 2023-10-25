import { reactive, computed } from "vue";

const cart = reactive({
  items: {},
  addItem(product, quantity = 1) {
    if (this.items[product.id]) {
      this.items[product.id].quantity += quantity;
    } else {
      this.items[product.id] = {
        product,
        quantity,
      };
    }
    this.saveCartInLocalStorage();
  },
  cartItemsCount() {
    const cartItemsCount = Object.keys(cart.items).length;

    return cartItemsCount;
  },
  saveCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  },
  getCartFromLocalStorage() {
    this.items = JSON.parse(localStorage.getItem("cart")) || {};
  },
  totalCartItems: computed(() => {
    let total = 0;
    for (let id in cart.items) {
      total += cart.items[id].quantity;
    }
    return total;
  }),
  totalCartItem: computed(() => {
    const total = Object.keys(cart.items).length;
    return total;
  }),
  totalPrice: computed(() => {
    let total = 0;
    for (let id in cart.items) {
      total += cart.items[id].product.price * cart.items[id].quantity;
    }

    cart.originalPrice = total.toFixed(2);

    if (cart.discountApplied) {
      total = total - (total * cart.discountInPercentage) / 100;
    }

    return parseFloat(total.toFixed(2));
  }),
  shipEach: computed(() => {
    const shipEach = parseFloat((cart.totalCartItem * 5 + cart.totalPrice).toFixed(2));
    return shipEach;
  }),
  shipEach1: computed(() => {
    const shipEach1 = parseFloat((cart.totalCartItem * 5).toFixed(2));
    return shipEach1;
  }),
  shipAll: computed(() => {
    const shipAll = (20 + cart.totalPrice).toFixed(2);
    return shipAll * 1;
  }),
  shipAll1: computed(() => {
    const shipAll1 = (20).toFixed(2);
    return shipAll1 * 1;
  }),
  removeItem(id) {
    delete this.items[id];
  },
  emptyCart() {
    this.items = {};
    this.saveCartInLocalStorage();
  },
  checkOut: {},
  addItemCheckout(subTotal) {
    cart.saveCartInLocalStorage();
    cart.checkOut = {
      cart: cart.items,
      subTotal,
    };
    localStorage.setItem("checkout", JSON.stringify(cart.checkOut));
  },
});
cart.getCartFromLocalStorage();
export { cart };
