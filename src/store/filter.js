import { reactive, ref } from "vue";

const filters = reactive({
  products: ref("http://ecom.coderstream.com/api/products"),

  //   sortKeyLTH() {
  //     const updatedURL = `${filters.products}?sort_key=price_low_to_high`;
  //     filters.products = updatedURL;
  //     console.log(filters.products);
  //   },
  sortKeyLTH() {
    const currentURL = filters.products;
    if (currentURL.includes("sort_key=price_low_to_high")) {
      console.log(filters.products); // This parameter is already present
    } else {
      const updatedURL = `${currentURL}${currentURL.includes("?") ? "&" : "?"}sort_key=price_low_to_high`;
      filters.products = updatedURL;
      console.log(filters.products);
    }
  },
});

export { filters };
// const filter = reactive({
//      // page:{page=1}
//      filter:{},
//      addFilter(){

//      }
// })

// http://ecom.coderstream.com/api/products/search?name=
