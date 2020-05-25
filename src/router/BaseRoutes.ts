/*
 * @Description: 基础路由(白名单路由)
 * @Author: DHL
 * @Date: 2020-03-25 20:29:42
 * @LastEditors: DHL
 * @LastEditTime: 2020-04-27 21:56:06
 */
export default [
  {
    name: "foot",
    path: "/",
    meta: { title: "底部导航", keepAlive: true },
    component: () => import("@/views/main/foot.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        meta: { title: "首页", keepAlive: true },
        component: () => import("@/views/main/home.vue")
      },
      {
        name: "projectInfo",
        path: "/projectInfo",
        meta: { title: "项目信息", keepAlive: true },
        component: () => import("@/views/main/projectInfo.vue")
      },
      {
        name: "workPlan",
        path: "/workPlan",
        meta: { title: "工作计划", keepAlive: true },
        component: () => import("@/views/main/workPlan.vue")
      },
      {
        name: "task",
        path: "/task",
        meta: { title: "员工任务", keepAlive: true },
        component: () => import("@/views/main/task.vue")
      },
      {
        name: "personal",
        path: "/personal",
        meta: { title: "我的", keepAlive: true },
        component: () => import("@/views/main/personal.vue")
      }
    ]
  },
  {
    name: "details",
    path: "/details",
    meta: { title: "详情" },
    component: () => import("@/views/main/details.vue")
  }
];
