<template>
  <div class="my-body">
    <p />
    项目信息
    <p />
    <div class="my-content">
      <div @click="toDetails(item)" class="item" v-for="(item, i) in list" :key="i">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.list.push("====" + i);
    }
    console.log("项目信息=created");
  },
  methods: {
    toDetails(item) {
      this.$router.push({ name: "details", query: { item } });
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  margin: 12px;
  font-size: 20px;
  padding: 30px;
  background-color: bisque;
}
</style>
