import { createStore } from "vuex";
//import axiosClient from "../axios";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//export const useCounterStore = defineStore('counter', {})

//Definimos el almacén "counter" mediante defineStore
//Este almacén contendrá el estado, las getters y las acciones
export const useStore = defineStore('store', {
    // state as the data
    state: () => ({ 
        pokemonTeamData: [],
        test: "Hola Mundo!"
      }),
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
        showTest () {
            console.log(this.test);
        },
    }
});


