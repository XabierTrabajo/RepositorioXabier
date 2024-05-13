<template>
    <div>
      
      <BienvenidoAlGym></BienvenidoAlGym>
      <br><br><br>
      
      <form @submit.prevent @submit="insertar">
        <input type="text" v-model="texto">
        <input type="submit" value="Insertar">
      </form>
      <div>
        <h1>TAREAS COMPLETADAS: {{ contadorCompletados }}</h1> <button @click="completados = !completados">Ver</button> <br>
        <span v-for="tarea in tareasStore" v-show="tarea.completado == true && completados == true">
          <span>Nº {{ tarea.numeroTarea }} | Tarea: {{ tarea.tarea }} | Completado? <span v-if="tarea.completado == false">No</span><span v-else>Si</span></span><br>
        </span>

        <br><br>

        <h1>TAREAS PENDIENTES: {{ contadorPendientes }}</h1> <button @click="porHacer = !porHacer">Ver</button> <br>
        <span v-for="tarea in tareasStore" v-show="tarea.completado == false && porHacer == true">
          <span>Nº {{ tarea.numeroTarea }} | Tarea: {{ tarea.tarea }} | Completado? <span v-if="tarea.completado == false">No</span><span v-else>Si</span></span><br>
        </span>
        
        <br><br><br>
        <h1>LISTA DE TAREAS</h1>
        <span v-for="tarea in tareasStore">
          Nº {{ tarea.numeroTarea }} | Tarea: {{ tarea.tarea }} | Completado? <span v-if="tarea.completado == false">No</span><span v-else>Si</span>
          <button style="margin-left: 30px;" @click="marcar(tarea)">Hecho</button><button @click="borrar(tarea)">Eliminar</button><br>
        </span>
      </div>
    </div>

</template>
<script>
  import BienvenidoAlGym from '../components/BienvenidoAlGym.vue';
import { useEjercicioGimnasio } from '../store/EjercicioGimnasioStore';
  import { mapState, mapActions, mapWritableState } from "pinia";
  export default{
    name: 'EjercicioGimnasioView',
    components: {
      BienvenidoAlGym
    },
    data() {
      return {
        porHacer: false,
        completados: false
      }
    },
    methods:{
      insertar() {
        this.insertarStore();
      },

      marcar(tarea) {
        this.marcarStore(tarea);
      },

      borrar(tarea) {
        this.borrarStore(tarea);
      },

      inicioStore() {
        this.contadorInicialStore();
      },

      ...mapActions(useEjercicioGimnasio,['contadorInicialStore','marcarStore','borrarStore','insertarStore'])
    },
    computed: {
    
      ...mapState(useEjercicioGimnasio,['tareasStore','contadorCompletados','contadorPendientes']),
      ...mapWritableState(useEjercicioGimnasio,['numeroTarea','texto'])
    },
    created() {
      this.inicioStore();
    }
  }
</script>