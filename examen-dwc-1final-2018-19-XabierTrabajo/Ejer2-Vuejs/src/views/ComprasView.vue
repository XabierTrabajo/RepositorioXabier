<template>
    <div>
      <span v-if="login == true">Compras de {{ usuario }}</span>
      <span v-else>Compras de Invitado</span>
    </div>
    <div>
      <span>Listado de categorías: </span>
      <input type="text" v-model="categoriaSelect">
      <ul v-for="categoria in arrayCategorias">
        <li style="list-style: none;">{{ categoria }}</li>
      </ul>
    </div>
    <table style="text-align: left;">
      <tr>
          <th>Categoria</th>
          <th>Icono</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Comprar</th>
          <th style="padding-left: 1%;">Unidades seleccionadas</th>
      </tr>
      <tr v-for="producto in filtroCategorias">
        <td>{{ producto.category }}</td>
        <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
        <td><img v-bind:src="producto.image" v-bind:alt="producto.image" style="width: 35px; height: 35px;"></td>
        <td style="padding-left: 1%;">{{ producto.title }}</td>
        <td style="width: 8%;">{{ producto.price }} €</td>
        <td>
          <button @click="comprar(producto)">+</button>
          <button @click="vender(producto)">-</button>
        </td>
        <!-- Comprueba si el producto esta comprado, si encuentra el producto muestra sus unidades -->
        <td style="padding-left: 1%;"><input type="number" disabled v-bind:value="productosComprados.findIndex( e=> e.title == producto.title) != -1 ? productosComprados[productosComprados.findIndex( e=> e.title == producto.title)].units : 0"></td>
      </tr>
    </table>



    <br><br><br>
    <div>
      <h2>Total de compra: {{ total.toFixed(2) }} €</h2>

      <table style="text-align: left; width: 75%;">
        <tr>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Unidades seleccionadas</th>
            <th>Subtotal</th>
        </tr>
        <tr v-for="producto in productosComprados">
          <td>{{ producto.title }}</td>
          <td>{{ producto.price }} €</td>
          <td><input type="number" disabled v-bind:value="producto.units"></td>
          <td><input type="number" disabled v-bind:value="producto.units * producto.price"></td>
        </tr>
      </table>
      <br><br><br>
      <div>
        <h2>
          <span>Entregado: </span>
          <input type="number" v-model="dineroEntregado"> €
        </h2>
        <br><br>
        <h2 >Cambio: {{ pago.toFixed(2) }} €</h2>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import { useCounter } from '../stores/Counter';
  import { mapState } from "pinia";
  export default{
    name: 'ComprasView',
    components: {
      
    },
    data() {
      return {
        arrayCategorias: [],
        arrayProductos: [],
        categoriaSelect: "",
        productosComprados: [],
        total: 0,

        dineroEntregado: null,
        dineroCambio: null
      }
    },
    methods:{
      async cargarCategorias() {
        const allData = await axios.get("/json/categories.json");
        this.arrayCategorias = allData.data;
        console.log(this.arrayCategorias);
      },

      async cargarProductos() {
        const allData = await axios.get("/json/products.json");
        this.arrayProductos = allData.data;
        console.log(this.arrayProductos);
      },

      comprar(producto) {
        let articulo = {
          title: producto.title,
          price: producto.price,
          units: 1
        };
        this.guardarArticulo(articulo);
      },

      vender(producto) {
        let articulo = {
          title: producto.title,
          price: producto.price,
          units: 1
        };
        this.borrarArticulo(articulo);
      },

      guardarArticulo(articulo) {
        // findIndex busca el producto en el carrito
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.productosComprados.findIndex(element => element.title === articulo.title);

        // si ya esta le sumo una unidad
        if (i > -1) {
          console.log("Ese articulo ya está comprado! Añadiendo una nueva unidad...");
          this.productosComprados[i].units++;

          alert("El articulo "+ articulo.title +" ya ha sido comprado. Se añadirá una nueva unidad.");
        }

        // si no esta en el carrito lo añado
        else {
          console.log("Ese articulo ha sido comprado!");
          this.productosComprados.push(articulo);

          alert("El articulo "+ articulo.title +" ha sido comprado.");
        }

        this.total += articulo.price;
      },

      borrarArticulo(articulo) {
        // findIndex busca el producto en el carrito
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.productosComprados.findIndex(element => element.title === articulo.title);

        // si ya esta le sumo una unidad
        if (i > -1) {
          console.log("Ese articulo ya está comprado! reduciendo unidades...");
          this.productosComprados[i].units--;

          alert("El articulo "+ articulo.title +" ya ha sido comprado. Se reducirá una unidad.");

          if (this.productosComprados[i].units == 0) {
            this.productosComprados.splice(i , 1);
          }

          this.total = this.total - articulo.price;
        }

        // si no esta en el carrito lo añado
        else {
          console.log("Ese artículo aún no ha sido comprado! Operación cancelada!");

          alert("El articulo "+ articulo.title +" aún no ha sido comprado. Operación cancelada.");
        }

        
      }
    },
    computed: {
      filtroCategorias() {
        return this.arrayProductos.filter((producto) => producto.category.includes(this.categoriaSelect));
      },

      pago() {
        this.dineroCambio = this.dineroEntregado - this.total;

        // arreglado error visual en el que si el total es 0 y el pago es 0 devuelve -0 en el cambio
        if (this.dineroCambio == 0) {
          return this.dineroCambio = 0;
        }
        else {
          return this.dineroCambio
        }
      },

      ...mapState(useCounter,['usuario','login'])
    },
    created() {
      this.cargarCategorias();
      this.cargarProductos();
    }
  }
</script>