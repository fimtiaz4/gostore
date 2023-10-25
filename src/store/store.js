import { ref, reactive } from "vue";
import router from "../router/index";
import { cart } from "./cart";
const authStore = reactive({
  isAuthenticated: localStorage.getItem("auth") == 1,
  user: JSON.parse(localStorage.getItem("user")),
  authenticate(username, password) {
    fetch("http://www.ecom.coderstream.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error == 0) {
          authStore.isAuthenticated = true;
          authStore.user = res;
          localStorage.setItem("auth", 1);
          localStorage.setItem("user", JSON.stringify(res));
          router.push("/");
        }
      });
  },
  register(username, email, password) {
    fetch("http://ecom.coderstream.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          this.authenticate(email, password);
        } else {
          console.log(res.error);
        }
      });
  },
  logout() {
    authStore.isAuthenticated = false;
    authStore.user = {};
    localStorage.setItem("auth", 0);
    localStorage.setItem("user", "{}");
    cart.items = {};
    // cart.totalPrice = 0;
    cart.saveCartInLocalStorage();
    // router.push("/login");
  },
  getUserToken() {
    return authStore.user.token;
  },
});

export { authStore };
