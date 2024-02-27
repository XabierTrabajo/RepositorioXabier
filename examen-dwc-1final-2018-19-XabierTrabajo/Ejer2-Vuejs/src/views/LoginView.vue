<template>
    <div>
      <form @submit.prevent>
        <label for="email">Email: </label>
        <input type="email" v-model="email">
        <br>
        <label for="password">Password: </label>
        <input type="password" v-model="password">
        <br><br><br>
        <button @click="checkLogin">Login</button>
      </form>
    </div>

</template>
<script>
  import { useCounter } from '../stores/Counter';
  import { mapState, mapActions } from "pinia";
  export default{
    name: 'LoginView',
    components: {
      
    },
    data() {
      return {
        email:"",
        password:"",

        loginData: [
          {
            user: "John Doe",
            email: "johndoe@gmail.com",
            password: "1234"
          }
        ]
      }
    },
    methods:{

      checkLogin() {
        if (this.email == this.loginData[0].email && this.password == this.loginData[0].password) {
          alert("login correcto!");
          this.guardarUsuario(this.loginData[0].user);
        }
        else {
          alert("login incorrecto!")
          return false
        }

      },
      
      ...mapActions(useCounter,['guardarUsuario'])
    },
    computed: {
    
      ...mapState(useCounter,['usuario'])
    },
    created() {
      
    }
  }
</script>