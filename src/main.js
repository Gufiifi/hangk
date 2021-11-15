import Vue from 'vue'
// import Vue from "vue/dist/vue"
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端适配文件
import "./assets/app"
// 引入样式重置文件
import "./assets/reset.css"
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// import "./assets/element.css"

Vue.use(ElementUI);
Vue.config.productionTip = false

import "./assets/ant.css"
// import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
  // template:'<h1>1214</h1>'
}).$mount('#app')
