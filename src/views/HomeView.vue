<template>
   <div class="home">
      <div class="grid">
         <HomeCard v-for="card in allHomeCardsPreview.length" :key="card-1" v-bind:index="card-1"/>
         <HomeCard v-for="card in allHomeCardsPreview.length" :key="card-1" v-bind:index="card-1"/>
         <HomeCard v-for="card in allHomeCardsPreview.length" :key="card-1" v-bind:index="card-1"/>
         <HomeCard v-for="card in allHomeCardsPreview.length" :key="card-1" v-bind:index="card-1"/>
      </div>
   </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from 'vuex'
import HomeCard from "@/components/HomeCard";

export default {
   name: 'HomeView',
   computed: mapGetters(['allHomeCardsPreview']),
   methods: mapActions(['fetchHomeCardPreview']),
   components: {
      HomeCard
   },
   async mounted() {
      await this.fetchHomeCardPreview()
   }
}
</script>

<style scoped lang="scss">

.home {
   flex-direction: column;
   margin-top: 20px;
   width: 100%;

   div {
      display: flex;
   }

   .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 16px;
      padding: 0 40px;
      width: 100%;

      .card_id:first-of-type, .card_id:nth-of-type(8n + 1) {
         grid-column-start: 1;
         grid-column-end: 7;
      }

      .card_id:nth-of-type(2), .card_id:nth-of-type(7), .card_id:nth-of-type(8n + 2), .card_id:nth-of-type(8n + 7) {
         grid-column-start: 1;
         grid-column-end: 4;
      }

      .card_id:nth-of-type(3), .card_id:nth-of-type(8), .card_id:nth-of-type(8n + 3), .card_id:nth-of-type(8n + 8) {
         grid-column-start: 4;
         grid-column-end: 7;
      }

      .card_id:nth-of-type(4), .card_id:nth-of-type(8n + 4) {
         grid-column-start: 1;
         grid-column-end: 3;
      }

      .card_id:nth-of-type(5), .card_id:nth-of-type(8n + 5) {
         grid-column-start: 3;
         grid-column-end: 5;
      }

      .card_id:nth-of-type(6), .card_id:nth-of-type(8n + 6) {
         grid-column-start: 5;
         grid-column-end: 7;
      }
   }
}

@media (max-width: 767px) {
   .home {
      .grid {
         .card_id:nth-of-type(n) {
            grid-column-start: 1;
            grid-column-end: 7;
         }
      }
   }
}

</style>