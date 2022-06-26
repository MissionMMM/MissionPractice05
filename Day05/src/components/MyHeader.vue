<template>
  <div class="my-header">
    <!-- 要求1: 推荐组件名用 大驼峰命名法, 至少两个单词 -->
    <!-- 要求2: 推荐为根元素添加class, 名字为蛇形命名法 -->
    <span>网页</span>
    <span>新闻</span>
    <span>贴吧</span>
    <span>知道</span>
    <span>音乐</span>
    <span>图片</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.my-header {
  background-color: #aaa;

  span {
    display: inline-block;
    margin: 5px;
  }
}
</style>
