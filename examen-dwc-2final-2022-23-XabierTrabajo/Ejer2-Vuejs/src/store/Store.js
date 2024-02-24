
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  // state == data
  state: () => ({     
    eventosFavoritos: []
  }),
  // actions == methods
  actions: {
    controlFavoritos(evento) {
      // findIndex busca el evento en los favoritos
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.eventosFavoritos.findIndex(element => element.documentName === evento.documentName);

      // si ya esta lo elimino
      if (i > -1) {
        console.log("Boton pulsado! Ese elemento ya es favorito! Eliminando...");
        alert("Boton pulsado! Ese elemento ya es favorito! Eliminando...");
        this.eventosFavoritos.splice(i,1);
      }
      
      // si no esta lo añado
      else {
        console.log("Boton pulsado! Ese elemento ha sido marcado como favorito!");
        alert("Boton pulsado! Ese elemento ha sido marcado como favorito!");
        this.eventosFavoritos.push(evento);
      }
    }

    
  },
  // getters == computed
  getters: {
    
  },
})
