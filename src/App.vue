<template>
  <Header/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>

import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
}

</script>



<style lang="scss">
body{
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

div,a,h1,h2,h3,h4,h5{
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 1720px;
  color: black;
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
