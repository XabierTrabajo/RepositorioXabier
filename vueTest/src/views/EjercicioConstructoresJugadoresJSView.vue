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
    <br><br>
    <div>
      <span>Buscar por: </span>
    <select v-model="filtroExtra">
      <option value="0">Nº Vidas</option>
      <option value="1">Tiene Pistola</option>
      <option value="2">Tiene Granada</option>
      <option value="3">Nº Balas</option>
    </select>
    <span v-show="filtroExtra == 0" style="margin-left: 3%;"><input type="number" v-model="vidas" v-on:change="sinNegativos"></span>
    <span v-show="filtroExtra == 1" style="margin-left: 3%;"><input type="radio"  v-model="pistola" value="si">Si <input type="radio" v-model="pistola" value="no">No</span>
    <span v-show="filtroExtra == 2" style="margin-left: 3%;"><input type="radio"  v-model="granada" value="si">Si <input type="radio" v-model="granada" value="no">No</span>
    <span v-show="filtroExtra == 3" style="margin-left: 3%;"><input type="number" v-model="balas" v-on:change="sinNegativos"></span>
    </div>
    
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
  name: 'EjercicioConstructoresJugadoresJSView',
  components: {

  },
  data() {
    return {
      partida: [],
      texto: "",
      jugadorSeleccionado: "",
      filtroExtra: 0,
      pistola: "",
      granada: "",
      vidas: 0,
      balas: 0
    }
  },
  methods: {
    // hago las validaciones de forma externa, antes de crear el objeto
    comprobar(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas) {

      if (tienePistola == false || tienePistola == "false" || tienePistola == "falso" || tienePistola == "no" || tienePistola == null || tienePistola == 0) {
        numeroBalas = 0;
        tienePistola = "no";
      }
      else {
        tienePistola = "si";
      }

      if (tieneGranada == false || tieneGranada == "false" || tieneGranada == "falso" || tieneGranada == "no" || tieneGranada == null || tieneGranada == 0) {
        tieneGranada = "no";
      }
      else {
        tieneGranada = "si";
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
    // previene numeros negativos
    sinNegativos() {
      if (this.vidas < 0) {
        this.vidas = 0;
      }
      if (this.balas < 0) {
        this.balas = 0;
      }
    },

    
  },
  computed: {
    nombresFiltrados() {
      return this.partida.filter((jugador) => jugador.nombre.toUpperCase().includes(this.texto.toUpperCase()));
    },

    //filtro por nombre
    jugadoresFiltradosNombre() {
      return this.partida.filter((jugador) => jugador.nombre.toUpperCase().includes(this.jugadorSeleccionado.toUpperCase()));
    },

    // filtro 2 categorias o mas
    // jugadoresFiltrados() {
    //   return this.partida.filter //((jugador) => jugador.nombre.toUpperCase().includes(this.jugadorSeleccionado.toUpperCase()));
    //   (jugador => {
    //       //return //jugador.nombre.toUpperCase().includes(this.jugadorSeleccionado.toUpperCase()) &&
    //       return jugador.tienePistola == this.pistola || jugador.tieneGranada == this.granada //|| jugador.numeroVidas >= this.vidas || jugador.numeroBalas >= this.balas);
    //   });                                          // || or && and
    // },

    // filtro por objetos
    jugadoresFiltrados() {
      return this.partida.filter //((jugador) => jugador.nombre.toUpperCase().includes(this.jugadorSeleccionado.toUpperCase()));
        (jugador => {
          if (this.filtroExtra == 0) {
            return jugador.numeroVidas >= this.vidas;
          }
          if (this.filtroExtra == 1) {
            return jugador.tienePistola == this.pistola;
          }
          if (this.filtroExtra == 2) {
            return jugador.tieneGranada == this.granada;
          }
          if (this.filtroExtra == 3) {
            return jugador.numeroBalas >= this.balas;
          }
        });
    }
  },
  created() {
    this.comprobar("Jon", 5, "si", "si", 159);
    this.comprobar("Jon2", 10, "no", "si", 4);
    this.comprobar("Jon3", 2, "si", "no", 95);
    this.comprobar("Maria", 3, "falso", "si", 999);
    this.comprobar("Pepe", 999, "si", "no", 300);
    console.log(this.partida);
  }
}
</script>