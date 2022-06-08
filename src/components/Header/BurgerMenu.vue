<template>
   <div class="burger_menu" v-bind:class="{ active: isActiveMenu}">
      <div class="icon" v-on:click="isActiveMenu=!isActiveMenu">
         <div class="line line_1"></div>
         <div class="line line_2"></div>
         <div class="line line_3"></div>
      </div>
      <div class="ul ul_link__menu" v-on:click="isActiveMenu=false">
         <div class="li">
            <router-link to="/categories" v-on:click="isActiveMenu=false">Категории</router-link>
         </div>
         <div class="li">
            <router-link to="/" v-on:click="isActiveMenu=false">Блог</router-link>
         </div>
         <div class="li">
            <router-link to="/profile" v-on:click="isActiveMenu=false">Профиль</router-link>
         </div>
         <span>Нажмите на любое место чтобы выйти</span>
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

div {
   display: flex;
}

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

a {
   font-weight: 500;
   font-size: 30px;
}

.ul_link__menu {
   display: none;
   position: fixed;
   width: 100%;
   min-height: 110vh;
   top: 0;
   left: 0;
   justify-content: center;
   text-align: center;
   flex-direction: column;
   background: rgba(0, 0, 0, 0.8);
   padding-bottom: 50px;

   > span {
      margin-top: 50px;
      font-size: 18px;
      color: #f6e6ce;
   }

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
         transition: 0.3s;
         color: #c7c7c7;
      }

      &:hover {
         a {
            color: white;
         }
      }
   }

}

.active {
   .ul_link__menu {
      display: flex;
      animation-name: fade_in;
      animation-duration: 0.15s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      animation-delay: 0s;
   }
}

@media (max-width: 1080px) {

   .burger_menu {
      display: flex;
   }
}
</style>

