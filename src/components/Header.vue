<template>
   <header>
      <router-link to="/">
         <div class="logo">
            <img src="@/assets/img/logo.jpg" alt="">
            <span>NameBlog</span>
         </div>
      </router-link>
      <div class="right_side">
         <div class="ul ul_link">
            <div class="li">
               <router-link to="/categories">Категории</router-link>
            </div>
            <div class="li">
               <router-link to="/">Блог</router-link>
            </div>
            <div class="li">
               <router-link to="/profile">Профиль</router-link>
            </div>
         </div>
         <BurgerMenu/>
         <div class="login">
            <!--         <input type="text" placeholder="Найти...">-->
            <router-link to="/login">Вход</router-link>
         </div>
      </div>
   </header>
</template>

<script>
import BurgerMenu from "@/components/Header/BurgerMenu";

export default {
   components: {
      BurgerMenu
   }
}
</script>

<style scoped lang="scss">
header {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 80px;
   padding: 0 40px;
   width: 100%;
}

div {
   display: flex;
}

a {
   font-size: 25px;
}

.logo {
   display: flex;
   flex-direction: row;
   align-items: center;

   img {
      border-radius: 50%;
      margin-right: 16px;
   }

   span {
      font-size: 20px;
   }
}

.right_side {
   width: 80%;
   justify-content: space-between;
}

.login {
   display: flex;
   align-items: center;

   input {
      margin-right: 80px;
      padding: 10px 5px;
      border-radius: 5px;
      border: 2px solid #DADADA;
   }

   a {
      font-weight: 500;
   }

}

.ul_link {
   display: flex;
   flex-direction: row;
   justify-content: center;
   width: 100%;
   margin-right: 150px;

   a {
      font-weight: 500;
   }

   > .li {
      display: flex;
      list-style: none;
      margin: 0 50px;
   }
}

@media (max-width: 1200px) {
   .login {

      &::before {
         content: none;
      }

      input {
         display: none;
      }
   }
}

@media (max-width: 1080px) {
   .ul_link {
      display: none;
   }

   .right_side {
      justify-content: end;
   }
}
</style>