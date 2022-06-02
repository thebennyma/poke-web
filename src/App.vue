<template>
  <div class="app">
    <px-header class="app__header"></px-header>
    <router-view class="app__body"></router-view>
    <px-footer class="app__footer"></px-footer>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: { PxHeader, PxFooter }
};
</script>

<style lang="scss">
@import url("styles/normalize.css");

.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
