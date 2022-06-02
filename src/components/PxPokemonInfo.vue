<template>
    <div class="pokemon-Information">
            <div  v-bind:class="[Active ? 'pokemon-active' : 'pokemon-inactive']">
                <div class="pokemon-Img">
                    <img :src="urlImg" alt="">
                </div>
                <div>
                    <div>
                        <h2>{{ pokemon | capitalize }}</h2>
                    </div>
                    <div>
                        <p>Weight: {{ weight }}</p>
                        <p>Height: {{ height }}</p>
                    </div>
                    <div>
                        <ul>
                            <li v-if="is_baby">Baby</li>
                            <li v-if="is_legendary">Legendary</li>
                            <li v-if="is_mythical">Mythical</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h4>Basics Stats</h4>
                        </div>
                        <div>
                            <p v-for="(stats, index) in pokemonStats" :key="index"> {{ stats.stat.name | capitalize }}: {{ stats.base_stat }} </p>
                        </div>
                    </div>
                    <div>
                        <h4>Habitat</h4>
                        <p>{{ habitat | capitalize }}</p>
                    </div>
                </div>
            </div>
            <div class="ball">
                <img class="ball__img" @click="isActive" :src="[Active ? 'https://lh3.googleusercontent.com/proxy/rwT81vjvgl7NY8r1l5K_hn9vzA6mx-wUQGO3gV999bRg25voDV-EPTDgYPtiOfT_51oGnLKgcqtIIo9Ie9NstTW41AQW_WhjIMwsCo_RQGRBf0LzF95feeo3b6m5f8iEa4Z5' :'https://assets.stickpng.com/images/580b57fcd9996e24bc43c31e.png']" alt="">
            </div>
    </div>
</template>

<script>
import api from "@/api";

export default {
    name: "pokemon-info",
    props: {
        pokemon: {
            type: String,
            required: true
        }
    },
    watch: {
        pokemonData: function() {
            this.urlImg =  this.pokemonData[0].sprites.front_default;
            this.weight = this.pokemonData[0].weight;
            this.height = this.pokemonData[0].height;
            this.pokemonStats = this.pokemonData[0].stats;
        },
        especieData: function() {
            this.is_baby = this.especieData.is_baby;
            this.is_legendary = this.especieData.is_legendary;
            this.is_mythical = this.especieData.is_mythical;
            this.habitat = this.especieData.habitat.name;
        }
    },
    methods: {
        isActive() {
            this.Active = !this.Active;
        }
    },
    data() {
        return {
            pokemonData: [],
            especieData: [],
            pokemonStats: [],
            urlImg: '',
            weight: 0,
            height: 0,
            is_baby: false,
            is_legendary: false,
            is_mythical: false,
            habitat: '',
            Active: false,
        }
    },
    created() {
        api.getPokemon(this.pokemon).then((poke) => {
            this.pokemonData.push(poke);
        });
        api.getSpeciePokemon(this.pokemon).then((especie) => {
        this.especieData = especie;
      });
    }
}
</script>

<style lang="scss">
    .pokemon-inactive {
        display: none;
    }
    .pokemon-active {
        display: flex;
    }
    .pokemon-Information {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .ball {
        display: flex;
        justify-items: center;

        &__img {
            width: 64px;
            height: 64px;
        }
        &__img:hover{
            cursor: pointer;
        } 
    }
</style>