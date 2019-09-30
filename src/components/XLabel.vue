<template>
  <div class="x-label" :style="styles">
    <div class="box" v-for="(item, index) in list" :key="index">
      <img :src="item.imgSrc" :alt="item.title" :height="height" :width="width">
      <h1 class="x-h1">{{item.title}}</h1>
      <div class="x-text">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'X-label',
  props: {
    height: {
      type: [Number, String],
      default: 42
    },
    width: {
      type: [Number, String],
      default: 42
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    justify: {
      type: String,
      default: 'space-between'
    }
  },
  computed: {
    styles () {
      return {
        justifyContent: this.justify
      }
    }
  }
}
</script>

<style lang="scss">
.x-label {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  .box {
    text-align: center;
    .x-h1 {
      margin: 20px auto 40px;
      color: #2e2e2e;
      font-size: 24px;
      max-width: 200px;
      font-weight: 600;
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        width: 30px;
        display: block;
        content: '';
        background-color: #2e2e2e;
      }
    }
    .x-text {
      font-size: 16px;
      color: #646464;
      max-width: 270px;
      line-height: 24px;
      margin: 0 auto;
      // word-wrap: break-word;
      // word-break: break-all;
    }
  }
}
</style>
