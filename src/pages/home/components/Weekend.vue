<template>
  <div>
    <div class="recommend_title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item_img_wrapper">
          <img :src="item.imgUrl" alt="" class="item_img">
        </div>
        <div class="item_info">
          <p class="item_title">{{item.title}}</p>
          <p class="item_desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_710x360_107e0851.jpg',
          title: '八达岭长城',
          desc: '一定要看那块“不到长城非好汉”碑'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_710x360_107e0851.jpg',
          title: '八达岭长城',
          desc: '一定要看那块“不到长城非好汉”碑'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_710x360_107e0851.jpg',
          title: '八达岭长城',
          desc: '一定要看那块“不到长城非好汉”碑'
        }
      ]
    }
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
  .item_img_wrapper
    overflow hidden
    height 0
    padding-bottom 50%
    .item_img
      width 100%
  .item_info
    padding .1rem
    .item_title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item_desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
