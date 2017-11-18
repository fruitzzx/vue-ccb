<template>
  <div id="loans">
    <tarbar-header seach='false' headerTitle='贷款'></tarbar-header>
    <div class="main">
      <login loginContent=登录可查询贷款 txt1=还款 txt2=借贷通 txt3=支用 txt4=我的贷款 span1="icon-huankuan" span2="icon-daikuan1" span3="icon-zhiyongjilu" span4="icon-wodedaikuan"></login>
      <div class="cardOne">
        <ul>
          <li>
            <span class="iconfont icon-zhuanchu-copy"></span><br>
            建行还他行
          </li>
          <li>
            <span class="iconfont icon-zhuanru"></span><br>
            他行还建行
          </li>
          <li>
            <span class="iconfont icon-zhuanchu"></span><br>
            现金转出
          </li>
        </ul>
      </div>
      <many menuHeaderName=精彩推荐>
        <div class="advertising">
          <img v-lazy=imgs[22] alt="">
          <img v-lazy=imgs[23] alt="">
        </div>
      </many>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import TarbarHeader from '@/components/TarbarHeader'
import Login from '@/components/Login'
import Many from '@/components/Many'
export default {
  created () {
    this.$store.state.homeActive = false
    this.$store.state.cardActive = false
    this.$store.state.investActive = false
    this.$store.state.loansActive = true
    this.$store.state.lifeActive = false
  },
  computed: {
    imgs () {
      return this.$store.state.imgs
    }
  },
  components: {
    TarbarHeader,
    Login,
    Many
  }
}
</script>

<style scoped>
.advertising{
  /* width: 100%; */
}
.advertising img{
  width: 100%;
  height: 10rem;
}
</style>

