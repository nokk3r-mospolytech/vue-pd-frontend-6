<template>
   <div class="profile">
      <div class="ul ul_profile">
         <div class="img">
            <form action="">
               <img :src="require('@/assets/categoriesCard/Rectangle 1.png')" alt="logo">
               <label for="img">выбирите файл</label>
               <input id="img" v-on:change="onFileChange" type="file" alt="23">
               <span>{{ form.img }}</span>
            </form>
         </div>
         <div class="profile_name">
            <div class="contact">
               <h3>{{ getProfile.first_name }} {{ getProfile.last_name }}</h3>
               <span>{{ getProfile.email }}</span>
            </div>
            <router-link to="/setting" class="btn">
               <span>изменить профиль</span>
            </router-link>
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
import {mapActions, mapGetters} from "vuex";

export default {
   name: "ProfileView.vue",
   computed: mapGetters(['getProfile']),
   methods: {
      ...mapActions(['fetchProfile', 'putAvatar']),
      async onFileChange(e) {
         const files = e.target.files || e.dataTransfer.files;
         if (!files.length)
            return;
         console.log(files[0])
         await this.putAvatar(files[0])
      },
   },
   data() {
      return {
         form: {
            img: null
         }
      }
   },
   components: {
      CategoriesCard
   },
   async mounted() {
      // POST request using fetch with async/await
      await this.fetchProfile()
   }
}
</script>

<style scoped lang="scss">
.profile {
   margin-top: 100px;
   flex-direction: column;
   align-items: baseline;
   padding: 0 40px;

   div {
      display: flex;
   }

   .ul_profile {
      width: 100%;

      .img {
         flex-direction: column;
         margin-right: 20px;

         form {
            display: flex;
            align-items: center;

            input {
               display: none;
               border: none;
               border-radius: 0;
            }
         }

         img {
            width: 270px;
            height: 270px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 30px;
         }

         label {
            margin-top: 5px;
            font-size: 1.3em;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
         }

         span{
            text-align: center;
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
               font-size: 3em;
               font-weight: 500;
            }

            span {
               font-size: 1.5em;
               font-weight: 500;
            }
         }
      }

      .btn {
         padding: 10px;

         span {
            text-align: center;
         }
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
         margin: 15px;
      }
   }

}

@media (max-width: 1200px) {
   .profile {
      .ul_profile {
         .profile_name {
            flex-direction: column;
            justify-content: start;

            .btn {
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
      > h2 {
         text-align: center;
         font-size: 2.5em;
      }

      .ul_profile {
         .img {
            img {
               width: 150px;
               height: 150px;
            }

            span {
               font-size: 1em;
            }
         }

         .profile_name {
            flex-direction: column;
            justify-content: start;


            .contact {
               h3 {
                  font-size: 1.5em;
                  text-align: start;
               }

               span {
                  margin-top: 10px;
                  font-size: 1em;
                  text-align: start;
               }
            }
         }
      }

      .card_id, .card_empty {
         margin-top: 40px;
      }

      .subscribe {
         justify-content: center;
      }
   }
}
</style>