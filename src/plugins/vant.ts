/*
 * @Description: Vant 组件按需引入
 * @Author: DHL
 * @Date: 2020-03-21 18:00:46
 * @LastEditors: DHL
 * @LastEditTime: 2020-05-03 15:16:04
 */

import Vue from "vue";
import {
  Tabbar,
  TabbarItem
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export var vantModule = {};
Vue.prototype.$vant = vantModule;
