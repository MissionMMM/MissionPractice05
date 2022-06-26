<template>
  <div>
    <h1>我是组件</h1>
    <button @click="num++">{{ num }}</button>
  </div>
</template>

<script>
// 生命周期的两个用途:
// 1. 面试用: 几乎必考
// 2. 配合网络请求用, 实现自动发请求的操作
//  -- 例如: 让组件显示到页面上后, 立刻自动发请求

export default {
  data() {
    return {
      num: 1,
    }
  },
  // 生命周期: 一个事物从生到死经历的过程
  // 人的周期: 备孕->怀孕->待产->出生->开始学习->学习完毕->快没了->没了
  // 组件的一生: 准备创建->创建完毕->准备显示->显示完毕->准备更新->更新完毕->准备销毁->销毁完毕
  // 作者为组件的每个周期添加了一个 钩子函数 (Hook)
  // 钩子函数: 一类特殊作用的函数的称呼, 他们在固定的事件节点会自动触发

  // before: 在...之前
  beforeCreate() {
    console.log('beforeCreate: 将要创建-备孕')
  },
  created() {
    console.log('created: 创建完毕-怀孕')
  },
  beforeMount() {
    // mount: 安装,挂载
    console.log('beforeMount: 将要安装到页面上-待产')
  },
  mounted() {
    console.log('mounted: 安装到页面完毕-出生')
  },
  beforeUpdate() {
    console.log('beforeUpdate: 更新前')
  },
  updated() {
    console.log('updated: 更新完毕')
  },
  beforeDestroy() {
    console.log('beforeDestroy: 将要销毁-快死了')
  },
  destroyed() {
    console.log('destroyed: 销毁 - 死了')
  },
}
</script>

<style lang="scss" scoped></style>
