<template>
  <div>
    <!-- vscode的自动辅助: 使用 <组件名  会自动引入 -->
    <!-- 极小概率会失败, 确保是 1对1服务的 Vscode  -->
    <my-footer />
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
export default {
  components: { MyFooter },
}
</script>

<style lang="scss" scoped>
.my-footer {
  position: fixed;
  bottom: 0;
}
</style>
