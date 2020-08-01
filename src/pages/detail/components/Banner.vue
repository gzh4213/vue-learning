<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner_img" src="https://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_600x330_470f194f.jpg" alt="">
      <div class="banner_info">
        <div class="banner_title">圆明园(AAAAA景区)</div>
        <div class="banner_num"><span class="iconfont banner_icon">&#xe635;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'https://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_600x330_470f194f.jpg',
        'https://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_600x330_470f194f.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner_img
      width 100%
    .banner_info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner_title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner_num
        height .32rem
        line-height .32rem
        padding 0 .4rem
        margin-top .14rem
        border-radius .2rem
        background rgba(0,0,0, .8)
        font-size .24rem
        .banner_icon
          font-size .24rem
</style>
