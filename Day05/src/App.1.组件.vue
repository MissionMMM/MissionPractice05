<template>
  <div>
    <!-- 组件: 各大框架的核心竞争力功能 -->
    <!-- 组件: 组成页面的零件 -->
    <!-- 活字印刷术, 模块化: 把一个大型的页面拆分成多个小模块 -->
    <!-- 优点: 分工合作, 复用, 简化大型页面的制作 -->
    <!-- components: 此文件夹专门存储组件 -->
    <h1>我是App.vue</h1>
    <!-- 使用组件 -->
    <!-- 单标签必须闭合, 加 / -->
    <zz />
    <!-- 推荐此写法 -->
    <my-header />
    <MyHeader />

    <!-- 也支持双标签 -->
    <zz></zz>
    <my-header></my-header>
    <MyHeader></MyHeader>
  </div>
</template>

<script>
// 组件使用分三步: 引入 注册 和 使用
// 步骤1: 引入
import MyHeader from './components/MyHeader.vue'

export default {
  // 步骤2: 注册
  // 配置项components: 用来配置有哪些外来的组件
  // { 属性名: 值 } 如果值是变量  {属性名: 变量名} 如果一样则简化
  // 例如: { zz: zz }  简化为 {zz}
  components: { MyHeader, zz: MyHeader }, // {MyHeader: MyHeader}
}
</script>

<style lang="scss" scoped>
// 遵守规矩: 组件中的根元素的class名, 是其文件名的中划线命名法
// 在使用时就能预测到class名, 比较方便
// 组件在使用时, 通常需要用css进行布局: 调整摆放的位置
.my-header {
  margin-top: 10px;
}
</style>
