<template>
    <div>
      <table>
        <tr>
          <th>Fruta</th>
          <th>Precio</th>
          <th>Stock (KG)</th>
          <th>Stock Vendido (KG)</th>
          <th>Coste</th>
          <th>Costes Totales</th>
          <th>Ventas</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="fruta in stock">
          <th style="display: none;">{{ fruta.totalUpkeep =  fruta.upkeep * fruta.KG }}</th>
          <th style="display: none;">{{ fruta.totalSales =  fruta.priceKG * fruta.soldKG }}</th>
          <th>{{ fruta.name }}</th>
          <th>{{ fruta.priceKG }} €</th>
          <th>{{ fruta.KG }}</th>
          <th>{{ fruta.soldKG }}</th>
          <th>{{ fruta.upkeep }} €/KG</th>
          <th>{{ fruta.totalUpkeep.toFixed(2) }} €</th>
          <th>
            <span style="color: red;" v-if="fruta.totalSales < fruta.totalUpkeep">
              {{ fruta.totalSales.toFixed(2) }} €
            </span>
            <span style="color: green;" v-if="fruta.totalSales > fruta.totalUpkeep">
              {{ fruta.totalSales.toFixed(2) }} €
            </span>
          </th>
          <th>
            <button @click="comprar(fruta)">Comprar</button>
            <button @click="vender(fruta)">Vender</button>
          </th>
        </tr>
      </table>
      <br><br><br>
      <div>
        <h2>Total KG: {{ totalKGstock }}</h2>
        <h2>Total costes: {{ totalUpkeepCosts.toFixed(2) }} €</h2>
        <h2>Total KG vendidos: {{ totalKGsales }}</h2>
        <h2>Total ventas: {{ totalSalesAmount.toFixed(2) }} €</h2>
      </div>
    </div>

</template>
<script>
  import { useELNOMBRE } from '../store/_plantillaStore';
  import { mapState } from "pinia";
  export default{
    name: 'EjercicioFruteriaView',
    components: {
      
    },
    data() {
      return {
        totalKGstock: 0,
        totalUpkeepCosts: 0,
        totalSalesAmount: 0,
        totalKGsales: 0,
        stock: [
          {
            id: 0,
            name: "Manzanas",
            priceKG: 1.2,
            KG: 59,
            soldKG: 3,
            upkeep: 1
          },
          {
            id: 1,
            name: "Peras",
            priceKG: 1.6,
            KG: 60,
            soldKG: 52,
            upkeep: 1.2
          },
          {
            id: 2,
            name: "Platanos",
            priceKG: 1.1,
            KG: 34,
            soldKG: 0,
            upkeep: 0.8
          },
          {
            id: 3,
            name: "Naranjas",
            priceKG: 1,
            KG: 42,
            soldKG: 9,
            upkeep: 0.79
          },
          {
            id: 4,
            name: "Fresas",
            priceKG: 2,
            KG: 25,
            soldKG: 12,
            upkeep: 1.3
          },
        ]
      }
    },
    methods:{
      comprar(articulo) {
        // findIndex busca el evento en el almacen
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.stock.findIndex(element => element.name === articulo.name);
        
        // si lo encuentra compro un KG
        if (i > -1) {
          this.stock[i].KG++;
          this.actualizarTotales();
          console.log("Boton pulsado! Se ha comprado un kg de " + this.stock[i].name + "!");
        }

        // si no lo encuentra
        else {
          console.log("Boton pulsado! No se pudo encontrar esa fruta en el almacén!");
        }
      },
      vender(articulo) {
        // findIndex busca el evento en el almacen
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.stock.findIndex(element => element.name === articulo.name);
        
        // si lo encuentra compro un KG
        if (i > -1) {
          if (this.stock[i].KG > 0) {
            this.stock[i].KG--;
            this.stock[i].soldKG++;
            this.actualizarTotales();
            console.log("Boton pulsado! Se ha vendido un kg de " + this.stock[i].name + "!");
          }
          else {
            console.log("Boton pulsado! No se ha vendido un kg de " + this.stock[i].name + " porque no hay suficiente stock!");
          }
          
        }

        // si no lo encuentra
        else {
          console.log("Boton pulsado! No se pudo encontrar esa fruta en el almacén!");
        }
      },
      actualizarTotales() {
        // resetea las variables
        this.totalKGstock = 0;
        this.totalUpkeepCosts = 0;
        this.totalKGsales = 0;
        this.totalSalesAmount = 0;

        // calcula todo
        for (let i = 0; i < this.stock.length; i++) {
          this.totalKGstock += this.stock[i].KG;
          this.totalUpkeepCosts += (this.stock[i].upkeep * this.stock[i].KG);
          this.totalKGsales += this.stock[i].soldKG;
          this.totalSalesAmount += (this.stock[i].soldKG * this.stock[i].priceKG);
        }
      }
    },
    computed: {

    },
    created() {
      this.actualizarTotales();
    }
  }
</script>