<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_710x360_c22d14f0.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1908/56/56487a16caa23f7ca3.img.jpg_710x360_49ed952a.jpg'
        }
      ]
    }
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
    padding-bottom 50%
    background #ccc
    .swiper_img
      width 100%
</style>
