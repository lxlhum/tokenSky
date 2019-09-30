<template>
  <div class="home-page">
    <x-header />
    <section>
      <navi id="navi" />
      <bank id="bank" />
      <calculate id="calculate" />
      <trade id="trade" />
      <about id="about" />
      <cooperate id="cooperate" />
    </section>
    <x-footer />
  </div>
</template>

<script>
import navi from './components/Navi'
import bank from './components/Bank'
import calculate from './components/Calculate'
import trade from './components/Trade'
import cooperate from './components/Cooperate'
import about from './components/About'

export default {
  name: 'home-page',
  components: {
    navi,
    bank,
    calculate,
    trade,
    cooperate,
    about
    // contact
  }
}
</script>

<style lang="scss" scoped>
section {
  min-height: 500px;
  height: auto;
  width: 100%;
}
</style>
