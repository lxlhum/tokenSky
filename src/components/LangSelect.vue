<template>
  <div class="set-language">
    <el-dropdown @command="handleSetLanguage" trigger="hover" placement="bottom-start">
      <span class="a-span" @mouseenter="upArrow = true" @mouseleave="upArrow = false">
        <span class="gradient"></span>
        <span class="button" :style="{backgroundColor: bgColor, color: color}">
          <img :src="logo" alt="chinese">
          <i>{{$t('i18nView.language')}}</i>
          <i :class="{'el-icon-caret-bottom': !upArrow, 'el-icon-caret-top': upArrow}" :style="{color: color}"></i>
        </span>
      </span>
      <el-dropdown-menu slot="dropdown" class="el-dropdown-lang">
        <el-dropdown-item command="zh">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import zh from 'assets/images/chinese.png'
import en from 'assets/images/english.png'

export default {
  name: 'LangSelect',
  props: {
    color: {
      type: String,
      default: '#FFF'
    },
    bgColor: {
      type: String,
      default: '#2B206E'
    }
  },
  computed: {
    language () {
      return this.$store.getters.setLanguage
    },
    logo () {
      return this.language === 'zh' ? zh : en
    }
  },
  data () {
    return {
      upArrow: false
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  }
}
</script>

<style lang="scss">
.set-language {
  display: inline-block;
  .a-span {
    color: #d0d3dd;
    cursor: pointer;
    font-size: 16px;
    display: block;
    position: relative;
    width: 180px;
  }
  .button {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    width: 176px;
    height: 54px;
    line-height: 54px;
    border-radius: 8px
  }
  .gradient {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    &::after {
      display: block;
      content: "";
      width: 180px;
      height: 58px;
      background: #bd328f;
      background: linear-gradient(160deg,rgba(204,113,218,1) 0%,rgba(108,105,244,1) 100%);
      border-radius: 8px
    }
  }
  img {
    margin-right: 10px;
    width: 24px;
    height: 16px;
  }
  .el-icon-caret-bottom,
  .el-icon-caret-top {
    font-size: 16px;
  }
}
</style>
