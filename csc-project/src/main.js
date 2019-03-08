// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$ajax=axios
Vue.prototype.$qs=qs

// 引入全局js 和 css
import '@/assets/common/js/rem.js'
import '@/assets/common/css/reset.css'
import '@/assets/common/css/common.css'

//引入全局组件
import Header from '@/components/include/head.vue'
Vue.component(Header.name,Header);
import Nav from '@/components/include/nav.vue'
Vue.component(Nav.name,Nav);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


