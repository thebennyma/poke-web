import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import Poke from "@/views/Poke";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/poke",
      name: "Poke",
      component: Poke
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
