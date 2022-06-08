<template>
   <div class="blog">
      <div class="ul">
         <router-link class="li profile" to="/">
            <img :src="require('@/assets/logo.png')" alt="">
            <span>{{ homeCardIndex(index).author }}</span>
         </router-link>
         <router-link class="li time" to="/">
            <img :src="require('@/assets/query_builder_24px.svg')" alt="">
            <span>{{ homeCardIndex(index).dateTime }}</span>
         </router-link>
         <router-link class="li comment" to="/">
            <img :src="require('@/assets/message_24px.svg')" alt="">
            <span>{{ homeCardIndex(index).comment }}</span>
         </router-link>
         <router-link class="li like" to="/">
            <img :src="require('@/assets/thumb_up_alt_24px.svg')" alt="">
            <span>{{ homeCardIndex(index).like }}</span>
         </router-link>
         <router-link class="li dislike" to="/">
            <img :src="require('@/assets/thumb_up_alt_24px-1.svg')" alt="">
            <span>{{ homeCardIndex(index).dislike }}</span>
         </router-link>
         <router-link class="li visual" to="/">
            <img :src="require('@/assets/visibility_24px.svg')" alt="">
            <span>{{ homeCardIndex(index).views }}</span>
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
   width: 100%;

   div, span {
      display: flex;
   }

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
      width: 100%;
      height: 480px;
      object-fit: cover;
      border-radius: 35px;
      margin-top: 50px;
   }

   h2 {
      text-align: left;
      font-size: 3em;
      margin-top: 50px;
   }

   > span {
      text-align: left;
      font-size: 1.2em;
      margin-top: 50px;
   }
}

@media (max-width: 1200px) {
   .blog {
      width: 100%;

      h2 {
         font-size: 2.5em;
      }

      > img {
         height: 320px;
      }
   }
}

@media (max-width: 767px) {
   .blog {
      margin-top: 25px;

      > .ul {
         flex-direction: column;
         align-items: start;

         .li {
            margin-top: 10px;
         }
      }

      h2 {
         font-size: 2em;
      }

      > img {
         border-radius: 15px;
         height: 220px;
      }
   }
}
</style>