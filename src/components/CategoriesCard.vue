<template>
   <div class="card_id">
      <img :src="require('@/assets/categoriesCard/Rectangle ' + (index) + '.png')" alt="photo">
      <h2>{{ allCategoriesCards[index - 1].title }}</h2>
      <div v-bind:class="[{ active: subscribed }]" class="btn">
         <span>{{ isSubscribed(subscribed) }}</span>
      </div>
      <div class="ul subscribe">
         <span>подписчиков</span>
         <span>{{ allCategoriesCards[index - 1].subscribe }}</span>
      </div>
      <div class="ul theme">
         <span>тема</span>
         <router-link to="/">
            {{ allCategoriesCards[index - 1].themes }}
         </router-link>
      </div>
   </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
   computed: {
      ...mapGetters(['allCategoriesCards']),
   },
   props: {
      index: Number,
      subscribed: Boolean
   },
   methods: {
      isSubscribed(bool){
         if (bool){
            return 'вы подписаны'
         }
         return 'подписаться'
      }
   }
}
</script>
<style scoped lang="scss">
.card_id {
   flex-direction: column;
   align-items: start;

   >*{
      margin-top: 10px;
   }

   span, a{
      font-weight: 500;
   }

   >img{
      width: 250px;
      height: 250px;
      object-fit: cover;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 30px;
   }

   .btn{
      width: 100%;
      border: 1px solid #000000;
      border-radius: 5px;
      justify-content: center;
      padding: 5px 0;
      cursor: pointer;
      background: #FFA5A5;
   }
   
   .active{
      background: none;
   }

   .ul{
      flex-direction: row;

      span{
         display: flex;
         align-items: center;
      }

      >span:first-of-type::after{
         content: '';
         display: flex;
         width: 4px;
         height: 4px;
         background: black;
         border-radius: 50%;
         margin: 0 15px;
      }
   }

}
</style>