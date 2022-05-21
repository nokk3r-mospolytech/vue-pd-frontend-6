<template>
   <div class="blog">
      <div class="ul">
         <router-link to="/">
            <div class="li profile">
               <img :src="require('@/assets/logo.png')" alt="">
               <span>{{ homeCardIndex(index).author }}</span>
            </div>
         </router-link>
         <router-link to="/">
            <div class="li time">
               <img :src="require('@/assets/query_builder_24px.svg')" alt="">
               <span>{{ homeCardIndex(index).dateTime }}</span>
            </div>
         </router-link>
         <router-link to="/">
            <div class="li comment">
               <img :src="require('@/assets/message_24px.svg')" alt="">
               <span>{{ homeCardIndex(index).comment }}</span>
            </div>
         </router-link>
         <router-link to="/">
            <div class="li like">
               <img :src="require('@/assets/thumb_up_alt_24px.svg')" alt="">
               <span>{{ homeCardIndex(index).like }}</span>
            </div>
         </router-link>
         <router-link to="/">
            <div class="li dislike">
               <img :src="require('@/assets/thumb_up_alt_24px-1.svg')" alt="">
               <span>{{ homeCardIndex(index).dislike }}</span>
            </div>
         </router-link>
         <router-link to="/">
            <div class="li visual">
               <img :src="require('@/assets/visibility_24px.svg')" alt="">
               <span>{{ homeCardIndex(index).views }}</span>
            </div>
         </router-link>

      </div>
      <h2>{{ homeCardIndex(index).title }}</h2>
      <img :src="require('@/assets/img/Rectangle' + (Number(index) + 1) + '.jpg')" alt="">
      <span>{{ homeCardIndex(index).desc }}</span>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   computed: {
      ...mapGetters(['allHomeCards', 'homeCardIndex']),
   },
   data() {
      return {
         index: this.$route.params.id,
      }
   }
}
</script>

<style scoped lang="scss">
.blog {
   flex-direction: column;
   padding: 0 40px;
   margin-top: 100px;
   width: 1200px;


   .ul {
      align-items: center;

      img {
         width: 24px;
         height: 24px;
      }

      .li {
         align-items: center;
         margin-right: 60px;

         span {
            margin-left: 10px;
            color: #6D7D8B;
         }
      }

      .profile {
         span {
            color: black;
         }
      }
   }

   > img {
      height: 480px;
      object-fit: cover;
      border-radius: 35px;
      margin-top: 50px;
   }

   h2 {
      text-align: left;
      font-size: 55px;
      margin-top: 50px;
   }

   > span {
      text-align: left;
      margin-top: 50px;
   }
}

@media (max-width: 1200px) {
   .blog {
      width: 100%;
   }
}

@media (max-width: 767px) {
   .blog {
      > .ul {
         flex-direction: column;
         align-items: start;

         .li {
            margin-top: 10px;
         }
      }
   }
}
</style>