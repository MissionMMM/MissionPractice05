<template>
  <div class="my-news" v-if="data">
    <!-- <h1>新闻</h1> -->
    <div v-for="x in data.data" :key="x.nid">
      <span>{{ x.title }}</span>
      <!-- 过滤器: 可以处理{{}}中的值 -->
      <!-- 语法 {{ 值 | 过滤器名  }} -->
      <span>{{ x.pubTime | date }}</span>
    </div>
    <p>p: {{ p }}</p>
  </div>
</template>

<script>
//http://www.codeboy.com:9999/mfresh/data/news_select.php?pageNum=1

// 传参做法: 先生成参数 然后 再传递
export default {
  props: ['p'], // 专门保存自定义参数/属性

  // 新的配置项 filters
  filters: {
    // 过滤器的格式  {{值|过滤器}}
    // 例如 {{ 值 | date }}
    date(value) {
      // 参数1: |前面的值
      // 返回值就是过滤后的结果
      // 由于服务器返回的时间戳是字符串类型, 需要 *1 转数字
      var d = new Date(value * 1) //Date会识别参数类型, 数字才是时间戳
      var year = d.getFullYear()
      var month = d.getMonth() + 1
      // 小于10 补0     真 && 执行此处代码
      month < 10 && (month = '0' + month)

      var day = d.getDate()
      if (day < 10) day = '0' + day

      return `${year}/${month}/${day}`
    },
  },

  data() {
    return {
      data: null,
    }
  },
  mounted() {
    this.getData()
  },
  // 监听器:
  watch: {
    // p(){}
    // 变化后, 重新发请求, 不关心值是什么, 所以不需要写形参
    p: function () {
      this.getData()
    },
  },

  methods: {
    getData() {
      const url = `http://www.codeboy.com:9999/mfresh/data/news_select.php?pageNum=${this.p}`

      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.my-news {
  width: 800px;

  div {
    display: flex;
    padding: 10px;
    border-bottom: 1px dashed gray;
    justify-content: space-between;
  }
}
</style>
