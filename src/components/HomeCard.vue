<template>
  <a class="card_id" href="#">
    <div :style="{'background-image': imageURL(index)}">
      <div class="ul">
        <span>Новости</span>
        <span>{{ allCards[index].dateTime }}</span>
      </div>
      <h2>{{ allCards[index].title }}</h2>
    </div>
  </a>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['allCards']),
  },
  props: {
    index: Number
  },
  methods: {
    imageURL(index) {
      return 'url(' + require('@/assets/img/Rectangle' + (index + 1) + '.jpg') + ')'
    }
  }
}
</script>
<style scoped lang="scss">
  a{
    flex-direction: column;
    justify-content: end;
    height: 480px;
    border-radius: 35px;
    color: white;
    min-width: 100%;

    >div{
      height: 100%;
      flex-direction: column;
      background-size: cover;
      background-position: center;
      border-radius: 35px;
      padding: 35px 40px;
      justify-content: end;
    }

    .ul{
      margin-bottom: 15px;

      span:first-of-type{
        margin-right: 20px;
        display: flex;
        align-items: center;
      }

      span:first-of-type::after{
        content: "";
        display: flex;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: white;
        margin-left: 20px;
      }
    }

    h2{
      text-align: left;
    }
  }
</style>