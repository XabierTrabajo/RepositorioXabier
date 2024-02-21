
import { defineStore } from 'pinia'

export const useTestPinia = defineStore('store', {
  // state == data
  state: () => ({     
    arrayNumeros: []
  }),
  // actions == methods
  actions: {
    guardarNumero(num) {
        this.arrayNumeros.push(num);
    }
  },
  // getters == computed
  getters: {
    
  },
})
