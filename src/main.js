// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.jsx'

import router from './router'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import './assets/bootstrap/css/bootstrap.min.css'

// import * as _ from 'lodash'

// import './assets/js/ueditor/ueditor.config.js'
// import './assets/js/ueditor/ueditor.all.js'
// import './assets/js/ueditor/lang/zh-cn/zh-cn.js'
// import './assets/js/ueditor/themes/default/css/ueditor.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
