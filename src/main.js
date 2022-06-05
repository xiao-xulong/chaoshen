import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import lazyPlugin from 'vue3-lazy'

createApp(App).use(lazyPlugin, {
    loading: require('../img/imgLoading.png'), // 图片加载时默认图片
    error: require('../img/imgFail.png')// 图片加载失败时默认图片
}).use(router).use(Vant).mount('#app')
