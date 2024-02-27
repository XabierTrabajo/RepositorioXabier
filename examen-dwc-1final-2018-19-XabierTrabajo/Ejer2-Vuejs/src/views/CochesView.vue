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
    <table>
      <tr>
          <th>Categoria</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Comprar</th>
      </tr>
      <tr v-for="producto in filtroCategorias">
        <td>{{ producto.category }}</td>
        <td>{{ producto.title }}</td>
        <td>{{ producto.price }}</td>
        <td>
          <button @click="comprar(producto)">+</button>
          <button @click="vender(producto)">-</button>
        </td>
      </tr>
    </table>
    <br><br><br><br><br>
    <div>
      <h2>Total de compra: {{ total }} (IVA incluido)</h2>
      <h2>Total sin iva: {{ totalNoIVA }}</h2>

      <table>
      <tr>
          <th>Categoria</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Unidades seleccionadas</th>
          <th>Subtotal</th>
          <th>IVA</th>
          <th>Subtotal + IVA</th>
      </tr>
      <tr v-for="producto in productosComprados">
        <td>{{ producto.category }}</td>
        <td>{{ producto.title }}</td>
        <td>{{ producto.price }}</td>
        <td><input type="number" disabled v-bind:value="producto.units"></td>
        <td><input type="number" disabled v-bind:value="producto.units * producto.price"></td>
        <td><input type="text" disabled v-bind:value="producto.iva +' | '+ producto.ivaUnico"></td>
        <td><input type="number" disabled v-bind:value="producto.units * producto.totalIVA"></td>
      </tr>
    </table>
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
        arrayCategoriasAxios: [],
        arrayCoches: [],
        categoriaSelect: "",
        productosComprados: [],
        total: 0,
        totalNoIVA: 0
      }
    },
    methods:{
      async cargarCategorias() {
        const allData = await axios.get("/json/coches.json");
        this.arrayCategoriasAxios = allData.data;

        for (let i = 0; i < this.arrayCategoriasAxios.length; i++) {
          if (this.arrayCategorias.includes(this.arrayCategoriasAxios[i].category)) {
            //lo ignora
          }
          else {
            this.arrayCategorias.push(this.arrayCategoriasAxios[i].category);
          }
        }
        console.log(this.arrayCategorias);
      },

      async cargarCoches() {
        const allData = await axios.get("/json/coches.json");
        this.arrayCoches = allData.data;
        console.log(this.arrayCoches);
      },

      comprar(producto) {
        let resultadoIVA = this.calcularIVA(producto);
        let ivaCategoria = this.obtenerTextoIVA(producto);
        let ivaUnico = this.calcularIVAunico(producto);
        let articulo = {
          category: producto.category,
          title: producto.title,
          price: producto.price,
          units: 1,
          iva: ivaCategoria,
          ivaUnico: ivaUnico,
          totalIVA: resultadoIVA
        };
        this.guardarArticulo(articulo);
      },

      vender(producto) {
        let resultadoIVA = this.calcularIVA(producto);
        let ivaCategoria = this.obtenerTextoIVA(producto);
        let ivaUnico = this.calcularIVAunico(producto);
        let articulo = {
          category: producto.category,
          title: producto.title,
          price: producto.price,
          units: 1,
          iva: ivaCategoria,
          ivaUnico: ivaUnico,
          totalIVA: resultadoIVA
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

        this.total += articulo.totalIVA;
        this.totalNoIVA += articulo.price;
      },

      borrarArticulo(articulo) {
        // findIndex busca el producto en el carrito
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.productosComprados.findIndex(element => element.title === articulo.title);

        // si ya esta le sumo una unidad
        if (i > -1) {
          console.log("Ese articulo ya está comprado! Añadiendo reduciendo unidades...");
          this.productosComprados[i].units--;

          alert("El articulo "+ articulo.title +" ya ha sido comprado. Se reducirá una unidad.");

          if (this.productosComprados[i].units == 0) {
            this.productosComprados.splice(i , 1);
          }
        }

        // si no esta en el carrito lo añado
        else {
          console.log("Ese artículo aún no ha sido comprado! Operación cancelada!");

          alert("El articulo "+ articulo.title +" aún no ha sido comprado. Operación cancelada");
        }

        this.total = this.total - articulo.totalIVA;
        this.totalNoIVA = this.total - articulo.price;
      },

      calcularIVA(producto) {
        let ivaMoto   = 1.15;
        let ivaCoche  = 1.21;
        var precioIVA = 0;

        if (producto.category == "motos") {
          return this.precioIVA = producto.price * ivaMoto;
        }

        if (producto.category == "coches") {
          return this.precioIVA = producto.price * ivaCoche;
        }

      },

      calcularIVAunico(producto) {
        let ivaMoto   = 0.15;
        let ivaCoche  = 0.21;
        var ivaUnico = 0;

        if (producto.category == "motos") {
          return this.ivaUnico = producto.price * ivaMoto;
        }

        if (producto.category == "coches") {
          return this.ivaUnico = producto.price * ivaCoche;
        }

      },

      obtenerTextoIVA(producto) {
        let textoIVAcoche = "21%";
        let textoIVAmoto = "15%";

        if (producto.category == "motos") {
          return textoIVAmoto;
        }

        if (producto.category == "coches") {
          return textoIVAcoche;
        }
      }

    },
    computed: {
      filtroCategorias() {
        return this.arrayCoches.filter((producto) => producto.category.includes(this.categoriaSelect));
      },

      ...mapState(useCounter,['usuario','login'])
    },
    created() {
      this.cargarCategorias();
      this.cargarCoches();
    }
  }
</script>