
import { defineStore } from 'pinia'

export const useCounter = defineStore('store', {
  // state == data
  state: () => ({     
    usuario:"",
    login: false
  }),
  // actions == methods
  actions: {
    guardarUsuario(user) {
      this.usuario = user;
      this.login = true;
      //this.$router.push('/');
    }

    
  },
  // getters == computed
  getters: {
    
  },
})
