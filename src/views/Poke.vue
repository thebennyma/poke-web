<template>
    <div class="body">
      <div class="div-search">
        <input class="div-search__input" placeholder="Search by Pokemon ID or Name"
        v-model="pokemon"
        @keyup.enter="buscarPokemon()"
        />
      </div>
      <div class="pokemones">
        <px-pokemon-info v-for="poke in pokemonsName" :key="poke" :pokemon="poke"></px-pokemon-info>
      </div>
    </div>
</template>

<script>
import api from "@/api";
import PxPokemonInfo from '../components/PxPokemonInfo.vue';

export default {
  name: "home",
  data() {
    return {
      pokemon: "",
      especieData: [],
      evolutionChain: [],
      pokemonsName: []
    };
  },
  methods: {
    buscarPokemon: function() {
      api.getSpeciePokemon(this.pokemon).then((especie) => {
        this.especieData = especie;
        api.getEvolutionChain(this.especieData.evolution_chain.url).then((evolution) => {
          this.evolutionChain = evolution;
          this.buscarEvolucionesId();
        });
      });
    },
    buscarEvolucionesId() {
      this.pokemonsName = [];
      var ev = this.evolutionChain.chain;
      this.pokemonsName.push(ev.species.name);
      while(ev.evolves_to.length) {
        ev = ev.evolves_to[0];
        this.pokemonsName.push(ev.species.name);
      }
    }
  },
  components: {
    PxPokemonInfo,
  }
};
</script>

<style lang="scss">
  .body {
    display: flex;
    flex-direction: column;

    .pokemones {
      flex-basis: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 100%;
    }

    .div-search {
      flex-basis: 80px;
      display: flex;
      flex-direction: row; 
      justify-content: center;

      &__input {
        width: 80%;
        height: 80%;
        min-height: 60px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        border: 1px solid #2d9fd9;
        text-align: center;
        font-size: 25px;
      }

      &__input:focus {
        outline: none;
        border: 1px solid #a0d18c;
        color: #2d9fd9;
      }
    }
    
  }
</style>