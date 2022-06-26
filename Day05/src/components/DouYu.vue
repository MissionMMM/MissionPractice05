<template>
  <!-- 考虑到: 整个斗鱼页面都依赖请求数据, 直接给根元素加v-if -->
  <div class="dou-yu" v-if="data">
    <p>shortName:{{ shortName }}</p>

    <div v-for="item in data.data.list" :key="item.rid">
      <img :src="item.roomSrc" alt="" />
      <div>{{ item.roomName }}</div>
    </div>
  </div>
</template>

<script>
// https://douyu.xin88.top/api/room/list?page=1&type=yz
export default {
  // property: 属性.  props是此单词的缩写, 代表 外来的属性们
  // 理解成 组件的形参, 接收组件使用时传入的实参
  props: ['shortName'],
  data() {
    return {
      data: null,
    }
  },
  // 组件显示到页面上时, 触发. 称为 挂载
  mounted() {
    this.getData()
  },
  // 监听器: 监听一个属性的变化
  watch: {
    // 你要监听的属性: function(){}
    shortName(to, from) {
      console.log('to:', to) //新值
      console.log('from:', from) //旧值
      // 当值变化时, 触发请求, 获取新的数据
      this.getData()
    },
  },
  methods: {
    getData() {
      const url = `https://douyu.xin88.top/api/room/list?page=1&type=${this.shortName}`

      console.log('url:', url)

      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.dou-yu > div {
  display: inline-block;
  width: 300px;
  margin: 0 10px 10px 0;

  img {
    width: 100%;
    height: 160px;
    border-radius: 4px;
  }
}
</style>
