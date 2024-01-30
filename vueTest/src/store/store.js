import { createStore } from "vuex";
import axios from "axios";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//export const useCounterStore = defineStore('counter', {})

//Definimos el almacén "counter" mediante defineStore
//Este almacén contendrá el estado, las getters y las acciones
export const useStore = defineStore('store', {
    // state as the data
    state: () => ({ 
        contador:5,

        pokemonObjectData: [],
        pokemonTeamData: [],
        index: 0
      }),
    
    // getters as the computed
    getters: {
        parImpar(){
            if (this.contador % 2===0) 
              return "PAR"
            return "IMPAR"
        }
    },
    // actions as the methods
    actions: {
        
        incrementar() {
            this.contador++
        },
        decrementar(){
        this.contador--
        },

        insertarSeleccionado() {
            console.log("boton pulsado");
        },

        insertarPikachu() {
            

            // obtiene mediante axios los datos del pokemon
            const allData = axios.get(
                "https://pokeapi.co/api/v2/pokemon/pikachu"
            );
            // guarda los datos en el array
            this.pokemonObjectData = allData.data;
            this.pokemonTeamData.push(this.pokemonObjectData);
            this.index = this.pokemonTeamData.length;

            this.client.emit('insertarPikachu');
        },

        vaciarSeleccion() {
            console.log("boton pulsado");
        },

        vaciarEquipo() {
            this.pokemonTeamData = []
        }
    }
});


