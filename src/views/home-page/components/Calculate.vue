<template>
  <div class="calculate">
    <div class="content">
      <div class="img-title">
        <x-title :title="$t('page.contract')" color="#FFFFFF" align="center" />
      </div>
      <div class="center-img">
        <cell-group justify="flex-start">
          <cell style="margin-right: 50px;">
            <img src="../../../assets/images/calcu.png" alt="image">
          </cell>
          <cell>
            <div class="item">
              <h1>{{$t('page.pool')}}</h1>
              <span>
                {{$t('page.poolText')}}
              </span>
            </div>
            <div class="item">
              <h1>{{$t('page.mine')}}</h1>
              <span>
                {{$t('page.mineText')}}
              </span>
            </div>
            <div class="item">
              <h1>{{$t('page.mill')}}</h1>
              <span>
                {{$t('page.millText')}}
              </span>
            </div>
          </cell>
        </cell-group>
      </div>
      <div class="table">
        <h1>{{$t('page.choose')}}</h1>
        <div class="table-content">
          <div class="table-td">
            <el-table
              :data="data"
              style="width: 1055px">
              <!-- <el-table-column
                align="left"
                :label="$t('page.platform')">
                <template slot-scope="scope">
                  <img :src="scope.row.platform">
                </template>
              </el-table-column> -->
              <el-table-column
                prop="type"
                align="left"
                :width="lang ? 130 : 140"
                :label="$t('page.machine')">
              </el-table-column>
              <el-table-column
                prop="electric"
                align="left"
                width="130"
                :label="$t('page.fee')">
              </el-table-column>
              <el-table-column
                prop="fee"
                align="left"
                :width="lang ? 120 : 150"
                :label="$t('page.manage')">
              </el-table-column>
              <el-table-column
                prop="single"
                align="left"
                :width="lang ? 110 : 140"
                :label="$t('page.unit')">
              </el-table-column>
              <el-table-column
                prop="amount"
                align="left"
                width="120"
                :label="$t('page.total')">
              </el-table-column>
              <el-table-column
                prop="btc"
                align="left"
                :width="lang ? 160 : 150"
                :label="$t('page.income')">
              </el-table-column>
              <el-table-column
                prop="profit"
                align="left"
                width="130"
                :label="$t('page.profit')">
              </el-table-column>
              <el-table-column
                prop="ratio"
                align="left"
                :label="$t('page.rate')">
              </el-table-column>
            </el-table>
          </div>
          <div class="table-bg">
            <div :style="hTop" class="item-top">
              <h2>{{$t('page.platform')}}</h2>
            </div>
            <div :style="styles" class="item">
              <h2>Fine Wallet</h2>
            </div>
            <div :style="styles" class="item">
              <h2>BITDEER</h2>
            </div>
            <div :style="styles" class="item">
              <h2>RHY</h2>
            </div>
          </div>
        </div>
        <h3>{{$t('page.note')}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import platform1 from 'assets/images/token.png'
import platform2 from 'assets/images/bit.png'
import platform3 from 'assets/images/rhy.png'

export default {
  name: 'calculate',
  computed: {
    lang () {
      return this.$store.getters.setLanguage === 'zh'
    },
    styles () {
      return {
        height: this.lang ? '86px' : '88px'
      }
    },
    hTop () {
      return {
        height: this.lang ? '54px' : '94px',
        paddingTop: this.lang ? '30px' : '30px'
      }
    },
    data () {
      return [
        {
          platform: platform1,
          type: this.$t('page.cheetah'), // 矿机型号
          electric: '$0.066', // 电费
          fee: '_', // 管理费
          single: '$30.48', // 单价
          amount: '$54.19', //总成本
          btc: '0.00994356', // 总收益
          profit: '$40.28', // 净利润
          ratio: '74.34%' // 收益率
        },
        {
          platform: platform2,
          type: this.$t('page.anmi'),
          electric: '$0.097',
          fee: '_',
          single: '$38.30',
          amount: '$73.22',
          btc: '0.010044',
          profit: '$22.20',
          ratio: '30.32%'
        },
        {
          platform: platform3,
          type: this.$t('page.wht'),
          electric: '_',
          fee: '5%',
          single: '$97.14',
          amount: '$97.14',
          btc: '0.0095418',
          profit: '$6.50',
          ratio: '-6.69%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.calculate {
  background-color: #1C1064;
  padding: 160px 0 70px;
  .img-title {
    text-align: center;
    margin-bottom: 62px;
  }
  .center-img {
    .cell {
      .item {
        margin-bottom: 88px;
        h1 {
          color: #FFFFFF;
          font-size: 24px;
          position: relative;
          &::after {
            display: block;
            content: '';
            position: absolute;
            top: 50%;
            left: -20px;
            transform: translateY(-50%);
            width: 11px;
            height: 11px;
            background:rgba(255,255,255,1);
            border-radius: 50%;
          }
        }
        span {
          color: #CBCBFF;
          font-size: 18px;
          line-height: 38px;
          display: inline-block;
          white-space: pre-line;
        }
      }
    }
  }
  .table {
    position: relative;
    h1 {
      color: #FFFFFF;
      font-size: 28px;
      text-align: center;
    }
    &-content {
      width: 100%;
      height: 490px;
    }
    h2 {
      color: #FFFFFF;
      font-size: 18px;
      font-weight: bold;
    }
    h3 {
      color: #FFFFFF;
      text-align: center;
      font-size: 16px;
    }
    &-bg {
      width: 146px;
      top: 89px;
      left: 0;
      background-color: #5B3CBB;
      border-radius: 6px;
      z-index: 2;
      .item {
        &-top {
          margin: 0 auto;
          text-align: center;
          padding: 0 10px;
          h1 {
            color: #FFFFFF;
            font-size: 20px;
            width: 130px;
            line-height: 24px;
            font-weight: bold;
          }
        }
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &-bg,
    .table-td {
      position: absolute;
    }
    .table-td {
      top: 90px;
      background-color: #fff;
      width: 1060px;
      left: 146px;
      .el-table {
        margin-left: 13px;
      }
    }
  }
}
</style>
