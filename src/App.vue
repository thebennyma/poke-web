<template>
  <div id="app">
    <px-header></px-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
export default {
  name: "App",
  components: { PxHeader }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  padding: 10px;
}
</style>
