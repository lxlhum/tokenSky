<template>
  <component :is="tag" class="cell-group" :style="styles">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CellGroup',
  props: {
    tag: {
      type: [String, Object],
      default: 'div'
    },
    itemTag: {
      type: [String, Object],
      default: 'div'
    },
    align: {
      type: String,
      default: 'center'
    },
    justify: {
      type: String,
      default: 'space-between'
    }
  },
  computed: {
    styles () {
      return {
        alignItems: this.align,
        justifyContent: this.justify
      }
    }
  }
}
</script>

<style lang="scss">
.cell-group {
  display: flex;
  flex-wrap: nowrap
}
</style>
