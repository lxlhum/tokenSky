<template>
  <component :is="tag || $parent.itemTag" class="cell" :style="{order: order}">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    tag: {
      type: [String, Object]
    },
    order: {
      type: Number,
      default: 0
    }
  }
}
</script>
