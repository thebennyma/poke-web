import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import HelpUs from "@/views/HelpUs";
import Error from "@/views/Error";

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
      name: "about",
      component: About
    },
    {
      path: "/help-us",
      name: "help-us",
      component: HelpUs
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
