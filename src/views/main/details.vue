<template>
  <div>
    详情
    <p>{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      item: ""
    };
  },
  created() {
    this.item = this.$route.query.item;
  }
};
</script>

<style scoped></style>
