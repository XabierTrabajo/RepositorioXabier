
<script>
    import { useCounter } from '../stores/counter';
    import { mapState, mapActions } from "pinia";
    export default {
        name: 'CuadroFavoritos',
        components: {},
        data(){
            return{
            
            }
        },
        methods:{
          
        },
        computed: {
            ...mapState(useCounter, ['serviciosFavoritos'])
        }
    }
</script>
<template>
    
    <div>
        <span>
            Tienes {{ serviciosFavoritos.length }} 
            <span v-if="serviciosFavoritos.length == 1">servicio favorito</span>
            <span v-else>servicios favoritos</span> 
        </span>
        <br><br><br>
        <!-- 
        <ul v-for="svc in serviciosFavoritos" style="list-style: none;">
            <li>
                <img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO" style="width: 35px; height: 35px;">
                {{ svc.SERVICIO }}
            </li>
        </ul>
        -->
        
        <table>
        <tr>
            <th>Icono</th>
            <th>Servicio</th>
            <th>Pabellón</th>
        </tr>
        <tr v-for="svc in serviciosFavoritos">
            <!--La ruta relativa ../ no funciona en este caso por algun motivo-->
            <td v-if="svc.MOSTRAR == 1"><img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO"style="width: 35px; height: 35px;"></td>
            <td v-if="svc.MOSTRAR == 1">{{ svc.SERVICIO }}</td>
            <td v-if="svc.MOSTRAR == 1">{{ svc.ENTRADA }}</td>     
        </tr>
        </table>
    </div>
    
    
</template>