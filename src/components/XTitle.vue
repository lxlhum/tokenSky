<template>
  <div class="x-title" :style="styles">
    <h1>{{title}}</h1>
    <span :style="textStyle" v-if="showText">{{text}}</span>
    <img :src="imgSrc" alt="png" v-if="imgSrc && !showText">
  </div>
</template>

<script>
export default {
  name: 'xTitle',
  props: {
    title: String,
    text: String,
    color: {
      type: String,
      default: '#313D57'
    },
    align: { // 水平对齐方式
      type: String,
      default: 'left'
    },
    textSize: { // text字体大小
      type: Number,
      default: 18
    },
    textColor: { // text字体颜色
      type: String,
      default: '#DFCDFF'
    },
    imgSrc: {
      type: String,
      default: ''
    },
    showText: { // 显示文字
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles () {
      return {
        color: this.color,
        textAlign: this.align
      }
    },
    textStyle () {
      return {
        color: this.textColor,
        fontSize: this.textSize
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.x-title {
  h1 {
    font-size: 34px;
    margin-bottom: 40px;
    font-weight: bold
  }
  span {
    font-size: 22px;
  }
}
</style>
