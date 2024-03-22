
import { defineStore } from 'pinia'

export const useEjercicioGimnasio = defineStore('store', {
  // state == data
  state: () => ({  
    texto: "",
    numeroTarea: 0,
    contadorPendientes: 0,
    contadorCompletados: 0,   
    tareasStore: [
      {
        numeroTarea: 1,
        tarea: "correr",
        completado: false
      },
      {
        numeroTarea: 2,
        tarea: "Nadar",
        completado: false
      },
      {
        numeroTarea: 3,
        tarea: "Saltar",
        completado: true
      }
    ],
  }),
  // actions == methods
  actions: {
    contadorInicialStore() {
      this.contadorCompletados = 0;
      this.contadorPendientes  = 0;

      for (let i = 0; i < this.tareasStore.length; i++) {
        if (this.tareasStore[i].completado == true) {
          this.contadorCompletados++;
        }
        else {
          this.contadorPendientes++;
        }
      }
    },

    marcarStore(tarea) {
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.tareasStore.findIndex(element => element.tarea === tarea.tarea);

      // si lo encuentra
      if (i > -1) {
        this.tareasStore[i].completado = !this.tareasStore[i].completado;

        if (this.tareasStore[i].completado == true) {
          this.contadorCompletados++;
          this.contadorPendientes--;
        }
        if (this.tareasStore[i].completado == false) {
          this.contadorCompletados--;
          this.contadorPendientes++;
        }
      }
    },

    borrarStore(tarea) {
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.tareasStore.findIndex(element => element.tarea === tarea.tarea);

      // si lo encuentra
      if (i > -1) {
        if (this.tareasStore[i].completado == true) {
          this.contadorCompletados--;
        }
        if (this.tareasStore[i].completado == false) {
          this.contadorPendientes--;
        }

        this.tareasStore.splice(i, 1);
      }
    },

    insertarStore() {
      console.log(this.texto);
      this.numeroTarea = this.tareasStore.length;

      let objetoTarea = {
        numeroTarea: this.numeroTarea+1,
        tarea: this.texto,
        completado: false
      }

      this.tareasStore.push(objetoTarea);
      this.contadorPendientes++;
      this.texto = "";
    },
    
  },
  // getters == computed
  getters: {

  },
})
