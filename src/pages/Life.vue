<template>
  <div id="life">
    <tarbar-header seach='true'  headerTitle=水费></tarbar-header>
    <div class="main">
      <div class="investTop">
        <ul>
          <li>
            <span class="iconfont icon-icon-"></span><br>
            <p>优惠</p>
          </li>
          <li>
            <span class="iconfont icon-my"></span><br>
            <p>我的悦享生活</p>
          </li>
          <li>
            <span class="iconfont icon-fujin"></span><br>
            <p>附近</p>
          </li>
        </ul>
      </div>
      <div class="posit">
        <span class="iconfont icon-fujin"></span>
        <p>深圳市</p>
        <div class="bord"></div>
      </div>
      <div class="cardOne">
        <ul>
          <li>
            <span class="iconfont icon-huafeichongzhi"></span><br>
            全国话费充值
          </li>
          <li>
            <span class="iconfont icon-dangfei"></span><br>
            党费
          </li>
          <li>
            <span class="iconfont icon-liuliangchongzhi"></span><br>
            全国手机流量充值
          </li>
          <li>
            <span class="iconfont icon-jingdian"></span><br>
            景点门票
          </li>
        </ul>
        <hr>
        <ul>
          <li>
            <span class="iconfont icon-huafeichongzhi1"></span><br>
            手机话费
          </li>
          <li>
            <span class="iconfont icon-dianfei"></span><br>
            电费
          </li>
          <li>
            <span class="iconfont icon-gudingdianhua"></span><br>
            固定电话
          </li>
          <li>
            <span class="iconfont icon-gengduo"></span><br>
            更多
          </li>
        </ul>
      </div>
      <lbt-u-i img1="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=306688599,1647376835&fm=27&gp=0.jpg" img2="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1371426078,2464579106&fm=27&gp=0.jpg" img3="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3905258331,3067550508&fm=27&gp=0.jpg"></lbt-u-i>
      <telephone-bill></telephone-bill>
      <many menuHeaderName=最近缴费 menuMore=更多&gt;>
        <div v-show="!showBol" class="moreEE">暂无历史缴费信息</div>
        <div v-show="showBol" class="moreEEE">
          <ul>
            <li v-for="item in historyList" :key="item.id">
              <p>{{item.text}} <span>{{item.to}}</span></p>
              <p>{{item.otherMoney}}</p>
              <p>{{item.time}}</p>
            </li>
          </ul>
        </div>
      </many>
      <br>
      <br>
      <br>
    </div>
  </div>
  </div>
</template>

<script>
import TarbarHeader from '@/components/TarbarHeader'
import LbtUI from '@/components/LbtUI'
import TelephoneBill from '@/components/TelephoneBill'
import Many from '@/components/Many'
export default {
  data () {
    return {
      loginBol: this.$store.state.loginBol
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    showBol () {
      if (this.loginBol) {
        let len = this.userInfo.userHistory.length
        if (len > 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    historyList () {
      return this.userInfo.userHistory
    }
  },
  components: {
    TarbarHeader,
    LbtUI,
    TelephoneBill,
    Many
  }
}
</script>

<style scoped>
.investTop{
  width: 100%;
  background: skyblue;
}
.investTop ul{
  width: 100%;
  height: 8.5rem;
  padding-top: 2rem;
}
.investTop ul li{
  width: 33.3333%;
  float: left;
  text-align: center;
  color: white;
}
.investTop ul li span{
  font-size: 2.8rem;
}
.investTop ul li p{
  font-size: 1.4rem;
  padding-top: 1rem;
}
.posit{
  width: 100%;
  height: 4rem;
  /* text-align: center; */
  background: white;
  padding: 1.5rem 5% 0.2rem 5%;
  color: skyblue;
}
.posit span{
  font-size: 1.5rem;
}
.posit p{
  display: inline-block;
  font-size: 1.6rem;
}
.bord{
  width: 100%;
  height: 4px;
  background: skyblue;
  border-radius: 10px 10px 0 0;
}
.moreEE{
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  color: gray;
  text-align: center;
  font-size: 1.4rem;
}
.moreEEE ul li{
  width: 100%;
  height: 6rem;
  line-height: 3rem;
  /* line-height: 6rem; */
  font-size: 1.4rem;
  border-bottom: solid 1px #ccc;
}
.moreEEE ul li p{
  padding: 0 1rem;
  float: left;
}
.moreEEE ul li p:first-of-type{
  width: 100%;
}
.moreEEE ul li p:first-of-type span{
  color: red;
  font-weight: bold;
}
.moreEEE ul li p:last-of-type{
  float: right;
  font-size: 1.2rem;
  color: gray;
}
</style>

