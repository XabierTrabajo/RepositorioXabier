import { createStore } from "vuex";
//import axiosClient from "../axios";

const store = createStore({
    // state as the data
    state: {
        pokemonTeamData: [],

    },
    // actions as the methods
    actions: {
        resetTeamData() {
            this.pokemonTeamData = [];
        },

        async getPikachu() {
            // obtiene mediante axios los datos del pokemon
            const allData = await axios.get(
              "https://pokeapi.co/api/v2/pokemon/pikachu"
            );
            // guarda los datos en el array
            this.pokemonTeamData = allData.data;
        }
    },
    // getters as the computed
    getters: {

    }
});

export default store;
