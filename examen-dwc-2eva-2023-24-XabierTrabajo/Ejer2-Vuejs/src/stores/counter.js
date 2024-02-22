
import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  // state == data
  state: () => ({ 
    serviciosFavoritos: [],
    marcado: false
  }),
  // actions == methods
  actions: {
    controlFavoritos(servicio) {
      // findIndex busca el servicio en los favoritos
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.serviciosFavoritos.findIndex(element => element.SERVICIO === servicio.SERVICIO);

      // si ya esta lo elimino
      if (i > -1) {
        console.log("Boton pulsado! Ese elemento ya es favorito! Eliminando...");
        this.serviciosFavoritos.splice(i,1);
        this.marcado = !this.marcado;
      }
      
      // si no esta lo añado
      else {
        console.log("Boton pulsado! Ese elemento ha sido marcado como favorito!");
        this.serviciosFavoritos.push(servicio);
        this.marcado = !this.marcado;
      }
    }

  },
  // getters == computed
  getters: {
    
  },
})
