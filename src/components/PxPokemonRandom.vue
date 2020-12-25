<template>
  <div class="poke-random">
    <div
      class="poke-random__select"
      v-for="(poke, index) in pokemons"
      :key="index"
    >
      <span>Name: {{ poke.name }}</span>
      <span>Height: {{ poke.height }}</span>
      <span>Weight: {{ poke.weight }}</span>
      <span>Base Experience: {{ poke.base_experience }}</span>

      <!-- THIS WILL BE IN CARD FORMAT -->
      <div>
        <span>Types: </span>
        <div v-for="(type, ind) in poke.types" :key="ind">
          {{ type.type.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "poke-random",
  data() {
    return {
      pokemons: [],
      ramdomPoke: [],
    };
  },
  created() {
    this.randomPokemons();
    setTimeout(() => {
      for (const i in this.ramdomPoke) {
        api.getPokemon(`${this.ramdomPoke[i]}`).then((poke) => {
          this.pokemons.push(poke);
        });
      }
    }, 100);
  },
  methods: {
    randomPokemons() {
      for (let randomPoke = 1; randomPoke < 6; randomPoke++) {
        this.ramdomPoke.push(Math.floor(Math.random() * 100));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.poke-random {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;

  &__select {
    display: grid;
  }
}
</style>
