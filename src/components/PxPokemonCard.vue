<template>
    <div class="card">
        <div class="card__header">
            <p>{{ pokemon.name }}</p>
            <p>{{ pokemon.id }}</p>
        </div>
        <div class="card__img">
            <img :src="pokemon.sprites.front_default" alt="">
        </div>
        <div class="card__abilities">
            <span class="card__abilities-span">Abilities</span>
            <ul class="card__abilities-ul">
                <li class="card__abilities-ul-li" v-for="(ability, index) in pokemon.abilities"
                :key="index">{{ ability.ability.name }}</li>
            </ul>
        </div>
        <div class="card__types" >
            <ul class="card__types-ul" :style="color">
                <li class="card__types-ul-li" v-for="(type, index) in pokemon.types"
                :key="index">{{ type.type.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "card-template",
    props: 
    {
        "pokemon": Object,
        "types": Array
    },
    data() {
        return {
            colors: this.types
        }
    },
    computed: {
        color() {
            var colorByType = {
                "bug" : "#11c704",
                "poison" : "#81239e",
                "steel" : "#8c8c8c",
                "water" : "#016691",
                "ground" : "#804a00",
                "electric" : "#e9ed02",
                "grass" : "#007a1d",
                "flying" : "#7a0023",
                "fire" : "#f21800",
                "ghost" : "#5a0278",
                "rock" : "#7a5602",
                "fighting" : "#d1b200",
                "psychic" : "#d402db",
                "fairy" : "#ff00d4",
                "normal" : "#b8b8b8",
                "dragon" : "#3bffc4",
                "ice" : "#01669f"
            }
            console.log(colorByType[this.types[0]]);
            if (this.colors.length == 1){
                return {
                    "background": "linear-gradient(to right, " + colorByType[this.colors[0]] + ", #DDD)"
                }
            }else {
                return {
                    "background": "linear-gradient(to right, " + colorByType[this.colors[0]] + ", #DDD," + colorByType[this.colors[1]] + ")"
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 400px;
        border: 1px solid #000;
        border-radius: 5px;
        margin: 5px;

        &__header {
            display: flex;
            justify-content: space-between;
            height: 30px;
            margin: 5px;
            border-radius: 5px 5px 0 0;

            p{
                font-size: 20px;
                color: #000;
                margin: 5px 8px;
            }
            
        }

        &__img {
            display: flex;
            width: 200px;
            height: 200px;
            margin: auto;

            img {
                object-fit: cover;
                border: 1px solid #000;
                width: 100%;
                height: 100%;
            }
        }

        &__abilities {
            display: flex;
            flex-direction: column;
            height: 100px;
            margin: 10px;

            &-span {
                display: flex;
                justify-content: center;
                height: 20px;
                font-size: 15px;
                font-weight: 700;
                color: #000;
            }
            &-ul {
                display: flex;
                height: 80px;
                flex-direction: column;
                margin: 10px;

                li {
                    list-style-type: none;
                }
            }
        }
        &__types {
            display: flex;
            height: 30px;
            width: 100%;

            &-ul {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                margin: 0 7px 3px 7px;
                padding: 0 7px;
                border-radius: 0 0 5px 5px;

                li {
                    margin: 5px 0;
                    color: #000;
                    font-size: 20px;
                    list-style-type: none;
                }
            }
        }
    }
</style>