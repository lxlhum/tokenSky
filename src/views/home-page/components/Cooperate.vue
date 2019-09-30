<template>
  <div class="cooperate">
    <div class="content">
      <div class="img-title">
        <x-title :title="$t('page.cooperate')" align="center" />
      </div>
      <div class="text">
       {{$t('page.cooperateText')}}
      </div>
      <div class="img-flex">
        <div class="flex-1" v-for="(item, index) in imgList" :key="index">
          <img :src="item.src" alt="cooperate" :width="item.width">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coop1 from 'assets/images/cooper1.png'
import coop2 from 'assets/images/cooper2.png'
import coop3 from 'assets/images/cooper3.png'
import coop4 from 'assets/images/cooper4.png'

export default {
  name: 'cooperate',
  computed: {
    imgList () {
      return [
        {
          src: coop1,
          id: 1,
          width: 164
        },
        {
          src: coop2,
          id: 2,
          width: 176
        },
        // {
        //   src: coop3,
        //   id: 3,
        //   width: 151
        // },
        {
          src: coop4,
          id: 4,
          width: 261
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.cooperate {
  background-color: #F9F8FE;
  padding: 160px 0 140px;
  .img-title {
    text-align: center;
  }
  .text {
    font-size: 18px;
    line-height: 38px;
    color: #627097;
    text-align: center;
    margin: 0 auto 70px;
    white-space: pre-line;
  }
  .img-flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: nowrap;
  }
}
</style>
