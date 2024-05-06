<template>
    <div>
      <span>Elegir unidad: </span>
      <select v-model="tipoUnidad">
        <option value="longitud">Longitud</option>
        <option value="money">Euros y pesetas</option>
        <option value="tiempo">Tiempo</option>
      </select>

      <br><br><br>
      <div v-show="tipoUnidad == 'longitud'" >
        <div style="display: flex; justify-content: space-around;">
          <div>
            <span>Metros m</span><input type="radio" name="medidaL" value="m" v-model="medidaL"><br>
            <span>Pies ft </span><input type="radio" name="medidaL" value="ft" v-model="medidaL"><br>
            
          </div>
          <div>
            <h1 style="font-size: xx-large;">></h1>
          </div>
          <div>
            <span>Metros m </span><input type="radio" name="medidaR" value="m" v-model="medidaR"><br>
            <span>Pies ft </span><input type="radio" name="medidaR" value="ft" v-model="medidaR"><br>
            
          </div>
        </div>
        <br><br>
        <div style="display: flex; justify-content: space-around;">
          <div style="display: flex;">
            <input type="number" v-model="numeroDistancia">
            <h2>{{ medidaL }}</h2>
          </div>
          <button style="font-size: larger;" @click="convertirDistancia"> > </button>
          <h2>{{ resultadoDistancia.toFixed(5) }}{{ medidaR }}</h2>
        </div>
      </div>

      <div v-show="tipoUnidad == 'money'">
        <div style="display: flex; justify-content: space-around;">
          <div>
            <span>Euros € </span><input type="radio" name="moneyL" value="eur" v-model="moneyL"><br>
            <span>Pesetas pts </span><input type="radio" name="moneyL" value="pts" v-model="moneyL"><br>
          </div>
          <div>
            <h1 style="font-size: xx-large;">></h1>
          </div>
          <div>
            <span>Euros € </span><input type="radio" name="moneyR" value="eur" v-model="moneyR"><br>
            <span>Pesetas pts </span><input type="radio" name="moneyR" value="pts" v-model="moneyR"><br>
            
          </div>
        </div>
        <br><br>
        <div style="display: flex; justify-content: space-around;">
          <div style="display: flex;">
            <input type="number" v-model="numeroMoney">
            <h2>{{ moneyL }}</h2>
          </div>
          <button style="font-size: larger;" @click="convertirMoney"> > </button>
          <h2>{{ resultadoMoney.toFixed(2) }}{{ moneyR }}</h2>
        </div>
      </div>

      <div v-show="tipoUnidad == 'tiempo'">
        <div style="display: flex; justify-content: space-around;">
          <div>
            <span>Segundos s </span><input type="radio" name="tiempoL" value="s" v-model="tiempoL"><br>
            <span>Minutos m </span><input type="radio" name="tiempoL" value="m" v-model="tiempoL"><br>
            <span>Horas h </span><input type="radio" name="tiempoL" value="h" v-model="tiempoL"><br>
          </div>
          <div>
            <h1 style="font-size: xx-large;">></h1>
          </div>
          <div>
            <span>Segundos s </span><input type="radio" name="tiempoR" value="s" v-model="tiempoR"><br>
            <span>Minutos m </span><input type="radio" name="tiempoR" value="m" v-model="tiempoR"><br>
            <span>Horas h </span><input type="radio" name="tiempoR" value="h" v-model="tiempoR"><br>
          </div>
        </div>
        <br><br>
        <div style="display: flex; justify-content: space-around;">
          <div style="display: flex;">
            <input type="number" v-model="numeroTiempo">
            <h2>{{ tiempoL }}</h2>
          </div>
          <button style="font-size: larger;" @click="convertirTiempo"> > </button>
          <h2>{{ Math.ceil(resultadoTiempo.toFixed(2)) }}{{ tiempoR }}</h2>
        </div>
      </div>
    </div>

