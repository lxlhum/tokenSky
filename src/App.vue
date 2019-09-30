<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    if (isMobile) {
      window.location.replace('http://fine.app/mobile/')
    }
  }
}
</script>

<style lang="scss">
.container, .content {
  width: 1200px;
  margin: 0 auto;
}
</style>
