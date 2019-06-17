// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './static/scss/common.scss'
import './utils/flexble'
import './static/font/iconfont.css'
import store from './store/'
import head from '@/components/header/header'
import {DatePicker} from 'element-ui';
Vue.config.productionTip = false
Vue.component('el-header',head);
Vue.use(DatePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
