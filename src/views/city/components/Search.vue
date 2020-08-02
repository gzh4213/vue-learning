<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search_input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search_content" ref="search" v-show="keyword">
      <ul>
        <li class="search_item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search_item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup (props) {
    const keyword = ref('')
    const list = ref([])
    let timer = null
    const store = useStore()
    const router = useRouter()
    const hasNoData = computed(() => {
      return !list.value.length
    })
    const search = ref(null)

    watch(keyword, (keyword, preKeyword) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyword) {
        list.value = []
        return
      }
      timer = setTimeout(_ => {
        const result = []
        for (let i in props.cities) {
          props.cities[i].forEach(v => {
            if (v.spell.indexOf(keyword) > -1 || v.name.indexOf(keyword) > -1) {
              result.push(v)
            }
          })
        }
        list.value = result
      }, 100)
    })

    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }

    onMounted(() => {
      new BScroll(search.value, {
        click: true
      })
    })

    return { keyword, list, search, hasNoData, handleCityClick}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search_input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      padding 0 .1rem
      color #666
      box-sizing border-box
  .search_content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
    .search_item
      line-height .62rem
      padding-left .2rem
      color #666666
      background #fff
</style>
