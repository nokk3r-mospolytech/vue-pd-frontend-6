<template>
   <div class="login">
      <h2>Вход</h2>
      <form action="#">
         <span>Логин</span>
         <input class="login" type="text">
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
      margin-left: 155px;
      display: flex;
      flex-direction: column;
      width: 600px;
      align-items: start;

      > span {
         width: 65%;
         margin-top: 20px;
      }

      > input {
         width: 65%;
         padding: 10px;
         margin-top: 5px;
         border: 1px solid black;
         border-radius: 5px;
      }

      .password {
         width: 100%;
         justify-content: space-between;
         align-items: center;

         input {
            width: 65%;
         }
      }

      .ul_buttons {
         justify-content: space-between;
         align-items: center;
         width: 65%;
         margin-top: 30px;

         input {
            width: 47%;
         }

         .buttons {
            width: 47%;
            padding: 5px;
            border: 1px solid black;
            border-radius: 5px;
            justify-content: center;
         }

         .buttons_submit {
            background: black;
            color: white;
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