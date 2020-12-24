<template>
  <div class="header">
    <div class="header-logo">
      <img :src="logo" alt="" />
    </div>
    <div class="header-menu">
      <ul>
        <li v-for="item in menuItem" :key="item"><a :href="item.path">{{ item.text }}</a></li>
      </ul>
    </div>
    <div class="header-login">
      <div class="login-newUser" v-if="!logIn">
        <p>Log In</p>
        <p>Log Up</p>
      </div>
      <div class="login-user" v-else>Bievenido {{ user }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
  data() {
    return {
      logo:
        "https://i0.wp.com/thegameofnerds.com/wp-content/uploads/2019/12/pokemon-logo-png-pokemon-logo-png-2000.png?fit=2000%2C736&ssl=1",
      menuItem: [{
        text:"HOME",
        path:"/home"
      },
      {
        text:"CARDS",
        path:"/cards"
      },
      {
        text:"SHOP",
        path:"/shop"
      },
      {
        text:"ABOUT US",
        path:"/about"
      }],
      logIn: true,
      user: "Bimeken"
    };
  }
};
</script>

<style>
@import url("../normalize.css");
@import url("../principal.css");
</style>
