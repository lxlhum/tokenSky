<template>
  <div class="trade">
    <div class="content">
      <div class="img-title">
        <x-title
          :title="$t('page.sky')"
          align="center"
          show-text
          show-title
          :text="$t('page.tradePlatform')"
          text-color="#627097"
        />
      </div>
      <cell-group justify="space-between">
        <cell v-for="(item, index) in list" :key="index">
          <div class="text">
            <div class="img">
              <img :src="item.imgSrc" alt="image" :width="item.width">
            </div>
            <h1>{{item.title}}</h1>
            <span>{{item.text}}</span>
          </div>
        </cell>
      </cell-group>
    </div>
  </div>
</template>

<script>
import trade01 from 'assets/images/trade01.png'
import trade02 from 'assets/images/trade02.png'
import trade03 from 'assets/images/trade03.png'

export default {
  name: 'trade',
  computed: {
    list () {
      return [
        {
          imgSrc: trade01,
          title: this.$t('page.fast'),
          text: this.$t('page.fastText'),
          width: 102
        },
        {
          imgSrc: trade02,
          title: this.$t('page.safe'),
          text: this.$t('page.safeText'),
          width: 96
        },
        {
          imgSrc: trade03,
          title: this.$t('page.control'),
          text: this.$t('page.controlText'),
          width: 105
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.trade {
  background-color: #F9F8FE;
  padding: 190px 0 230px;
  .img-title {
    margin-bottom: 156px;
  }
  .cell {
    position: relative;
    transition: all .3s linear;
    &:hover {
      transform: translate3d(0, -50px, 0);
    }
    .text {
      width: 260px;
      background-color: #fff;
      box-shadow: 0px 3px 8px rgba(93,0,255,0.16);
      border-radius: 5px;
      line-height: 32px;
      text-align: center;
      padding: 70px 45px 30px;
      height: 420px;
      cursor: pointer;
      .img {
        height: 134px;
        width: 105px;
        margin: 0 auto
      }
      h1 {
        font-size: 22px;
        position: relative;
        margin: 40px 0 27px;
        color: #313D57;
        font-weight: bold;
      }
      span {
        color: #627097;
        font-size: 18px;
        display: inline-block;
        white-space: pre-line;
        text-align: center;
        line-height: 32px;
      }
    }
  }
}
</style>
