// 配置Vant-ui组件库
import "@/plugins/vant";
import Vue from "vue";
import App from "./App.vue";
import {router} from "./router";
// @ts-ignore
import VuePageStack from "vue-page-stack";
import "@/style/cpcr.less";

Vue.use(VuePageStack, { router });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
