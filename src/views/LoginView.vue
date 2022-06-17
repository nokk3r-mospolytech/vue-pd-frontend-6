<template>
   <div class="login">
      <h2>Вход</h2>
      <form @submit.prevent="submit">
         <span>Email</span>
         <input v-model="form.login" type="email" required>
         <span>Пароль</span>
         <div class="ul password">
            <input v-model="form.pass" type="password" required>
            <span>Забыли пароль?</span>
         </div>
         <span> {{ errors }}</span>
         <div class="ul ul_buttons">
            <input class="buttons buttons_submit" type="submit">
<!--            <div v-on:click="submit" class="buttons buttons_submit">-->
<!--               <span>Войти</span>-->
<!--            </div>-->
            <router-link class="buttons" to="/register">
               <span>Регистрация</span>
            </router-link>
         </div>
      </form>
   </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
   name: "LoginView.vue",
   data() {
      return {
         form: {
            login: '',
            pass: '',
         },
         errors: ''
      }
   },
   methods: {
      ...mapActions(['login']),
      async submit() {
         const response = await this.login(this.form)
         if (response){
            this.errors = response
            this.form.pass = ''
            return
         }
         await this.$router.push('/')
      },

   }
}
</script>

<style scoped lang="scss">
.login {
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 0 40px;
   align-items: center;

   div {
      display: flex;
   }

   h2 {
      text-align: center;
   }

   form {
      width: 600px;
      margin-left: 155px;

      > span {
         width: 65%;
      }

      > input {
         width: 65%;
      }

      .password {
         width: 100%;

         input {
            width: 65%;
         }
      }

      .ul_buttons {
         width: 65%;
         margin-top: 30px;

         input {
            margin: 0;
            font-size: 16px;
            width: 47%;
         }

         .buttons {
            width: 47%;
         }
      }
   }
}

@media (max-width: 767px) {
   .login {
      form {
         width: 100%;
         margin: 0;

         > span {
            width: 100%;
         }

         input {
            width: 100%;
         }

         .password {
            flex-direction: column;

            input {
               width: 100%;
            }

            span {
               margin-top: 25px;
            }
         }

         .ul_buttons {
            width: 100%;
            margin-top: 10px;
            flex-direction: column;

            .buttons {
               width: 65%;
               margin-top: 35px;
            }
         }
      }
   }
}
</style>