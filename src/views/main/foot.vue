<!--
 * @Description: 底部导航
 * @Author: ZM
 * @Date: 2020-04-04
 * @LastEditors: DHL
 * @LastEditTime: 2020-04-28 09:11:44
 -->
<template>
  <div class="my-body">
    <!--    使用vue-page-stack 白屏-->
    <!--    <vue-page-stack>-->
    <!--      <router-view />-->
    <!--    </vue-page-stack>-->
    <!--    使用 keep-alive tab不会重新创建，地址栏stack-key改变，滚动位置会置顶，堆栈数量每次+1-->
    <keep-alive>
      <router-view class="my-content" />
    </keep-alive>
    <!--    切换tab 都会重新创建-->
    <!--    <router-view class="my-content" />-->
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="home-o" to="/projectInfo">项目信息</van-tabbar-item>
      <van-tabbar-item icon="search" to="/workPlan">工作计划</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/task">员工任务</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/personal">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  methods: {
    change() {
      console.log("堆栈页面数量：" + this.$pageStack.getStack().length);
    }
  }
};
</script>
<style lang="less" scoped>
.van-tabbar--fixed {
  position: relative;
}
</style>
