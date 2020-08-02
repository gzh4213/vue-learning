<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper_img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup (props) {
    const swiperOption = {
      pagination: '.swiper-pagination',
      loop: true
    }
    const showSwiper = computed(() => {
      return props.list.length
    })
    return { swiperOption, showSwiper}
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31%
    background #ccc
    .swiper_img
      width 100%
</style>
