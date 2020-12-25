<template>
  <div class="home">
    <div class="home__image">
      <img src="@/assets/poke-ball.svg" alt="" />
      <px-pokemon-random></px-pokemon-random>
    </div>
  </div>
</template>

<script>
import PxPokemonRandom from "@/components/PxPokemonRandom";
export default {
  name: "home",
  components: { PxPokemonRandom },
};
</script>

<style lang="scss" scoped>
.home {
  &__image {
    display: grid;
    grid-row-gap: 2rem;
    padding: 2rem 0rem;
    img {
      justify-self: center;
      opacity: 0.1;
      width: 25%;
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 800px) {
  .home {
    text-align: center;
    &__image {
      width: 100%;
    }
  }
}
</style>