</template>
<script>
  import { useELNOMBRE } from '../store/_plantillaStore';
  import { mapState } from "pinia";
  export default{
    name: 'ConversorLongitudMoneyTiempoView',
    components: {
      
    },
    data() {
      return {
        tipoUnidad: "",

        numeroDistancia: 0,
        resultadoDistancia: 0,
        medidaL: null,
        medidaR: null,

        numeroMoney: 0,
        resultadoMoney: 0,
        moneyL: null,
        moneyR: null,

        numeroTiempo: 0,
        resultadoTiempo: 0,
        tiempoL: null,
        tiempoR: null
      }
    },
    methods:{
      convertirDistancia() {
        this.resultadoDistancia = 0;
        let distanciaRestante = this.numeroDistancia;
        if (this.medidaL == "m" && this.medidaR == "ft") {
          while (distanciaRestante >= 0) {
              if (distanciaRestante <= 0) {
                  break;
              }

              distanciaRestante = distanciaRestante - 0.001;
              this.resultadoDistancia = this.resultadoDistancia + 0.00328084;
          }
          distanciaRestante = 0;
          return this.resultadoDistancia;
        }
        if (this.medidaL == "ft" && this.medidaR == "m") {
          while (distanciaRestante >= 0) {
              if (distanciaRestante <= 0) {
                  break;
              }

              distanciaRestante = distanciaRestante - 0.001;
              this.resultadoDistancia = this.resultadoDistancia + 0.0003048;
          }
          distanciaRestante = 0;
          return this.resultadoDistancia;
        }
        
      },
      convertirMoney() {
        this.resultadoMoney = 0;
        let moneyRestante = this.numeroMoney;
        if (this.moneyL == "eur" && this.moneyR == "pts") {
          while (moneyRestante >= 0) {
              if (moneyRestante <= 0) {
                  break;
              }

              moneyRestante = moneyRestante - 0.01;
              this.resultadoMoney = this.resultadoMoney + 1.66;
          }
          moneyRestante = 0;
          return this.resultadoMoney;
        }
        if (this.moneyL == "pts" && this.moneyR == "eur") {
          while (moneyRestante >= 0) {
              if (moneyRestante <= 0) {
                  break;
              }

              moneyRestante = moneyRestante - 1;
              this.resultadoMoney = this.resultadoMoney + 0.006010121;
          }
          moneyRestante = 0;
          return this.resultadoMoney;
        }
        
      },
      convertirTiempo() {
        this.resultadoTiempo = 0;
        let tiempoRestante = this.numeroTiempo;

        // segundos
        if (this.tiempoL == "s" && this.tiempoR == "m") {
          while (tiempoRestante >= 0) {
              if (tiempoRestante <= 0) {
                  break;
              }

              tiempoRestante = tiempoRestante - 1;
              this.resultadoTiempo = this.resultadoTiempo + 0.01666666666666666666666666666666666666666666666666666666666666667;
          }
          tiempoRestante = 0;
          return this.resultadoTiempo;
        }
        if (this.tiempoL == "s" && this.tiempoR == "h") {
          while (tiempoRestante >= 0) {
              if (tiempoRestante <= 0) {
                  break;
              }

              tiempoRestante = tiempoRestante - 1;
              this.resultadoTiempo = this.resultadoTiempo + 0.00027777777777777777777777777777777777777777777777777777777777778;
          }
          tiempoRestante = 0;
          return this.resultadoTiempo;
        }

        // minutos
        if (this.tiempoL == "m" && this.tiempoR == "s") {
          while (tiempoRestante >= 0) {
              if (tiempoRestante <= 0) {
                  break;
              }

              tiempoRestante = tiempoRestante - 0.01666666666666666666666666666666666666666666666666666666666666667;
              this.resultadoTiempo = this.resultadoTiempo + 1;
          }
          tiempoRestante = 0;
          return this.resultadoTiempo;
        }
        if (this.tiempoL == "m" && this.tiempoR == "h") {
          while (tiempoRestante >= 0) {
              if (tiempoRestante <= 0) {
                  break;
              }

              tiempoRestante = tiempoRestante - 1;
              this.resultadoTiempo = this.resultadoTiempo + 0.01666666666666666666666666666666666666666666666666666666666666667;
          }
          tiempoRestante = 0;
          return this.resultadoTiempo;
        }

        // horas
        if (this.tiempoL == "h" && this.tiempoR == "s") {
          while (tiempoRestante >= 0) {
              if (tiempoRestante <= 0) {
                  break;
              }

              tiempoRestante = tiempoRestante - 0.00027777777777777777777777777777777777777777777777777777777777778;
              this.resultadoTiempo = this.resultadoTiempo + 1;
          }
          tiempoRestante = 0;
          return this.resultadoTiempo;
        }
        if (this.tiempoL == "h" && this.tiempoR == "m") {
          while (tiempoRestante >= 0) {
              if (tiempoRestante <= 0) {
                  break;
              }

              tiempoRestante = tiempoRestante - 0.01666666666666666666666666666666666666666666666666666666666666667;
              this.resultadoTiempo = this.resultadoTiempo + 1;
          }
          tiempoRestante = 0;
          return this.resultadoTiempo;
        }
      }


    },
    computed: {
    
     
    },
    created() {
      
    }
  }
</script>