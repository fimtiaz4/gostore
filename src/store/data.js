import { reactive, ref, watchEffect, computed } from "vue";
import axios from "axios";
import { filter } from "./filter";

// const filter = ref(filters);
// import { filter } from "../store/filter";
// console.log(filter);
// const productArr = reactive({
//   dat(page) {
//     const allprod = ref([]);
//     const products = ref([]);

//     const fetchData = () => {
//       axios.get(`http://ecom.coderstream.com/api/products/search?sort_key=price_low_to_high&name=${filter.value}&min=1&max=10000&page=${page.value}`).then((res) => {
//         products.value = res.data;
//         products.value.data.forEach((element) => {
//           allprod.value.push(element);
//         });
//       });
//     };
//     watchEffect(() => {
//       fetchData();
//     });
//     return { allprod, products };
//   },
// });
// export { productArr };
const productArr = reactive({
  dat() {
    const products = ref([]);
    const fetchData = () => {
      axios.get(`http://ecom.coderstream.com/api/products/search?name=${filter.value}`).then((res) => {
        products.value = res.data;
      });
    };
    watchEffect(() => {
      fetchData();
    });
    return { products };
  },
});
export { productArr };
