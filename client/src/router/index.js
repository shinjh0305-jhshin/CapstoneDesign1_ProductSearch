import { createRouter, createWebHistory } from "vue-router";
import dealCreate from "../views/dealCreate.vue";
import dealDetail from "../views/dealDetail.vue";
import dealList from "../views/dealList.vue";
import dealRaised from "../views/dealRaised.vue";

const routes = [
  { path: "/", name: "Home", component: dealList },
  { path: "/create", name: "Create", component: dealCreate },
  { path: "/detail", name: "Detail", component: dealDetail },
  { path: "/raised", name: "Raised", component: dealRaised },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
