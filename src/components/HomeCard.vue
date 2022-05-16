<template>
  <div class="card_id" :style="{'background': imageURL(index)}">
    <div class="ul">
      <span>Новости</span>
      <span>{{ allCards[index].dateTime }}</span>
    </div>
    <h2>{{ allCards[index].title }}</h2>
  </div>
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
<style>

</style>