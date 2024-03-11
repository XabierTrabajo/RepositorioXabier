<template>
    <div>
      <form @submit.prevent @submit="insertar">
        <input type="text" v-model="texto">
        <input type="submit" value="Insertar">
      </form>
      <div>
        <h1>TAREAS COMPLETADAS: {{ contadorPendientes }}</h1>
        <span v-for="tarea in tareas">
          Nº {{ tarea.numeroTarea }} | Tarea: {{ tarea.tarea }} | Completado? <span v-if="tarea.completado == false">No</span><span v-else>Si</span>
          <button style="margin-left: 30px;" @click="marcar(tarea)">Hecho</button><button @click="borrar(tarea)">Eliminar</button><br>
        </span>
      </div>
    </div>

</template>
<script>
  import { useEjercicioGimnasio } from '../store/EjercicioGimnasioStore';
  import { mapState, mapActions } from "pinia";
  export default{
    name: 'EjercicioGimnasioView',
    components: {
      
    },
    data() {
      return {
        texto: "",
        tareas: [
          {
            numeroTarea: 1,
            tarea: "correr",
            completado: false
          },
          {
            numeroTarea: 2,
            tarea: "Nadar",
            completado: false
          },
          {
            numeroTarea: 3,
            tarea: "Saltar",
            completado: true
          }
        ],
        numero: 0,
        contadorPendientes: 0
      }
    },
    methods:{
      insertar() {
        console.log(this.texto);
        this.numero = this.tareas.length;

        let objetoTarea = {
          numeroTarea: this.numero+1,
          tarea: this.texto,
          completado: false
        }

        this.tareas.push(objetoTarea);
        this.texto = "";
      },

      marcar(tarea) {
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.tareas.findIndex(element => element.tarea === tarea.tarea);

        // si lo encuentra
        if (i > -1) {
          this.tareas[i].completado = !this.tareas[i].completado;

          if (this.tareas[i].completado == true) {
            this.contadorPendientes++;
          }
          if (this.tareas[i].completado == false) {
            this.contadorPendientes--;
          }
        }
      },

      borrar(tarea) {
        // si lo encuentra su valor es la posicion en el array pero si no lo encuentra devuelve -1
        const i = this.tareas.findIndex(element => element.tarea === tarea.tarea);

        // si lo encuentra
        if (i > -1) {
          if (this.tareas[i].completado == true) {
            this.contadorPendientes--;
          }

          this.tareas.splice(i, 1);
        }
      },

      marcarCompletadoInicio() {
        for (let i = 0; i < this.tareas.length; i++) {
          if (this.tareas[i].completado == true) {
            this.contadorPendientes++;
          }
        }
      }

      //...mapActions(useEjercicioGimnasio,[''])
    },
    computed: {
    
      //...mapState(useEjercicioGimnasio,[''])
    },
    created() {
      this.marcarCompletadoInicio();
    }
  }
</script>