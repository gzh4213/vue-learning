<template>
  <div>
    <div class="recommend_title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="item_img_wrapper">
          <img :src="item.imgUrl" alt="" class="item_img">
        </div>
        <div class="item_info">
          <p class="item_title">{{item.title}}</p>
          <p class="item_desc">{{item.desc}}</p>
          <button class="item_button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .recommend_title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item_img_wrapper
      width 1.7rem
      height 1.7rem
      padding .1rem
      .item_img
        width 100%
        height 100%
    .item_info
      flex 1
      padding .1rem
      min-width 0
      .item_title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item_desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item_button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #ffffff
</style>
