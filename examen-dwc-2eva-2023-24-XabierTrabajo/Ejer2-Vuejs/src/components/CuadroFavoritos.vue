
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

        <ul v-for="svc in serviciosFavoritos" style="list-style: none;">
            <li>
                <img v-bind:src="'src/assets/iconos/' + svc.ICONO" v-bind:alt="svc.ICONO" style="width: 35px; height: 35px;">
                {{ svc.SERVICIO }}
            </li>
        </ul>
    </div>
    
    
</template>