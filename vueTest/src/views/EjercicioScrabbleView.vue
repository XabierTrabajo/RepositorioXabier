<template>
  <div>
    <input v-on:keyup="comprobarInputs" type="text" v-model="palabra"><br>
    <button @click="resetLetras">Borrar</button><button @click="puntuacion(palabra)">Comprobar puntuación</button>
    <br><br><br>

    <span>Letras disponibles:
      <span v-for="letra in disponibles">{{ letra }} <span> </span></span>
    </span><br>
    <span>Letras usadas:
      <span v-for="usada in usadas">{{ usada }} <span> </span></span>
    </span>

    <br><br><br>
    <span>Puntuación de la palabra: {{ puntos }}</span>
  </div>

</template>
<script>
// import { useELNOMBRE } from '../store/_plantillaStore';
// import { mapState } from "pinia";

export default {
  name: 'plantillaView',
  components: {

  },
  data() {
    return {
      palabra: "",
      disponibles: [],
      usadas: [],
      fallos: 0,

      puntos: 0,
      puntuaciones: {
        AEIOULNRST: 1,
        DGV: 2,
        BCMP: 3,
        FHVWY: 4,
        JXQZ: 5,
        KÑ: 6
      }
    }
  },
  methods: {
    puntuacion(letras) {
      this.puntos = 0;
      for (const l of letras.toUpperCase()) {
        for (const key in this.puntuaciones) {
          this.puntos += key.indexOf(l) !== -1 ? this.puntuaciones[key] : 0
        }
      }

      this.palabra = "";
      this.usadas = [];
      this.disponibles = [];
      this.generarDisponibles();

      return this.puntos;
    },

    generarDisponibles() {
      // genera las letras disponibles usando los siguientes caracteres
      const characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
      const charactersLength = characters.length;
      let counter = 0;

      while (counter < 30) {
        this.disponibles.push(
          characters.charAt(
            Math.floor(Math.random() * charactersLength)
          )
        );
        counter++;
      }
      console.log(this.disponibles);
    },

    comprobarInputs() {
      console.log(this.palabra);
      let letra = this.palabra.charAt(this.palabra.length - 1);
      this.fallos = 0;

      // recorro las opciones disponibles
      for (let i = 0; i < this.disponibles.length; i++) {
        // si la letra es valida
        if (letra.toUpperCase().includes(this.disponibles[i])) {
          this.usadas.push(letra.toUpperCase());
          this.disponibles.splice(i, 1);

          i = this.disponibles.length;
        }
        else {
          this.fallos++;
        }
      }
      // si la letra no es valida se borra
      if (this.fallos == this.disponibles.length) {
        this.palabra = this.palabra.slice(0, -1);
        this.fallos = 0;
      }
    },

    resetLetras() {
      for (let i = 0; i < this.usadas.length; i++) {
        this.disponibles.push(this.usadas[i].toUpperCase());
      }
      this.palabra = "";
      this.usadas = [];
    }
  },
  computed: {

  },
  created() {
    this.generarDisponibles();
  }
}
</script>