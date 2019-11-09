import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import Echarts from 'echarts'
import 'ant-design-vue/dist/antd.css'
import Table from 'ant-design-vue/lib/table'
import Icon from 'ant-design-vue/lib/icon'
import Tag from 'ant-design-vue/lib/tag'
import Divider from 'ant-design-vue/lib/divider'
import Button from 'ant-design-vue/lib/button'
import input from 'ant-design-vue/lib/input'
import select from 'ant-design-vue/lib/select'

Vue.use(Table)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Button)
Vue.use(input)
Vue.use(select)
Vue.use(VueRouter)
Vue.use(Echarts)
Vue.prototype.echarts = Echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
