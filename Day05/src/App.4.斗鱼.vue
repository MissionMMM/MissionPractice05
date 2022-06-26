<template>
  <div v-if="data">
    <div class="cate">
      <span
        v-for="(x, i) in data.data"
        :key="x.cate2Id"
        @click="now = i"
        :class="{ active: now == i }"
      >
        {{ x.name }}
      </span>
    </div>
    <!-- 斗鱼组件 -->
    <!-- 属性传参: 组件中利用props声明了 shortName属性 -->
    <!-- now: 记录点击项的序号 -->
    <!-- 逻辑: 根据序号从数组中读对应的栏目, 找到其中的shortName -->
    <dou-yu :shortName="data.data[now].shortName" />
  </div>
</template>

<script>
import DouYu from './components/DouYu.vue'
export default {
  components: { DouYu },
  data() {
    return {
      data: null,
      now: 0, //当前序号
    }
  },
  // mount: 安装,挂载 -- 当前组件显示在页面上时
  mounted() {
    console.log('this:', this) //vue实例对象
    // 通过打印, 可以看到 axios存储在this 这个vue实例对象里
    // 所以所有的.vue文件, 都可以通过 this.axios 来使用axios

    // 希望: 页面显示出来后, 立刻触发请求
    this.getData()
  },
  methods: {
    getData() {
      const url = 'https://douyu.xin88.top/api/cate/recList'
      // main.js中: 简单粗暴的原型注入, 使用时没有代码提示
      // 优雅方案: use + vue-axios , 使用axios有代码提示
      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.cate {
  display: flex;
  span {
    margin: 10px;
    padding-bottom: 3px;
    user-select: none;

    &.active {
      border-bottom: 2px solid orange;
      color: orange;
    }
  }
}
</style>
