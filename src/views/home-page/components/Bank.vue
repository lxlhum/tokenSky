<template>
  <div class="bank">
    <div class="content">
      <div class="theme-title">
        <x-title :title="$t('page.bank')"  align="center" />
      </div>
    </div>
    <div class="item" v-for="(item, index) in list" :key="index" :style="{backgroundColor: item.bgcolor}">
      <div class="content">
        <cell-group>
          <cell :order="item.order">
            <img :src="item.imgSrc" alt="image" :width="item.width">
          </cell>
          <cell>
            <h1>{{item.title}}</h1>
            <span>
              {{item.text}}
            </span>
          </cell>
        </cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from 'assets/images/current.png'
import icon2 from 'assets/images/term.png'
import icon3 from 'assets/images/reward.png'
import icon4 from 'assets/images/loan.png'

export default {
  name: 'bank',
  computed: {
    list () {
      return [
        {
          imgSrc: icon1,
          title: this.$t('page.current'),
          text: this.$t('page.currentText'),
          bgcolor: '#FFF',
          order: 0,
          width: 299
        },
        {
          imgSrc: icon2,
          title: this.$t('page.term'),
          text: this.$t('page.termText'),
          bgcolor: '#F9F8FE',
          order: 1,
          width: 417
        },
        {
          imgSrc: icon3,
          title: this.$t('page.reward'),
          text: this.$t('page.rewardText'),
          bgcolor: '#FFF',
          order: 0,
          width: 280
        },
        {
          imgSrc: icon4,
          title: this.$t('page.loan'),
          text: this.$t('page.loanText'),
          bgcolor: '#F9F8FE',
          order: 1,
          width: 258
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bank {
  padding: 150px 0 0;
  .theme-title {
    text-align: center;
  }
  .item {
    padding: 112px 0;
  }
  .cell {
    h1 {
      color: #313D57;
      font-size: 26px;
      font-weight: bold;
    }
    span {
      color: #627097;
      font-size: 18px;
      line-height: 38px;
      display: inline-block;
      white-space: pre-line;
    }
  }
}
</style>
