<template>

<Basurto></Basurto>
<h1>Pabellon</h1>
<select name="" id="" width="50px">
        <option value="" v-for="lista of listarservicios">{{ lista.SERVICIO }}</option>
    </select>

</template>

<script>
import Basurto from "@/components/Basurto.vue"
import axios from 'axios'
export default {
    data() {
        return {
            listarservicios:[]
        }
    },
    mounted() {
        axios.get('../../src/js/basurto.json').then((response) => {
            console.log(response.data);
            this.listarservicios = response.data;
            
        });
           
    },
    computed:{

    },
    components: { Basurto }
}
</script>