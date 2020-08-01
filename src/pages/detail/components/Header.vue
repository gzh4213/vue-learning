<template>
  <div>
    <router-link tags="div" to="/" class="header_abs" v-show="showAbs">
      <div class="iconfont header_abs_back">&#xe624;</div>
    </router-link>
    <div
      class="header_fixed"
      :style="opacityStyle"
      v-show="!showAbs"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header_fixed_back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header_abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0,0,0,0.8)
    text-align center
    line-height .8rem
    .header_abs_back
      color #ffffff
      font-size .4rem
  .header_fixed
    position fixed
    top 0
    left 0
    right 0
    z-index 2
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    overflow hidden
    background $bgColor
    font-size .32rem
    .header_fixed_back
      width .64rem
      text-align center
      font-size .4rem
      position absolute
      top 0
      left 0
      color #fff
</style>
