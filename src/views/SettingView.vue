<template>
   <div class="setting">
      <div class="img">
         <img :src="require('@/assets/categoriesCard/Rectangle 2.png')" alt="logo">
         <span>изменить фото</span>
      </div>
      <form action="#">
         <span>Логин</span>
         <input v-model="form.login" type="text">
         <span>Пароль</span>
         <div class="ul password">
            <input v-model="form.pass1" type="password">
         </div>
         <span>Повторите пароль</span>
         <div class="ul password">
            <input v-model="form.pass2" type="password">
            <span>Забыли пароль?</span>
         </div>
         <div class="ul ul_buttons">
            <router-link class="buttons buttons_submit" to="/profile">
               <span>Сохранить</span>
            </router-link>
            <router-link class="buttons" to="/profile">
               <span>Назад</span>
            </router-link>
         </div>
      </form>
   </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
   name: "SettingView",
   computed: mapGetters(['getProfile']),
   data(){
      return{
         form:{
            login: '',
            pass1: '',
            pass2: ''
         }
      }
   }
}
</script>

<style scoped lang="scss">
.setting {
   display: flex;
   width: 100%;
   padding: 0 40px;
   justify-content: center;

   div {
      display: flex;
   }

   form {
      width: 600px;

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

   .img {
      flex-direction: column;
      margin-right: 40px;

      img {
         width: 270px;
         height: 270px;
         border: 1px solid rgba(0, 0, 0, 0.2);
         border-radius: 30px;
      }

      span {
         margin-top: 5px;
         font-size: 1.3em;
         font-weight: 500;
         text-align: center;
         cursor: pointer;
      }
   }
}

@media (max-width: 1200px) {
   .setting {

      form {
         width: 400px;
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

@media (max-width: 768px) {
   .setting {
      flex-direction: column;

      form{
         width: 100%;
      }

      .img {
         align-items: center;
         margin: 0;

         img {
            width: 200px;
            height: 200px;
         }
      }
   }
}
</style>