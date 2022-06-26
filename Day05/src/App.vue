<template>
  <div>
    <!-- 插槽 slot -->
    <!-- 一个页面结构已经固定, 就等着放东西 -->
    <!-- 留出的放东西的预定空间 就是插槽 -->
    <!-- 例如 电脑主板上的 CPU 显卡 内存 插槽 -->
    <!-- 例如 化妆盒中的空间:  化妆品, 首饰... -->

    <!-- 对于插槽, 必须用双标签书写 -->
    <my-slot>
      <div>
        <span>壮壮</span>
        <span>边边</span>
        <span>浩浩</span>
        <span>浩南</span>
      </div>

      <!-- 指定向 名字是 menu的插槽里放东西 -->
      <!-- 有3种语法: vue1  vue2  和 语法糖 -->
      <div slot="menu">这是菜单内容 vue1</div>

      <!-- vue2: 必须配合 template 标签用 -->
      <!-- <template v-slot:menu>
        <h2>哈哈哈哈</h2>
        <h2>--柯晗说</h2>
      </template> -->

      <!-- vue3: 必须配合 template, 语法糖# -->
      <template #menu>
        <h2>晕晕晕了...</h2>
        <h2>--壮壮</h2>
      </template>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './components/MySlot.vue'
export default {
  components: { MySlot },
}
</script>

<style lang="scss" scoped></style>
