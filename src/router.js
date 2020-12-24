import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
