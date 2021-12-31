import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import ConfirmDevice from "../views/ConfirmDevice.vue";
import MarketTrend from "../views/MarketTrend.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/confirmdevice",
    name: "confirmdevice",
    component: ConfirmDevice,
  },
  {
    path: "/markettrend",
    name: "markettrend",
    component: MarketTrend,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
