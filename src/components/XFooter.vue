<template>
  <div class="x-footer">
    <div class="content">
      <div class="flex-display">
        <div class="token">
          <img src="../assets/logo/logo-white-col.png" alt="token">
        </div>
        <div class="flex-1">
          <a href="https://twitter.com/Fine_Wallet" target="_blank" rel="noopener noreferrer">
            <div class="bg">
              <img src="../assets/images/twiter.png" alt="twiter">
            </div>
          </a>
        </div>
        <div class="flex-1">
          <a href="https://t.me/joinchat/Mb3GERQ5gQJyhVDnXceVvQ" target="_blank" rel="noopener noreferrer">
            <div class="bg">
              <img src="../assets/images/Telegram.png" alt="Telegram">
            </div>
          </a>
        </div>
        <div class="flex-1">
          <el-tooltip popper-class="popper-item" effect="dark" content="support@fine.app" placement="top">
            <div class="bg">
              <img src="../assets/images/email.png" alt="email">
            </div>
          </el-tooltip>
        </div>
      </div>
      <div class="a-link">
        <a href="#bank">{{$t('page.bank')}}</a>
        <a href="#calculate">{{$t('page.contract')}}</a>
        <a href="#trade">{{$t('page.sky')}}</a>
        <a href="#about">{{$t('page.aboutUs')}}</a>
        <a href="#help">{{$t('page.help')}}</a>
        <a href="#navi">{{$t('page.download')}}</a>
      </div>
      <div class="copy-right">
        CopyRight &copy; 2019 Fine.app All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XFooter',
  computed: {
    lang () {
      return this.$store.getters.setLanguage
    }
  }
}
</script>

<style lang="scss">
.popper-item {
  border: 1px solid #FFFFFF!important;
  background: #2C284A!important;
  color: #F8F8FA!important;
  font-size: 16px!important;
  .popper__arrow {
    &::before {
      content: "";
      display: block;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 9px solid #FFF;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3px;
    }
    &::after {
      border-width: 7px!important;
      left: -2px!important;
      bottom: -8px!important;
    }
  }
}
</style>

<style lang="scss" scoped>
.x-footer {
  width: 100%;
  background-color: #393558;
  text-align: center;
  line-height: 24px;
  font-weight: 500px;
  padding: 128px 0 26px;
  font-size: 14px;
  .flex-display {
    margin: 0 auto 90px;
    .token {
      display: inline-block;
      margin-right: 68px;
      img {
        height: 123px;
      }
    }
    .flex-1 {
      display: inline-block;
      margin-right: 68px;
      .bg {
        width: 63px;
        height: 63px;
        line-height: 63px;
        cursor: pointer;
        background: linear-gradient(180deg,rgba(204,113,218,1) 0%,rgba(108,105,244,1) 100%);
        border-radius: 50%;
        text-align: center;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  .a-link {
    margin-bottom: 50px;
    a {
      color: #F8F8FA;
      padding: 0 40px;
      font-size: 16px;
      display: inline-block;
      position: relative;
      &::after {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 1px;
        height: 17px;
        background-color: #F8F8FA;
      }
      &:last-child {
        &:hover {
          color: #B6B1CF
        }
        &::after {
          display: none;
        }
      }
    }
  }
  .copy-right {
    font-size: 14px;
    color: #EAEEF9
  }
}
</style>
