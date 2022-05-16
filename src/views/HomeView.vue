<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeCard v-for="card in allCards" :key="card.id" v-bind:index="card.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
import HomeCard from "@/components/HomeCard";

export default {
  name: 'HomeView',
  computed: mapGetters(['allCards']),
  components: {
    HomeCard
  }
}
</script>
