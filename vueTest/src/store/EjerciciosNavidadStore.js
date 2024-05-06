
import { defineStore } from 'pinia'

export const useEjerciciosNavidadStore = defineStore('store', {
  // state == data
  state: () => ({     
    productosAlmacenados: [],
    totalAlmacen: 0,
    peliculasAlmacenadas: [
      {
        titulo: "Pelicula 1",
        likes: 3
      },
      {
        titulo: "Pelicula 2",
        likes: 13
      },
      {
        titulo: "Pelicula 3",
        likes: 31
      }
    ],
    totalLikesAlmacen: 0,
    arrayNumerosAlmacenados: [10, 2, -3, 4, 7]
  }),
  // actions == methods
  actions: {
    guardarProductoStore(articulo) {
      this.productosAlmacenados.push(articulo);      
    },

    actualizarTotalStore(articulo) {
      this.totalAlmacen += articulo.precio;
    },

    restarLikeStore(pelicula) {
      // findIndex busca el servicio en los favoritos
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.peliculasAlmacenadas.findIndex(element => element.titulo === pelicula.titulo);

      // si ya esta lo reduzco
      if (i > -1) {
        this.peliculasAlmacenadas[i].likes--;
      }

      // si no esta
      else {

      }
    },

    sumarLikeStore(pelicula) {
      // findIndex busca el servicio en los favoritos
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.peliculasAlmacenadas.findIndex(element => element.titulo === pelicula.titulo);

      // si ya esta lo reduzco
      if (i > -1) {
        this.peliculasAlmacenadas[i].likes++;
      }

      // si no esta
      else {

      }
    },

    guardarNumeroStore(numero) {
      this.arrayNumerosAlmacenados.push(numero);      
    }
  },
  // getters == computed
  getters: {
    // metodo computado, llamar a este metodo directamente como variable de vue
    calcularTotalLikesStore() {
      // reseteo la variable para evitar que se duplique la cantidad cuando cambia el numero de likes
      this.totalLikesAlmacen = 0;
      for (let i = 0; i < this.peliculasAlmacenadas.length; i++) {
        this.totalLikesAlmacen += this.peliculasAlmacenadas[i].likes;
        
      }
      return this.totalLikesAlmacen;
    }
  },
})
