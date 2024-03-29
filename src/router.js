import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Poke from "@/views/Poke";
import HelpUs from "@/views/HelpUs";
import PokeInformation from "@/views/PokeInformation";
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
      path: "/poke",
      name: "poke",
      component: Poke
    },
    {
      path: "/help-us",
      name: "help-us",
      component: HelpUs
    },
    {
      path: "/poke-information/:pokemon",
      name: "poke-information",
      component: PokeInformation
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
