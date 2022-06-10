<template>
   <div class="login">
      <h2>Вход</h2>
      <form action="#">
         <span>Логин</span>
         <input type="text">
         <span>Пароль</span>
         <div class="ul password">
            <input type="password">
            <span>Забыли пароль?</span>
         </div>
         <div class="ul ul_buttons">
            <router-link class="buttons buttons_submit" to="/">
               <span>Войти</span>
            </router-link>
            <router-link class="buttons" to="/register">
               <span>Регистрация</span>
            </router-link>
         </div>
      </form>
   </div>
</template>

<script>
export default {
   name: "LoginView.vue"
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