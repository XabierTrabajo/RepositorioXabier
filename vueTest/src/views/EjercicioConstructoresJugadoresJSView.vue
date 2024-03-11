<template>
  <div>
    <span>Buscar jugador: </span>
    <input type="text" v-model="texto"><br>
    <span>Jugadores encontrados: </span>
    <select v-model="jugadorSeleccionado">
      <option v-for="jugador in nombresFiltrados" v-bind:value="jugador.nombre">
        {{ jugador.nombre }}
      </option>
    </select>
    <br><br><br>

    <span v-for="jugador in jugadoresFiltrados">
      Nombre: {{ jugador.nombre }} | Nº Vidas: {{ jugador.numeroVidas }} | Tiene pistola: {{ jugador.tienePistola }} |
      Tiene granada: {{ jugador.tieneGranada }} | Nº: balas {{ jugador.numeroBalas }}<br>
    </span>
  </div>

</template>
<script>
// import { useELNOMBRE } from '../store/_plantillaStore';
// import { mapState } from "pinia";
// Conversion del mismo ejercicio hecho con js puro
export default {
  name: 'plantillaView',
  components: {

  },
  data() {
    return {
      partida: [],
      texto: "",
      jugadorSeleccionado: ""
    }
  },
  methods: {
    // hago las validaciones de forma externa, antes de crear el objeto
    comprobar(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas) {

      if (tienePistola == false || tienePistola == "false" || tienePistola == "falso" || tienePistola == "no" || tienePistola == null || tienePistola == 0) {
        numeroBalas = 0;
      }

      //let nuevoJugador = new Jugador(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas);
      let objectoJugador = {
        nombre: nombre,
        numeroVidas: numeroVidas,
        tienePistola: tienePistola,
        tieneGranada: tieneGranada,
        numeroBalas: numeroBalas
      }
      this.partida.push(objectoJugador);

    },

    
  },
  computed: {
    nombresFiltrados() {
      return this.partida.filter((jugador) => jugador.nombre.toUpperCase().includes(this.texto.toUpperCase()));
    },
    jugadoresFiltrados() {
      return this.partida.filter((jugador) => jugador.nombre.toUpperCase().includes(this.jugadorSeleccionado.toUpperCase()));
    }
  },
  created() {
    this.comprobar("Jon", 5, "si", "si", 4);
    this.comprobar("Jon2", 10, "no", "si", 4);
    this.comprobar("Jon3", 2, "si", "si", 4);
    this.comprobar("Maria", 3, "falso", "si", 999);
    this.comprobar("Pepe", 999, "si", "si", 300);
    console.log(this.partida);
  }
}
</script>