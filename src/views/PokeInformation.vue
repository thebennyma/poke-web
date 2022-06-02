<template>
  <div>hola</div>
</template>

<script>
import api from "@/api";

export default {
  name: "poke-informarion",
  data() {
    return {
      pokemonId: null
    };
  },
  created() {
    api.getPokemon(this.$route.params.pokemon).then(poke => {
      console.log(poke);
    });
  }
};
</script>

<style></style>
