<template>
  <form @submit="prevent">
    <h1>La Hamburgueseria</h1>
    <img src="../assets/img/logoBurger.jpg" alt="logoPizzeria" width="350">
    <br><br><br>

    <span>Hamburguesa: </span>
    <select v-model="burger">
      <option v-for="OptionBurger in tiposBurguer" v-bind:value="OptionBurger.id">
        {{ OptionBurger.tipo }} ({{ OptionBurger.precioBase }}€)
      </option>
    </select>
    <br><br>
    <span>Extras: </span><br>
    <div class="row">

      <span v-for="OptionCondimentos in condimentos" class="column">
        {{ OptionCondimentos.tipo }} ({{ OptionCondimentos.precioBase }}€) <input type="checkbox" name="condimentosSelect" v-bind:value="OptionCondimentos.precioBase" @click="select(OptionCondimentos)"><br></span>
    </div>

    <br><br>
    <span>Nota: los precios están sin IVA.</span>
    
    <br><br><br>
    <button id="btnPedido" @click="pedido">Realizar pedido</button>
    <br><br><br>

    <span id="factura"></span>
    <br><br>
    <div v-show="checkPedido == true">
      <h2 id="cantFactura">Precio consumicion: {{ cantFactura }}€</h2><br>
      <div>
        <span id="cantPagado">Pagado: {{ cantPagado }}€</span>
        <span id="cambio">
          Cambio:  
          <span v-if="cantPagado >= cantFactura">{{ cambio.toFixed(2) }}€</span> 
          <span v-else>---</span>
        </span>
      </div>
      <br>
      <div>
        <input type="number" v-model="importe">
        <button @click="pago">Pagar</button>
      </div>
      
    </div>
  </form>
</template>
<style>
    .row:after {
      content: "";
      display: table;
      clear: both;
    }
    .column {
      float: left;
      width: 35%;
    }
  </style>
<script>
// import { useELNOMBRE } from '../store/_plantillaStore';
// import { mapState } from "pinia";
export default {
  name: 'EjercicioHamburgueseriaView',
  components: {

  },
  data() {
    return {
      tiposBurguer: [
        {
          id: 0,
          tipo: "Cerdo",
          precioBase: 2.49
        },
        {
          id: 1,
          tipo: "Vacuno",
          precioBase: 4.49
        },
        {
          id: 2,
          tipo: "Pollo",
          precioBase: 3.49
        },
        {
          id: 3,
          tipo: "Vegane",
          precioBase: 2.99
        }
      ],
      condimentos: [
        {
          tipo: "Bacon",
          precioBase: 1.99
        },
        {
          tipo: "Queso",
          precioBase: 0.49
        },
        {
          tipo: "Pepinillos",
          precioBase: 0.2
        },
        {
          tipo: "Cebolla",
          precioBase: 0.2
        },
        {
          tipo: "Lechuga",
          precioBase: 0.2
        },
        {
          tipo: "Tomate",
          precioBase: 0.2
        },
        {
          tipo: "Salsa",
          precioBase: 0.3
        }
      ],
      
      condimentosSelect: [],
      burgerEntregada: [],
      burger: 0,

      checkPedido: false,
      cambio: 0,
      cantPagado: 0, 
      cantFactura: 2,
      importe: 0
    }
  },
  methods: {
    pedido() {
      event.preventDefault();

      let precioBurger = this.tiposBurguer[this.burger].precioBase;
      let precioCondimentos = 0;
      let txtCondimentos = ""

      for (let i = 0; i < this.condimentosSelect.length; i++) {
        precioCondimentos = precioCondimentos + this.condimentosSelect[i].precioBase;
      }

      let precioBurgerCondimentos = precioBurger + precioCondimentos;
      let precioBurgerIva = precioBurgerCondimentos * 1.21;

      // escribe el texto de los condimentos
      if (this.condimentosSelect.length == 0) {
        txtCondimentos = "ninguno"
      }
      else {
        for (let i = 0; i < this.condimentosSelect.length; i++) {
          txtCondimentos = txtCondimentos + " " + this.condimentosSelect[i].tipo + ","
        }

        // borrar la ultima coma
        if (txtCondimentos.charAt(txtCondimentos.length-1) == ",") {
          txtCondimentos = txtCondimentos.slice(0, -1);
        }
      }
      
      let pedidoBurger = {
        burgerElegida: this.tiposBurguer[this.burger].tipo,
        condimentos: txtCondimentos,
        precio: precioBurgerCondimentos.toFixed(2),
        precioIVA: precioBurgerIva.toFixed(2)
      }

      this.burgerEntregada.push(pedidoBurger);

      document.getElementById("factura").innerHTML = `
            La burger ${this.burgerEntregada[this.burgerEntregada.length - 1].burgerElegida} ha sido escogida.<br> 
            Se han elegido los siguientes extras: ${this.burgerEntregada[this.burgerEntregada.length - 1].condimentos}. <br> 
            El coste es ${this.burgerEntregada[this.burgerEntregada.length - 1].precio}€ sin IVA y ${this.burgerEntregada[this.burgerEntregada.length - 1].precioIVA}€ con IVA.<br><br>
            ¡Que aproveche!
        `;
      
      this.cantFactura = this.burgerEntregada[this.burgerEntregada.length - 1].precioIVA;
      this.checkPedido = true
    },
    select(condimento) {
      // findIndex busca el condimento en los seleccionados
      // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
      const i = this.condimentosSelect.findIndex(element => element.tipo === condimento.tipo);

      // si ya esta lo elimino
      if (i > -1) {
        console.log("Boton pulsado! Ese elemento ya esta escojido! Eliminando...");
        this.condimentosSelect.splice(i,1);
      }
      
      // si no esta lo añado
      else {
        console.log("Boton pulsado! Ese elemento ha sido escojido!");
        this.condimentosSelect.push(condimento);
      }
    },

    pago() {
      event.preventDefault();

      this.cantPagado = this.importe;
      this.cambio = this.cantPagado - this.cantFactura;
    }

  },
  computed: {


  },
  created() {

  }
}
</script>