<template>
  <div>
    <h1>Playlist y canciones</h1>
    <form @submit.prevent @submit="insertar(txtCancion)">
      <span>Insertar cancion en la playlist:</span><br>
      <input type="text" v-model="txtCancion" required><button type="submit">Insertar</button><br>
      <span v-show="oculto == false">Esa canción ya está en la playlist!</span>
    </form>
    <br><br><br>
    <span>Las canciones de la playlist</span><br>
    <select v-model="cancionSelect"><br>
      <option v-for="cancion in playlist" v-bind:value="cancion">{{ cancion }}</option>
    </select><br>
    <button @click="eliminarDuplicados">Borrar duplicados</button>
    <button @click="eliminarCancion(cancionSelect)">Borrar de la playlist</button>
    <button @click="ordenarPlaylist">Ordenar Alfabeticamente</button>
  </div>

</template>
<script>
// import { useELNOMBRE } from '../store/_plantillaStore';
// import { mapState } from "pinia";
export default {
  name: 'EjercicioPlaylistView',
  components: {

  },
  data() {
    return {
      playlist: [
        'All Mine - Portishead',
        'Sight to Behold - Devendra Banhart',
        'Sour Times - Portishead',
        'The Treasure - Fra Lippo Lippi',
        'After the Fall - Klaus Nomi',
        'Court and Spark - Joni Mitchell',
        'Big Yellow Taxi - Joni Mitchell',
        'Court and Spark - Joni Mitchell',
        'Sour Times - Portishead',
        'The Treasure - Fra Lippo Lippi',
        'ae'
      ],
      oculto: true,
      txtCancion: "",
      cancionSelect: ""
    }
  },
  methods: {
    insertar(cancion) {
      let contador = 0;
      for (let i = 0; i < this.playlist.length; i++) {
        // si encuentra la cancion
        if (this.playlist[i].toUpperCase() == cancion.toUpperCase()) {
          console.log(this.playlist[i].toUpperCase());
          this.oculto = false;
          contador = 0;
          console.log("Boton pulsado! Esa cancion ya existe!");
          i = this.playlist.length;
        }
        else {
          contador++;
        }
      }
      // si aun no existe en la playlist la inserta
      if (contador == this.playlist.length) {
        // pone la primera letra en matusculas para filtrar mejor luego
        let cancionMayuscula = "";
        for (let i = 0; i < cancion.length; i++) {
          if (i == 0) {
            cancionMayuscula = cancion[0].toUpperCase();
          }
          else {
            cancionMayuscula = cancionMayuscula + cancion[i];
          }
        }
        // inserta la cancion
        this.playlist.push(cancionMayuscula);
        this.txtCancion = "";
        this.oculto = true;
        console.log("Boton pulsado! Insertando...");
      }

    },

    eliminarDuplicados() {
      let arrayNoDupes = [];

      // inserta las canciones en el array
      for (let i = 0; i < this.playlist.length; i++) {
        // previene que se repita el mismo registro
        if (arrayNoDupes.includes(this.playlist[i])) {
          // salta al siguiente registro
        }
        else {
          // inserta la cancion
          arrayNoDupes.push(this.playlist[i]);
        }
      }

      // refresco la playlist
      console.log("Boton pulsado! Eliminando duplicados...");
      this.playlist = arrayNoDupes;
    },

    eliminarCancion(cancion) {
      // findIndex busca la cancion en la playlist
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.playlist.findIndex(element => element === cancion);

      // si ya esta lo elimino
      if (i > -1) {
        console.log("Boton pulsado! Eliminando...");
        this.playlist.splice(i, 1);
      }

      // si no esta
      else {
        console.log("Boton pulsado! Ha ocurrido un error y no se pudo encontrar la cancion!");
      }
    },

    // ordena la playlist alfabeticamente
    ordenarPlaylist() {
      console.log("Boton pulsado! Ordenando...");
      this.playlist.sort();
    },

    mayusculaInicial() {
      // pone la primera letra en matusculas para filtrar mejor luego
      let cancionMayuscula = "";
      let cancionesFormateadas = [];
      for (let i = 0; i < this.playlist.length; i++) {
        for (let e = 0; e < this.playlist[i].length; e++) {
          if (e == 0) {
            cancionMayuscula = this.playlist[i][0].toUpperCase();
          }
          else {
            cancionMayuscula = cancionMayuscula + this.playlist[i][e];
          }
          
        }
        // inserta la cancion cuando recorre el titulo
        cancionesFormateadas.push(cancionMayuscula);
        cancionMayuscula = "";
      }
      this.playlist = cancionesFormateadas;
      console.log("Formateando playlist...");

    }
  },
  computed: {


  },
  created() {
    this.mayusculaInicial();
  }
}
</script>