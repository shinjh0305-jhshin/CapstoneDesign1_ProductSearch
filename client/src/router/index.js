import { createRouter, createWebHistory } from "vue-router";
import productCreate from "../views/productCreate.vue";
import productDetail from "../views/productDetail.vue";
import productList from "../views/productList.vue";

const routes = [
  { path: "/", name: "Home", component: productList },
  { path: "/create", name: "Create", component: productCreate },
  { path: "/detail", name: "Detail", component: productDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
