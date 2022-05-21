<template>
   <header>
      <router-link to="/">
         <div class="logo">
            <img src="@/assets/img/logo.jpg" alt="">
            <span>NameBlog</span>
         </div>
      </router-link>
      <div class="ul link">
         <div class="li">
            <router-link to="/categories">Категории</router-link>
         </div>
         <div class="li">
            <router-link to="/">Блог</router-link>
         </div>
         <div class="li">
            <router-link to="/">Профиль</router-link>
         </div>
      </div>
      <div class="login">
<!--         <input type="text" placeholder="Найти...">-->
         <router-link to="/login">Вход</router-link>
      </div>
   </header>
</template>

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

.link{
   a{
      font-weight: 500;
   }
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

   // И так сойдет

   //&::before {
   //   display: flex;
   //   position: relative;
   //   left: 170px;
   //   content: "";
   //   width: 34px;
   //   height: 34px;
   //   margin-left: -34px;
   //   transform: scale(0.8);
   //   background: url("@/assets/img/search.svg");
   //   z-index: 1;
   //   transition: 0.1s;
   //}
   //
   //&:hover::before {
   //   filter: opacity(0);
   //}

   a{
      font-weight: 500;
   }

}

a {
   font-size: 25px;
}

.ul {
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-right: 100px;
}

.li {
   display: flex;
   list-style: none;
   margin: 0 50px;
}

@media (max-width: 1500px) {
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
   .ul{
      display: none;
   }
}
</style>