<template>
  <div class="about">
    <div class="content">
      <div class="img-title">
        <x-title :title="$t('page.aboutUs')" align="center" />
      </div>
      <div class="text">
        {{$t('page.aboutText')}}
      </div>
      <div class="explain">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="item-content" @mouseleave="filpLeave($event, index)">
            <div class="item-front" @mouseenter="filp($event, index)">
              <div class='img'>
                <img :src="item.imgSrc" alt="image" :width="item.width">
              </div>
              <h1>{{item.title}}</h1>
            </div>
            <transition
              :duration="{enter: 800, leave: 300}"
              enter-active-class="animated slideInUp"
              leave-active-class="animated slideOutDown"
            >
              <div class="item-back" v-if="showBack[index]" :style="styles">
                <span
                  class="item-text"
                  v-for="child in item.textChilds"
                  :key="child.second"
                  :style="{animation: `fadeInRight ${child.second} 1`}">
                  {{child.text}}
                </span>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from 'assets/images/about01.png'
import icon2 from 'assets/images/about02.png'
import icon3 from 'assets/images/about03.png'

export default {
  name: 'about',
  computed: {
    list () {
      return [
        {
          imgSrc: icon1,
          title: this.$t('page.safety'),
          // text: this.$t('page.safetyText'),
          textChilds: [
            {
              text: this.$t('page.safetyText1'),
              second: '.5s'
            },
            {
              text: this.$t('page.safetyText2'),
              second: '.6s'
            },
            {
              text: this.$t('page.safetyText3'),
              second: '.7s'
            },
            {
              text: this.$t('page.safetyText4'),
              second: '.8s'
            },
            {
              text: this.$t('page.safetyText5'),
              second: '.9s'
            },
            {
              text: this.$t('page.safetyText6'),
              second: '1s'
            },
            {
              text: this.$t('page.safetyText7'),
              second: '1.1s'
            },
            {
              text: this.$t('page.safetyText8'),
              second: '1.2s'
            },
            {
              text: this.$t('page.safetyText9'),
              second: '1.3s'
            },
            {
              text: this.$t('page.safetyText10'),
              second: '1.4s'
            },
            {
              text: this.$t('page.safetyText11'),
              second: '1.5s'
            }
          ],
          width: 82
        },
        {
          imgSrc: icon2,
          title: this.$t('page.convenience'),
          // text: this.$t('page.convenienceText'),
          textChilds: [
            {
              text: this.$t('page.convenienceText1'),
              second: '.5s'
            },
            {
              text: this.$t('page.convenienceText2'),
              second: '.6s'
            },
            {
              text: this.$t('page.convenienceText3'),
              second: '.7s'
            },
            {
              text: this.$t('page.convenienceText4'),
              second: '.8s'
            },
            {
              text: this.$t('page.convenienceText5'),
              second: '.9s'
            },
            {
              text: this.$t('page.convenienceText6'),
              second: '1s'
            },
            {
              text: this.$t('page.convenienceText7'),
              second: '1.1s'
            },
            {
              text: this.$t('page.convenienceText8'),
              second: '1.2s'
            },
            {
              text: this.$t('page.convenienceText9'),
              second: '1.3s'
            },
            {
              text: this.$t('page.convenienceText10'),
              second: '1.4s'
            },
            {
              text: this.$t('page.convenienceText11'),
              second: '1.5s'
            }
          ],
          width: 100
        },
        {
          imgSrc: icon3,
          title: this.$t('page.profession'),
          // text: this.$t('page.professionText'),
          textChilds: [
            {
              text: this.$t('page.professionText1'),
              second: '.5s'
            },
            {
              text: this.$t('page.professionText2'),
              second: '.6s'
            },
            {
              text: this.$t('page.professionText3'),
              second: '.7s'
            },
            {
              text: this.$t('page.professionText4'),
              second: '.8s'
            },
            {
              text: this.$t('page.professionText5'),
              second: '.9s'
            },
            {
              text: this.$t('page.professionText6'),
              second: '1s'
            },
            {
              text: this.$t('page.professionText7'),
              second: '1.1s'
            },
            {
              text: this.$t('page.professionText8'),
              second: '1.2s'
            },
            {
              text: this.$t('page.professionText9'),
              second: '1.3s'
            },
            {
              text: this.$t('page.professionText10'),
              second: '1.4s'
            },
            {
              text: this.$t('page.professionText11'),
              second: '1.5s'
            }
          ],
          width: 54
        }
      ]
    },
    styles () {
      return {
        padding: this.$store.getters.setLanguage === 'zh' ? '80px 20px 0' : '40px 20px'
        // height: this.$store.getters.setLanguage === 'zh' ? '350px' : '430px'
        // top: this.$store.getters.setLanguage === 'zh' ? '-20px' : '-40px'
      }
    }
  },
  data () {
    return {
      showBack: [false, false, false]
    }
  },
  methods: {
    filp (ev, index) {
      console.log(ev.target.className)
      if (ev.target.className === 'item-front') {
        this.showBack.splice(index, 1, true)
      }
    },
    filpLeave (ev, index) {
      this.showBack.splice(index, 1, false)
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  background-color: #FFFFFF;
  padding: 160px 0 80px;
  text-align: center;
  .img-title {
    text-align: center;
  }
  .text {
    max-width: 1200px;
    color: #627097;
    font-size: 18px;
    line-height: 38px;
    white-space: pre-line;
  }
  .explain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    .item {
      position: relative;
      height: 450px;
      width: 300px;
      &-content {
        // transform-style: preserve-3d;
        // perspective: 1000;
        cursor: pointer;
      }
      &-front,
      &-back {
        position: absolute;
        // backface-visibility: hidden;
        // transform-style: preserve-3d;
        box-shadow: 0px 0px 28px rgba(8,0,41,0.16);
        border-radius: 5px;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          content: '';
          width: 100%;
          height: 16px;
        }
      }
      &-front {
        width: 280px;
        top: 0;
        left: 0;
        padding: 140px 0 120px;
        background:rgba(234,238,249,1);
        &::before {
          background:rgba(91,60,187,1);
        }
      }
      &-back {
        background-color: #fff;
        width: 255px;
        left: -10px;
        height: 420px;
        // transform: rotateY(180deg);
        // padding: 60px 20px 20px;
        top: -50px;
        text-align: left;
        color:#313D57;
        &::before {
          background:linear-gradient(180deg,rgba(204,113,218,1) 0%,rgba(108,105,244,1) 100%);
        }
      }
      .img {
        width: 100px;
        height: 100px;
        margin: 0 auto 40px;
      }
      h1 {
        color: #333;
        font-size: 24px;
        font-weight: bold;
      }
      .item-text {
        color: #0B0833;
        font-size: 18px;
        // line-height: 38px;
        font-weight: bold;
        // width: 260px;
        text-align: left;
        display: inline-block;
        white-space: pre-line;
      }
    }
  }
}
</style>
