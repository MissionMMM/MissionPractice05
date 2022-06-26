<template>
  <!-- 为什么要有代码规范? -->
  <!-- 希望 多人协作开发时, 最终的代码风格一致, 看起来像一个人写的 -->
  <div class="my-footer">
    <!-- 为什么根元素要给class?  名字规范? -->
    <!-- 组件在 App.vue 中组装时, 通常需要布局, 所以要给class便于选择 -->
    <!-- 名称规范: 文件名改 中划线命名法, 便于预测 -->
    <p>买家帮助</p>
    <div>
      <div>新手指南</div>
      <div>服务保障</div>
      <div>常见问题</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
