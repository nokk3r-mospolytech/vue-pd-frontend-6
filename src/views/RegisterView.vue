<template>
   <div class="login">
      <h2>Вход</h2>
      <form action="#">
         <span>Логин</span>
         <input class="log" type="text">
         <span>Пароль</span>
         <input class="pass pass-1" type="password">
         <span>Пароль еще раз</span>
         <input class="pass pass-2" type="password">
         <div class="ul ul_buttons">
            <router-link class="buttons buttons_submit" to="/">
               <span>Зарегистрироваться</span>
            </router-link>
            <router-link class="buttons" to="/login">
               <span>Логин</span>
            </router-link>
         </div>
      </form>
   </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
   methods: {
      ...mapActions(['register'])
   },
   async mounted(){
      await this.register()
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

      > span {
         width: 100%;
      }

      > input {
         width: 100%;
      }

      .password {
         width: 100%;

         input {
            width: 100%;
         }
      }

      .ul_buttons {
         width: 100%;
         margin-top: 30px;

         input {
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
               margin-top: 10px;
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