import Vue from "vue";
import VueRouter from "vue-router";
import BaseRoutes from "@/router/BaseRoutes";

Vue.use(VueRouter);


/**
 * 实例化路由
 */
const createRouter = (): any =>
  new VueRouter({
    routes: BaseRoutes
  });

const router = createRouter();



export { router };
