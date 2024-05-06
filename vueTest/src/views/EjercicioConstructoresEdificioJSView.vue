<template>
  <div>
    <span>Buscar edificios en calle: </span>
    <input type="text" v-model="texto"><br>
    <span>Edificios encontrados en la calle solicitada: </span>
    <select v-model="edificioSeleccionado">
      <option v-for="edificio in callesFiltradas" v-bind:value="edificio.numero">
        {{ edificio.calle }} - Nº{{ edificio.numero }}
      </option>
    </select>
    <br><br><br>

    <span v-for="edificio in edificioFiltrado">
      Calle: {{ edificio.calle }} | Nº: {{ edificio.numero }} | Codigo Postal: {{ edificio.codigoPostal }} <br>
      Pisos: <br>
      <span v-for="piso in edificio.pisos"> Nº Planta: {{ piso[0].numeroPlanta }} | Puerta: {{ piso[0].puerta }} | Nombre propietario: {{ piso[0].nombrePropietario }} <br></span>
    </span>
  </div>

</template>
<script>
// import { useELNOMBRE } from '../store/_plantillaStore';
// import { mapState } from "pinia";
// Conversion del mismo ejercicio hecho con js puro
export default {
  name: 'EjercicioConstructoresEdificioJSView',
  components: {

  },
  data() {
    return {
      edificios: [],
      texto: "",
      edificioSeleccionado: 0,
      numEdificios: 1,
      numCalles: 1
    }
  },
  methods: {
    agregarPisos() {
      // variables
      let numPiso; let puertaPiso; let propietario; let arrayPisos = []; let fin = 0;

      // genero datos para cada piso
      for (let i = 0; i < 4; i++) {
        numPiso = i;
        for (let e = 1; e < 5; e++) {

          switch (e) {
            case 1:
              puertaPiso = "Puerta A";
              propietario = "Propietario A";
              break;
            case 2:
              puertaPiso = "Puerta B";
              propietario = "Propietario B";
              break;
            case 3:
              puertaPiso = "Puerta C";
              propietario = "Propietario C";
              break;
            case 4:
              puertaPiso = "Puerta D";
              propietario = "Propietario D";
              break;

            default:
              break;
          }

          // preparo pa introducir los datos
          let planta = [
            {
              numeroPlanta: numPiso,
              puerta: puertaPiso,
              nombrePropietario: propietario
            }
          ];
          // inserto los datos de 1 piso
          arrayPisos.push(planta);

        }
        fin++;

      }
      if (fin == 4) {
        //calle, numero, codigoPostal, piso
        let objetoEdificio = {
          calle: "C/ La Calle " + this.numCalles,
          numero: this.numEdificios,
          codigoPostal: 40000,
          pisos: arrayPisos
        }

        this.edificios.push(objetoEdificio);
        console.log(this.edificios);
      }
    },

    pisosAcrear() {
      while(this.numCalles < 10) {
        this.agregarPisos();
        this.numEdificios++;

        if(this.numCalles < this.numEdificios) {
          this.numCalles++;
        }
      }
    }

  },
  computed: {
    
    callesFiltradas() {
      return this.edificios.filter((edificio) => edificio.calle.toUpperCase().includes(this.texto.toUpperCase()));
    },
    edificioFiltrado() {
      return this.edificios.filter((edificio) => edificio.numero == this.edificioSeleccionado);
    }
    
  },
  created() {
    this.pisosAcrear();
  }
}
</script>