<template>
   <router-link class="card_id" :to="setURL(allHomeCardsPreview[index].slug)">
      <div :style="{'background-image': imageURL(allHomeCardsPreview[index].poster_link)}">
         <div class="ul">
            <span>Новости</span>
            <span>{{ allHomeCardsPreview[index].updated_at }}</span>
         </div>
         <h2>{{ allHomeCardsPreview[index].title }}</h2>
      </div>
   </router-link>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
   computed: {
      ...mapGetters(['allHomeCardsPreview']),
   },
   props: {
      index: Number
   },
   methods: {
      imageURL(index) {
         // return 'url(' + require('@/assets/img/Rectangle' + (index + 1) + '.jpg') + ')'
         return 'url(' + index + ')'
      },
      setURL(index) {
         return "/blog/" + index
      }
   }
}
</script>
<style scoped lang="scss">
div {
   display: flex;
}

a {
   flex-direction: column;
   justify-conten\t: end;
   height: 480px;
   border-radius: 35px;
   color: white;
   min-width: 100%;

   > div {
      height: 100%;
      flex-direction: column;
      background-size: cover;
      background-position: center;
      border-radius: 35px;
      padding: 35px 40px;
      justify-content: end;
   }

   .ul {
      margin-bottom: 15px;

      span:first-of-type {
         margin-right: 20px;
         display: flex;
         align-items: center;
      }

      span:first-of-type::after {
         content: "";
         display: flex;
         width: 4px;
         height: 4px;
         border-radius: 50%;
         background: white;
         margin-left: 20px;
      }
   }

   h2 {
      text-align: left;
   }
}
</style>