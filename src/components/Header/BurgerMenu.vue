<template>
   <div class="burger_menu" v-bind:class="{ active: isActiveMenu}">
      <div class="icon" v-on:click="isActiveMenu=!isActiveMenu">
         <div class="line line_1"></div>
         <div class="line line_2"></div>
         <div class="line line_3"></div>
      </div>
      <div class="ul ul_link__menu">
         <div class="icon" v-on:click="isActiveMenu=false">
            <div class="line line_1"></div>
            <div class="line line_2"></div>
         </div>
         <div class="li">
            <router-link to="/categories" v-on:click="isActiveMenu=false">Категории</router-link>
         </div>
         <div class="li">
            <router-link to="/" v-on:click="isActiveMenu=false">Блог</router-link>
         </div>
         <div class="li">
            <router-link to="/profile" v-on:click="isActiveMenu=false">Профиль</router-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "BurgerMenu",
   data() {
      return {
         isActiveMenu: false
      }
   }
}
</script>

<style lang="scss" scoped>
.icon {
   flex-direction: column;
   justify-content: space-between;

   > * {
      width: 100%;
      height: 2px;
      background: black;
      margin: 3px 0;
   }
}

.burger_menu {
   display: none;
   flex-direction: column;
   justify-content: center;
   align-items: end;
   cursor: pointer;
   margin-right: 25px;

   > .icon {
      width: 24px;
      height: 24px;
   }
}

a{
   font-weight: 500;
   font-size: 30px;
}

.ul_link__menu {
   display: none;
   position: fixed;
   width: 100%;
   height: 100vh;
   top: 0;
   left: 0;
   justify-content: center;
   text-align: center;
   flex-direction: column;
   transition: 0.3s;
   background: rgba(0, 0, 0, 0);

   .icon {
      align-items: center;
      margin-bottom: 25px;

      .line {
         width: 24px;
         background: white;
      }

      .line_1 {
         transform: translateY(8px) rotate(45deg);
      }

      .line_2 {
         transform: rotate(-45deg);
      }
   }

   > .li {
      justify-content: center;
      margin: 25px 0;
      align-items: center;

      a {
         color: white;
      }
   }

}

.active {

   .ul_link__menu {
      display: flex;
      transition: 0.3s;
      background: rgba(0, 0, 0, 0.6);


   }
}

@media (max-width: 1080px) {

   .burger_menu{
      display: flex;
   }
}
</style>

