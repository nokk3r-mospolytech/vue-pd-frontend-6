<template>
   <div class="profile">
      <div class="ul ul_profile">
         <div class="img">
            <img :src="require('@/assets/categoriesCard/Rectangle 1.png')" alt="logo">
            <span>изменить фото</span>
         </div>
         <div class="profile_name">
            <div class="contact">
               <h3>Анна Светова</h3>
               <span>svetova@yandex.ru</span>
            </div>
            <div class="btn">
               <span>изменить профиль</span>
            </div>
         </div>
      </div>
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
         <CategoriesCard v-for="index in 3" :key="index" v-bind:index="index" v-bind:subscribed="true"/>
      </div>
   </div>
</template>

<script>
import CategoriesCard from "@/components/CategoriesCard";

export default {
   name: "ProfileView.vue",
   components: {
      CategoriesCard
   }
}
</script>

<style scoped lang="scss">
.profile {
   margin-top: 100px;
   flex-direction: column;
   align-items: baseline;
   padding: 0 40px;

   .ul_profile {
      width: 100%;

      .img {
         flex-direction: column;
         margin-right: 20px;

         img {
            width: 270px;
            height: 270px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 30px;
         }

         span {
            margin-top: 5px;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
         }
      }

      .profile_name {
         width: 100%;
         justify-content: space-between;
         align-items: start;

         .contact {
            flex-direction: column;
            align-items: start;

            h3 {
               font-size: 55px;
               font-weight: 500;
            }

            span {
               font-size: 25px;
               font-weight: 500;
            }
         }
      }

      .btn {
         padding: 10px;
      }
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
      font-size: 48px;
   }

   .subscribe {
      margin-top: 50px;

      > * {
         margin-right: 20px;
      }
   }

}

@media (max-width: 1200px) {
   .profile {
      .ul_profile{
         .profile_name{
            flex-direction: column;
            justify-content: start;

            .btn{
               margin-top: 30px;
            }
         }
      }
      .subscribe {
         flex-wrap: wrap;
      }
   }
}

@media (max-width: 768px) {
   .profile {
      .ul_profile{
         .img{
            img{
               width: 150px;
               height: 150px;
            }
         }

         .profile_name{
            flex-direction: column;
            justify-content: start;



            .contact{
               h3{
                  font-size: 20px;
                  text-align: start;
               }

               span{
                  font-size: 12px;
                  text-align: start;
               }
            }
         }
      }
      .subscribe {
         justify-content: center;
      }
   }
}
</style>