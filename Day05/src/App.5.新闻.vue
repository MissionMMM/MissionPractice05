<template>
  <div v-if="data">
    <!-- 组件 -->
    <my-news :p="now" />

    <div class="pages">
      <span
        v-for="p in data.pageCount"
        :key="p"
        @click="now = p"
        :class="{ active: p == now }"
      >
        {{ p }}
      </span>
    </div>
  </div>
</template>

<script>
import MyNews from './components/MyNews.vue'
// http://www.codeboy.com:9999/mfresh/data/news_select.php
export default {
  components: { MyNews },
  data() {
    return {
      data: null,
      now: 1, //默认值1 代表第一页
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url =
        'http://www.codeboy.com:9999/mfresh/data/news_select.php'

      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pages {
  user-select: none;
  background-color: #eee;
  padding: 10px;
  display: flex;

  span {
    margin: 6px;
    border: 1px solid #777;
    color: #777;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;

    &.active {
      color: white;
      background-color: orange;
      border-color: orange;
    }
  }
}
</style>
