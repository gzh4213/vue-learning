<template>
  <div class="header">
    <div class="header_left">
      <div class="iconfont back_icon">&#xe624;</div>
    </div>
    <div class="header_input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header_right">
        {{city}}
        <span class="iconfont arrow_icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl';
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header_left
      width .64rem
      float left
      .back_icon
        text-align center
        font-size .4rem
    .header_input
      flex: 1
      margin-top .12rem
      margin-left .12rem
      height .64rem
      line-height .64rem
      padding-left .2rem
      background #fff
      border-radius .1rem
      color #cccccc

    .header_right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrow_icon
        font-size .24rem
</style>
