<template>
   <Header/>
   <router-view/>
   <Footer/>
</template>

<script>

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
   components: {
      Header,
      Footer
   }
}

window.addEventListener('resize', () => {
   // We execute the same script as before
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
});

</script>


<style lang="scss">
body {
   display: flex;
   justify-content: center;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

div, a, h1, h2, h3, h4, h5, header, footer, img, input {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

a {
   display: flex;
   text-decoration: none;
   color: black;
}

#app {
   font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 1400px;
   color: black;
   min-height: calc(var(--vh, 1vh) * 100);
   justify-content: space-between;
}

@media (min-width: 1920px) {
   #app {
      width: 1700px;
   }
}

@media (max-width: 1400px) {
   #app {
      width: 100%;
   }
}

nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
         color: #42b983;
      }
   }
}

.btn {
   border: 1px solid #000000;
   border-radius: 5px;
   justify-content: center;
   padding: 5px 0;
   cursor: pointer;
}
</style>
