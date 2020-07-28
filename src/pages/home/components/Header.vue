<template>
  <div class="header">
    <div class="header_left">返回</div>
    <div class="header_input">内容</div>
    <div class="header_right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header_left
      width .64rem
      float left
    .header_input
      flex: 1
      margin-top .12rem
      margin-left .12rem
      height .64rem
      line-height .64rem
      background #fff
      border-radius .1rem
      color #cccccc

    .header_right
      width 1.24rem
      float right
      text-align center
</style>
