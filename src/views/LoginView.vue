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
         <div class="ul buttons">
            <input type="submit" value="войти">
            <input type="submit" value="регистрация">
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
   flex-direction: column;
   margin-top: 200px;

   form {
      margin-left: 155px;
      display: flex;
      flex-direction: column;
      width: 500px;
      align-items: start;

      > span{
         width: 70%;
         margin-top: 20px;
      }

      input{
         width: 65%;
         padding: 5px 10px;
      }

      .password {
         width: 100%;
         justify-content: space-between;
         align-items: center;

         input {
            width: 65%;
         }
      }

      .buttons{
         justify-content: space-between;
         align-items: center;
         width: 70%;
         margin-top: 30px;

         input{
            width: 47%;
         }
      }
   }
}
</style>