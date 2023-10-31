import { reactive, ref, watchEffect, computed, watch } from "vue";
import axios from "axios";

const productsUrl = ref("http://ecom.coderstream.com/api/products/search?");
const products = ref([]);

const fetchData = (url) => {
  axios.get(url).then((res) => {
    products.value = res.data;
  });
};

fetchData(productsUrl.value); // Initial fetch

watchEffect(() => {
  fetchData(productsUrl.value); // Fetch when productsUrl changes
});

const sortKeyLTH = () => {
  const currentURL = productsUrl.value;
  if (!currentURL.includes("sort_key=price_low_to_high")) {
    const updatedURL = `${currentURL}${currentURL.includes("?") ? "&" : "?"}sort_key=price_low_to_high`;
    productsUrl.value = updatedURL;
    console.log(productsUrl.value);
  }
};

export { products, sortKeyLTH, productsUrl };
