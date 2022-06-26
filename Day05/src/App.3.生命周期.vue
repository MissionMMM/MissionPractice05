<template>
  <div>
    <!-- 组件的生命周期 -->
    <button @click="show = true">生</button>
    <button @click="show = false">死</button>
    <my-com v-if="show" />
  </div>
</template>

<script>
import MyCom from './components/MyCom.vue'
export default {
  components: { MyCom },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
