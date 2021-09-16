import Vue from "vue"
import http from "@/http/index.js"
import util from "@/util/index.js"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.prototype.$util = util
Vue.config.productionTip = false
Vue.use(http)
window.$this = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount(`#app`)
