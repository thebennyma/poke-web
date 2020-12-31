<template>
  <div class="card">
    <div class="card__img" :style="color">
      <img :src="pokemon.sprites.front_default" alt="" />
    </div>
    <div class="card__data">
      <div class="card__data__poke">
        <a class="name" @click="goToPokeInformation(pokemon.name)">{{
          pokemon.name | capitalize
        }}</a>
        <div class="id">
          <small class="id__circle"></small>
          <p>Active - {{ pokemon.id }}</p>
        </div>
      </div>

      <div class="card__data__types">
        <span class="typ">{{ type }}</span>
        <div class="card__data__types__actually">
          <div
            class="typ-name"
            v-for="(type, index) in pokemon.types"
            :key="index"
          >
            <span>- {{ type.type.name | capitalize }}</span>
          </div>
        </div>
      </div>

      <div class="card__data__abilities">
        <span class="abili">{{ ability }}</span>
        <div
          class="abilities"
          v-for="(ability, index) in pokemon.abilities"
          :key="index"
        >
          <span class="abilities__active">
            - {{ ability.ability.name | capitalize }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-template",
  props: {
    pokemon: Object,
    types: Array
  },
  data() {
    return {
      colors: this.types
    };
  },
  computed: {
    color() {
      var colorByType = {
        bug: "#11c704",
        poison: "#81239e",
        steel: "#8c8c8c",
        water: "#016691",
        ground: "#804a00",
        electric: "#e9ed02",
        grass: "#007a1d",
        flying: "#7a0023",
        fire: "#f21800",
        ghost: "#5a0278",
        rock: "#7a5602",
        fighting: "#d1b200",
        psychic: "#d402db",
        fairy: "#ff00d4",
        normal: "#b8b8b8",
        dragon: "#3bffc4",
        ice: "#01669f"
      };
      if (this.colors.length == 1) {
        return {
          background:
            "linear-gradient(" +
            colorByType[this.colors[0]] +
            "," +
            colorByType[this.colors[0]]
        };
      } else {
        return {
          background:
            "linear-gradient(" +
            colorByType[this.colors[0]] +
            "," +
            colorByType[this.colors[1]] +
            ")"
        };
      }
    },
    type() {
      return this.pokemon.types.length == 1 ? "Type" : "Types";
    },
    ability() {
      return this.pokemon.abilities.length == 1 ? "Abilitie" : "Abilities";
    }
  },
  methods: {
    goToPokeInformation(pokemon) {
      this.$router.push({ name: "poke-information", params: { pokemon } });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 118px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &__img {
    padding: 50% 0 0 1rem;
    border-bottom-left-radius: 118px;
    border-top-left-radius: 118px;
  }

  &__data {
    display: grid;
    grid-row-gap: 1rem;
    color: #fff;
    background: rgb(60, 62, 68);
    padding: 0.75rem;
    border-bottom-right-radius: 118px;
    border-top-right-radius: 118px;
    text-align: left;

    &__poke {
      .name {
        font-weight: bold;
        font-size: 1.5rem;
      }
      .name:hover {
        color: #ff6347;
        cursor: pointer;
      }

      .id {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 0.3rem;

        &__circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #5cb85c;
          align-self: center;
        }
      }
    }

    &__types {
      display: grid;

      &__actually {
        display: grid;
        grid-template-columns: auto;
      }
      .typ {
        color: rgb(158, 158, 158);
      }
      .typ-name {
        display: grid;
        grid-template-columns: repeat();
      }
    }

    &__abilities {
      display: grid;
      grid-row-gap: 0.1rem;
      .abili {
        color: rgb(158, 158, 158);
      }

      .abilities {
        display: grid;
      }
    }
  }
}
</style>
