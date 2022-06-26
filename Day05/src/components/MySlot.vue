<template>
  <div class="my-slot">
    <!-- 一种特殊的组件: 负责布局, 没有实际内容 -->
    <div class="header">
      <!-- 插槽占位符组件: 在运行时会替换成组件的标签内容 -->
      <slot />
    </div>
    <div class="body">
      <div class="menu">
        <!-- 命名插槽 -->
        <slot name="menu" />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background-color: #eee;
  // 最小高度
  min-height: 100px;
}

.body {
  display: flex;

  .menu {
    background-color: yellowgreen;
    width: 30%;
    min-height: 400px;
  }

  .content {
    background-color: violet;
    width: 70%;
    min-height: 400px;
  }
}
</style>
