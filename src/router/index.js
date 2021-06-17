import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mapbox from "../views/Map.vue";
import ThreeJS from "../views/Threejs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/map",
    name: "Map",
    component: Mapbox,
  },
  {
    path: "/threejs",
    name: "ThreeJS",
    component: ThreeJS,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
