<template>
  <div class="home">
    <div class="grid">
      <HomeCard v-for="card in allCards" :key="card.id" v-bind:index="card.id"/>
      <HomeCard v-for="card in allCards" :key="card.id" v-bind:index="card.id"/>
      <HomeCard v-for="card in allCards" :key="card.id" v-bind:index="card.id"/>
      <HomeCard v-for="card in allCards" :key="card.id" v-bind:index="card.id"/>
    </div>
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

<style lang="scss">
  .home{
    flex-direction: column;
    margin-top: 20px;
  }

  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 40px;
    width: 100%;

    .card_id:first-of-type, .card_id:nth-of-type(8n + 9){
      grid-column-start: 1;
      grid-column-end: 7;
    }

    .card_id:nth-of-type(2), .card_id:nth-of-type(7), .card_id:nth-of-type(9) {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    .card_id:nth-of-type(3), .card_id:nth-of-type(8), .card_id:nth-of-type(10) {
      grid-column-start: 4;
      grid-column-end: 7;
    }

    .card_id:nth-of-type(4) {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .card_id:nth-of-type(5) {
      grid-column-start: 3;
      grid-column-end: 5;
    }

    .card_id:nth-of-type(6) {
      grid-column-start: 5;
      grid-column-end: 7;
    }
  }

  @media (max-width: 767px) {
    .home{
      .card_id:nth-of-type(n){
        grid-column-start: 1;
        grid-column-end: 7;
      }
    }
  }

</style>