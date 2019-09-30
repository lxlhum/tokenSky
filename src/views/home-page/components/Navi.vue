<template>
  <div class="navi" ref="navi">
    <div class="content">
      <cell-group align="center">
        <cell class="navi-left">
          <div class="text">
            <h1>Fine Wallet</h1>
            <span>{{$t('page.investment')}} &nbsp;&nbsp;{{$t('page.controlAssets')}}</span>
          </div>
          <div class="download">
            <transition
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
            >
              <div class="download-img" v-if="show">
                <div @mouseenter="handleShow(1)" @mouseleave="isApple = false" class="download-img-left">
                  <div class="download-type">
                    <img src="../../../assets/images/ios.png" alt="ios">
                    <span>iOS</span>
                  </div>
                  <div class="hover-img" v-show="isApple">
                    <img src="https://tokensky.fine.app/download/qrcodeImg/ios.png" alt="ios">
                  </div>
                </div>
                <div @mouseenter="handleShow(2)" @mouseleave="isAndriod = false" class="download-img-right">
                  <div class="download-type">
                    <img src="../../../assets/images/android.png" alt="android">
                    <span>Android</span>
                  </div>
                  <div class="hover-img" v-show="isAndriod">
                    <img src="https://tokensky.fine.app/download/qrcodeImg/android.png" alt="andriod">
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </cell>
        <cell class="navi-right">
          <img src="../../../assets/images/mobile.png" alt="mobile" height="794" width="395">
        </cell>
      </cell-group>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navi',
  data () {
    return {
      isApple: false,
      isAndriod: false,
      show: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 500)
  },
  methods: {
    handleShow (type) {
      if (type === 1) {
        this.isApple = !this.isApple
        this.isAndriod = false
      } else {
        this.isAndriod = !this.isAndriod
        this.isApple = false
      }
    }
  }
}
</script>

<style lang="scss">
.navi {
  background: url('../../../assets/images/bg_navi.png') no-repeat;
  background-size: cover;
  padding: 80px;
  position: relative;
  &-left {
    .text {
      h1 {
        color: #FFFFFF;
        font-size: 65px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        line-height: 136px;
      }
      span {
        color: #CAC6F9;
        font-family: Microsoft YaHei;
        font-size: 28px;
      }
    }
    .download {
      color: #CCCCCC;
      margin-top: 125px;
      &-img {
        margin-top: 20px;
        &-left,
        &-right {
          display: inline-block;
          position: relative;
        }
        &-left {
          margin-right: 21px;
        }
        .hover-img  {
          position: absolute;
          top: 100px;
          left: 0px;
          padding: 10px;
          background-color: #fff;
          border: 1px solid #fff;
          text-align: center;
          border-radius:10px;
          &::before {
            content: "";
            display: block;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid #FFF;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -20px;
          }
          img {
            width: 164px;
            height: 164px;
          }
        }
      }
      &-type {
        width: 192px;
        height: 76px;
        background:rgba(11,8,51,1);
        border-radius: 7px;
        line-height: 76px;
        text-align: center;
        cursor: pointer;
        span {
          display: inline-block;
          margin-left: 20px;
        }
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  &-right {
    position: relative;
    .page {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
}
</style>
