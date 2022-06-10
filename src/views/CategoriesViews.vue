<template>
   <div class="categories">
      <h2>Вы подписаны</h2>
      <div class="ul subscribe">
         <div class="card_empty">
            <div class="img">
               <img :src="require('@/assets/Union.png')" alt="union">
            </div>
            <h2>Добавьте канал</h2>
            <div class="btn">
               <span>искать</span>
            </div>
         </div>
         <CategoriesCard v-for="index in 2" :key="index" v-bind:index="index" v-bind:subscribed="true"/>
      </div>
      <h2>Рекомендации</h2>
      <div class="ul recomm">
         <CategoriesCard v-for="index in 6" :key="index" v-bind:index="index" v-bind:subscribed="false"/>
      </div>
      <h2>Популярные каналы</h2>
      <div class="ul popular">
         <CategoriesCard v-for="index in 6" :key="index" v-bind:index="index" v-bind:subscribed="false"/>
      </div>
   </div>
</template>

<script>
import CategoriesCard from "@/components/CategoriesCard"

export default {
   name: "CategoriesViews",
   components: {
      CategoriesCard
   }
}
</script>

<style scoped lang="scss">
.categories {
   width: 100%;
   flex-direction: column;
   padding: 0 40px;
   align-items: start;
   margin-top: 50px;

   div {
      display: flex;
   }

   .card_empty {
      flex-direction: column;
      align-items: start;

      > * {
         margin-top: 10px;
      }

      .img {
         width: 250px;
         height: 250px;
         border: 1px solid rgba(0, 0, 0, 0.2);
         border-radius: 30px;
         justify-content: center;
         align-items: center;

         img {
            width: 150px;
            height: 150px;
            object-fit: cover;
         }
      }

      .btn {
         width: 100%;
         border: 1px solid rgba(0, 0, 0, 0.2);
         border-radius: 5px;
         justify-content: center;
         padding: 5px 0;
         cursor: pointer;
      }
   }

   > h2 {
      margin-top: 95px;
      font-size: 3em;
   }

   .ul {
      width: 100%;
      margin-top: 50px;

      > * {
         margin: 15px;
      }
   }

   > .ul {

      flex-wrap: wrap;
   }
}

@media (max-width: 1200px) {
   .categories {
      .ul {
         flex-wrap: wrap;
      }
   }
}

@media (max-width: 768px) {
   .categories {
      > h2 {
         text-align: center;
         font-size: 2.5em;
      }

      .ul {
         justify-content: center;

         .card_id, .card_empty {
            margin-top: 40px;
         }
      }
   }
}
</style>