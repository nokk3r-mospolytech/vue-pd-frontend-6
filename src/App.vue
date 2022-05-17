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

</script>


<style lang="scss">
body {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  display: flex;
}

div, a, h1, h2, h3, h4, h5, header, footer {
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  flex-direction: column;
  width: 1720px;
  color: black;

  > * {
    width: 100%;
  }
}

@media (max-width: 1730px) {
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
</style>
