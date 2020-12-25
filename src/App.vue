<template>
  <div>
    <px-header></px-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: { PxHeader },
};
</script>

<style>
@import url("styles/normalize.css");
</style>
