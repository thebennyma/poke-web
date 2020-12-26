<template>
    <div>
        <input type="text" placeholder="Search by Pokemon ID or Name" value=""
        v-on:change="$emit('pokemonID')"
        >
        <button type="button" v-on:click="findPokemon()"></button>
    </div>
</template>

<script>
import api from "@/api";

export default {
  name: "home",
  data() {
    return {
      pokemons: [],
    };
  },
  props: {

  },
  methods: {
      findPokemon(text) {
        api.getPokemon(text).then((poke) => {
          this.pokemons.push(poke);
        });
      }
  }
};
</script>