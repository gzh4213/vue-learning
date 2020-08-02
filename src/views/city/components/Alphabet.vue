<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="elem => elems[item] = elem"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
import { computed, onUpdated, ref } from 'vue'
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  setup (props, context) {
    let touchStatus = false
    let startY = 0
    let timer = null
    const elems = ref([])
    const letters = computed(() => {
      const letters = []
      for (let i in props.cities) {
        letters.push(i)
      }
      return letters
    })

    onUpdated(() => {
      startY = elems.value['A'].offsetTop
    })

    function handleLetterClick (e) {
      context.emit('change', e.target.innerText)
    }

    function handleTouchStart () {
      touchStatus = true
    }
    function handleTouchEnd () {
      touchStatus = false
    }
    function handleTouchMove (e) {
      if (touchStatus) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(_ => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          console.log(index)
          if (index >= 0 && index < letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 8)
      }
    }
    return { letters, elems, handleLetterClick, handleTouchStart, handleTouchEnd, handleTouchMove }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    align-items center
    justify-content center
    .item
      line-height .44rem
      text-align center
      color $bgColor
</style>
