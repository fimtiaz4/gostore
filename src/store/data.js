import { reactive, ref, watchEffect, computed, watch } from "vue";
import axios from "axios";

const productsUrl = ref("http://ecom.coderstream.com/api/products/search");
const baseUrl = "http://ecom.coderstream.com/api/products/search";
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

function removeParametersFromURL(url, paramsToRemove) {
  const parsedURL = new URL(url);
  const searchParams = new URLSearchParams(parsedURL.search);

  paramsToRemove.forEach((param) => {
    if (searchParams.has(param)) {
      searchParams.delete(param);
    }
  });

  return `${parsedURL.origin}${parsedURL.pathname}?${searchParams.toString()}`;
}

const sortKeyLTH = (pageNum = 1) => {
  const currentURL = productsUrl.value;
  // const updatedURL = `${baseUrl}${currentURL.includes("?") ? "?" : "?"}sort_key=price_low_to_high&page=${pageNum}`;
  const updatedURL = `${removeParametersFromURL(currentURL, ["sort_key", "page"])}${productsUrl.value.includes("?") ? "&" : "?"}sort_key=price_low_to_high&page=${pageNum}`;
  productsUrl.value = updatedURL;
};
const sortKeyHTL = (pageNum = 1) => {
  const currentURL = productsUrl.value;
  const updatedURL = `${removeParametersFromURL(currentURL, ["sort_key", "page"])}${productsUrl.value.includes("?") ? "&" : "?"}sort_key=price_high_to_low&page=${pageNum}`;
  productsUrl.value = updatedURL;
};
// for select box
const sortKey = (pageNum = 1) => {
  const currentURL = productsUrl.value;
  const updatedURL = `${removeParametersFromURL(currentURL, ["sort_key", "page"])}${productsUrl.value.includes("?") ? "&" : "?"}page=${pageNum}`;
  productsUrl.value = updatedURL;
  if (currentURL.includes("sort_key=price_low_to_high")) {
    const updatedURL = `${removeParametersFromURL(currentURL, ["sort_key", "page"])}${productsUrl.value.includes("?") ? "&" : "?"}sort_key=price_low_to_high&page=${pageNum}`;
    productsUrl.value = updatedURL;
  }
  if (currentURL.includes("sort_key=price_high_to_low")) {
    const updatedURL = `${removeParametersFromURL(currentURL, ["sort_key", "page"])}${productsUrl.value.includes("?") ? "&" : "?"}sort_key=price_high_to_low&page=${pageNum}`;
    productsUrl.value = updatedURL;
  }
};
// for adding name parameter to url
// const namePara = (pageNum = 1) => {
//   const currentURL = productsUrl.value;
//   const updatedURL = `${removeParametersFromURL(currentURL, ["name"])}&page=${pageNum}`;
//   productsUrl.value = updatedURL;
// };

export { products, sortKeyLTH, productsUrl, sortKeyHTL, sortKey, baseUrl, removeParametersFromURL };
