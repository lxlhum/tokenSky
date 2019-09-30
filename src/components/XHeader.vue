<template>
  <div class="x-header" :style="bgStyle">
    <!-- 路由导航 -->
    <div class="header">
      <cell-group class="container" justify="space-between">
        <cell>
          <router-link to="#navi">
            <img :src="changeLogo" alt="token-sky" width="149">
          </router-link>
        </cell>
        <cell>
          <div
            v-for="item in routerList"
            :key="item.id"
            :class="{'normal': true, 'is-active': item.id === clickId}">
            <div @click="handleRouter(item.path, item.id)">
              <router-link :to="item.id" :style="aStyle">{{item.name}}</router-link>
            </div>
            <!-- <div class="line" v-if="item.id === clickId" :style="lineStyle"></div> -->
          </div>
          <lang-select :color="this.aStyle.langColor" :bgColor="this.aStyle.bgColor" />
        </cell>
      </cell-group>
    </div>
  </div>
</template>

<script>
// import logo from '../assets/images/fine-logo-white.png'
// import logo1 from 'assets/images/fine-logo-row.png'
import logoWhite from '../assets/logo/logo-white-row.png'
import logoColor from '../assets/logo/logo-row.png'
export default {
  name: 'XHeader',
  computed: {
    lang () {
      return this.$store.getters.setLanguage
    },
    routerList () {
      return [
        {
          id: '#bank',
          name: this.$t('page.bank'),
          path: '/bank'
        },
        {
          id: '#calculate',
          name: this.$t('page.contract'),
          path: '/calculate'
        },
        {
          id: '#trade',
          name: this.$t('page.sky'),
          path: '/trade'
        },
        {
          id: '#about',
          name: this.$t('page.aboutUs'),
          path: '/about'
        },
        {
          id: '#help',
          name: this.$t('page.help'),
          path: '/help'
        }
      ]
    }
  },
  data () {
    return {
      changeLogo: logoWhite,
      bgStyle: {
        backgroundColor: '#2B206E'
      },
      aStyle: {
        color: '#F8F8FA',
        langColor: '#F8F8FA'
      },
      lineStyle: {
        backgroundColor: '#F8F8FA'
      },
      clickId: 0 // 点击的路由
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    handleScroll () { // 滚动距顶导航栏背景色更改
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      let naviBank = document.querySelector('#navi').offsetTop + document.querySelector('#navi').clientHeight
      if (scrollTop < naviBank) {
        this.bgStyle = {
          backgroundColor: '#2B206E',
          position: 'static',
          marginBottom: '0'
        }
        this.changeLogo = logoWhite // logo
        // a标签样式
        this.aStyle = {
          color: '#F8F8FA'
        }
      } else {
        this.bgStyle = {
          color: '#333',
          backgroundColor: '#FFF',
          boxShadow: '0px 3px 18px rgba(125,0,249,0.16)',
          position: 'fixed'
        }
        // a标签样式
        this.aStyle = {
          color: '#676767',
          bgColor: '#fff',
          langColor: '#674AFA'
        }
        // 底部横线样式
        this.lineStyle = {
          backgroundColor: '#333'
        }
        // 改变logo图标
        this.changeLogo = logoColor // logo1
      }
      let navi = document.querySelector('#navi').offsetTop + document.querySelector('#navi').clientHeight - 45
      // 获取#bank距离顶部的距离
      let bank = document.querySelector('#bank').offsetTop + document.querySelector('#bank').clientHeight - 200
      // 获取#calculate距离顶部的距离
      let calculate = document.querySelector('#calculate').offsetTop + document.querySelector('#calculate').clientHeight - 200
      let trade = document.querySelector('#trade').offsetTop + document.querySelector('#trade').clientHeight - 200
      let cooperate = document.querySelector('#cooperate').offsetTop + document.querySelector('#cooperate').clientHeight - 200
      let about = document.querySelector('#about').offsetTop + document.querySelector('#about').clientHeight - 200

      if (scrollTop > navi && scrollTop <= bank) {
        this.clickId = '#bank' // clickId 是表示高亮，用作顶栏菜单
      } else if (scrollTop > bank && scrollTop <= calculate) {
        this.clickId = '#calculate'
      } else if (scrollTop > calculate && scrollTop <= trade) {
        this.clickId = '#trade'
      } else if (scrollTop > trade && scrollTop <= about) {
        this.clickId = '#about'
      } else if (scrollTop > about && scrollTop <= cooperate) {
        this.clickId = '#cooperate'
      } else {
        this.clickId = '#navi'
      }
    },
    handleRouter (path, id) { // 路由处理
      this.clickId = id
      this.$router.push('/' + id)
    }
  }
}
</script>

<style lang="scss">
.x-header {
  width: 100%;
  position: 'static';
  top: 0;
  left: 0;
  z-index: 999;
  font-size: 18px;
  font-weight: 400;
  transition: all ease-in-out .5s;
  .header {
    height: 88px;
    line-height: 88px;
  }
  .set-language {
    margin-left: 26px;
  }
  .normal {
    display: inline-block;
    cursor: pointer;
    margin: 0 26px;
    position: relative;
    a {
      &:hover {
        color: #674AFA!important
      }
    }
  }
  .is-active {
    a {
      color: #674AFA!important
    }
  }
  .line {
    bottom: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
  }
}
</style>
