<template>
  <div>
    <px-header></px-header>
    <router-view></router-view>
    <px-footer></px-footer>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: { PxHeader, PxFooter },
};
</script>

<style>
@import url("styles/normalize.css");
</style>
