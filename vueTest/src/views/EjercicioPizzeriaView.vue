<template>
  <form @submit="prevent">
    <h1>La Pizzeria</h1>
    <img src="../assets/img/logoPizzeria.jpg" alt="logoPizzeria" width="350">
    <br><br><br>

    <span>Pizza: </span>
    <select v-model="pizza">
      <option v-for="OptionPizza in tiposPizza" v-bind:value="OptionPizza.id">
        {{ OptionPizza.tipo }} ({{ OptionPizza.precioBase }}€)
      </option>
    </select>
    <br><br>
    <span>Extras: </span><br>
    <span>Jamón (1.99€) </span><input type="number" v-model="cantJamon"><br>
    <span>Queso (0.99€) </span><input type="number" v-model="cantQueso"><br>
    <span>Champiñones (1.49€) </span><input type="number" v-model="cantChampis"><br>

    <br><br><br>
    <button id="btnPedido" @click="pedido">Realizar pedido</button>
    <br><br><br>

    <span id="factura"></span>
  </form>

</template>
<script>
// import { useELNOMBRE } from '../store/_plantillaStore';
// import { mapState } from "pinia";
export default {
  name: 'EjercicioPizzeriaView',
  components: {

  },
  data() {
    return {
      tiposPizza: [
        {
          id: 0,
          tipo: "Margarita",
          precioBase: 7.49
        },
        {
          id: 1,
          tipo: "Jamón y queso",
          precioBase: 9.99
        },
        {
          id: 2,
          tipo: "4 quesos",
          precioBase: 8.99
        }
      ],
      condimentos: [
        {
          tipo: "Jamón",
          precioBase: 1.99
        },
        {
          tipo: "Queso",
          precioBase: 0.99
        },
        {
          tipo: "Champiñones",
          precioBase: 1.49
        }
      ],

      pizzaEntregada: [],

      pizza: 0,
      cantJamon: 0,
      cantQueso: 0,
      cantChampis: 0
    }
  },
  methods: {
    pedido() {
      event.preventDefault();

      let txtCondimentos = "";

      if (this.cantJamon > 0) {
        txtCondimentos = txtCondimentos + this.cantJamon + "x " + this.condimentos[0].tipo + " ";
      }
      if (this.cantQueso > 0) {
        txtCondimentos = txtCondimentos + this.cantQueso + "x " + this.condimentos[1].tipo + " ";
      }
      if (this.cantChampis > 0) {
        txtCondimentos = txtCondimentos + this.cantChampis + "x " + this.condimentos[2].tipo + " ";
      }
      if (this.cantJamon <= 0 && this.cantQueso <= 0 && this.cantChampis <= 0) {
        txtCondimentos = "ninguno";
      }

      let precioPizza = this.tiposPizza[this.pizza].precioBase + (this.condimentos[0].precioBase * this.cantJamon) + (this.condimentos[1].precioBase * this.cantQueso) + (this.condimentos[2].precioBase * this.cantChampis);
      let precioPizzaIva = precioPizza * 1.21;

      let pedidoPizza = {
        pizzaElegida: this.tiposPizza[this.pizza].tipo,
        condimentos: txtCondimentos,
        precio: precioPizza.toFixed(2),
        precioIVA: precioPizzaIva.toFixed(2)
      }

      this.pizzaEntregada.push(pedidoPizza);

      document.getElementById("factura").innerHTML = `
            La pizza ${this.pizzaEntregada[this.pizzaEntregada.length - 1].pizzaElegida} ha sido escogida.<br> 
            Se han elegido los siguientes extras: ${this.pizzaEntregada[this.pizzaEntregada.length - 1].condimentos}. <br> 
            El coste es ${this.pizzaEntregada[this.pizzaEntregada.length - 1].precio}€ sin IVA y ${this.pizzaEntregada[this.pizzaEntregada.length - 1].precioIVA}€ con IVA.<br><br>
            ¡Que aproveche!
        `;
    }
  },
  computed: {


  },
  created() {

  }
}
</script>