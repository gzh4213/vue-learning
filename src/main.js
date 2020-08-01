import { createApp } from 'vue';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
