<template>
   <div class="blog">
      <div class="ul">
         <router-link class="li profile" to="/">
            <img :src="require('@/assets/logo.png')" alt="">
            <span>{{ allHomeCard.author }}</span>
         </router-link>
         <router-link class="li time" to="/">
            <img :src="require('@/assets/query_builder_24px.svg')" alt="">
            <span>{{ allHomeCard.updated_at }}</span>
         </router-link>
         <router-link class="li comment" to="/">
            <img :src="require('@/assets/message_24px.svg')" alt="">
            <span>{{ allHomeCard.views }}</span>
         </router-link>
         <router-link class="li like" to="/">
            <img :src="require('@/assets/thumb_up_alt_24px.svg')" alt="">
            <span>{{ allHomeCard.likes }}</span>
         </router-link>
         <router-link class="li dislike" to="/">
            <img :src="require('@/assets/thumb_up_alt_24px-1.svg')" alt="">
            <span>{{ allHomeCard.dislikes }}</span>
         </router-link>
         <router-link class="li visual" to="/">
            <img :src="require('@/assets/visibility_24px.svg')" alt="">
            <span>{{ allHomeCard.views }}</span>
         </router-link>
      </div>
      <h2>{{ allHomeCard.title }}</h2>
      <img :src=allHomeCard.poster_link alt="">
      <span>{{ allHomeCard.content }}</span>
   </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
   computed: {
      ...mapGetters(['allHomeCard']),
   },
   methods: {
      ...mapActions(['fetchHomeCard']),
      imageURL(index) {
         // return 'url(' + require('@/assets/img/Rectangle' + (index + 1) + '.jpg') + ')'
         return 'url(' + index + ')'
      },
   },
   async mounted() {
      await this.fetchHomeCard(this.$route.params.id)
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