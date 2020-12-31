<template>
  <div class="poke-random">
    <Card
      class="poke-random__select"
      v-for="(poke, index) in pokemons"
      :pokemon="poke"
      :types="typos(poke.types)"
      :key="index"
    >
    </Card>
  </div>
</template>

<script>
import api from "@/api";
import Card from "@/components/PxPokemonCard.vue";

export default {
  name: "poke-random",
  data() {
    return {
      pokemons: [],
      ramdomPoke: []
    };
  },
  created() {
    this.randomPokemons();
    for (const i in this.ramdomPoke) {
      api.getPokemon(`${this.ramdomPoke[i]}`).then(poke => {
        this.pokemons.push(poke);
      });
    }
  },
  methods: {
    randomPokemons() {
      for (let randomPoke = 1; randomPoke <= 8; randomPoke++) {
        this.ramdomPoke.push(Math.floor(Math.random() * 800));
      }
    },
    typos(types) {
      var type = [];

      for (let i = 0; i < types.length; i++) {
        type.push(types[i].type.name);
      }
      return type;
    }
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.poke-random {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding: 2rem 1rem;
  background: rgb(36, 40, 47);

  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  &__select {
    display: grid;
    background: rgb(36, 40, 47);
  }
}
</style>
