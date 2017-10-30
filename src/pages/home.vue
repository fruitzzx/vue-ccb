<template>
  <div id="home">
    <tarbar-header seach=true headerTitle=搜索></tarbar-header>
    <div class="main">
      <div class="login">
        <span class="iconfont icon-login"></span><br>
        <p>查询余额请登录</p>
      </div>
      <ul>
        <li>
          <span class="iconfont icon-touzi"></span><br>
          财富
        </li>
        <li>
          <span class="iconfont icon-weibiaoti5"></span><br>
          转账
        </li>
        <li>
          <span class="iconfont icon-daikuan1"></span><br>
          快贷
        </li>
        <li>
          <span class="iconfont icon-longzhifu-copy"></span><br>
          龙支付
        </li>
      </ul>
      <div class="homeOne">
        <ul>
          <li>
            <span class="iconfont icon-yingli"></span><br>
            速盈
          </li>
          <li>
            <span class="iconfont icon-touzi"></span><br>
            理财产品
          </li>
          <li>
            <span class="iconfont icon-baoxian"></span><br>
            代理保险
          </li>
          <li>
            <span class="iconfont icon-xinyongqia"></span><br>
            信用卡申请
          </li>
        </ul>
        <hr>
        <ul>
          <li>
            <span class="iconfont icon-scan"></span><br>
            扫一扫
          </li>
          <li>
            <span class="iconfont icon-shangc_"></span><br>
            善融商城
          </li>
          <li>
            <span class="iconfont icon-huafeichongzhi"></span><br>
            全国话费充值
          </li>
          <li>
            <div class="iconfont icon-jia"></div>
          </li>
        </ul>
      </div>
      <lbt></lbt>
      <many menuHeaderName=龙支付>
        <div class="menuImg">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2887272181,2202751516&fm=27&gp=0.jpg" alt="">
        </div>
      </many>
      <many menuHeaderName=快速转账>
        <div class="menuTable">
            <table>
              <tr>
                <td>收款户名</td>
                <td><input type="text" placeholder="请输入收款户名"></td>
              </tr>
              <tr>
                <td>收款账号</td>
                <td><input type="text" placeholder="请输入收款账号或手机号"></td>
              </tr>
              <tr>
                <td>转账金额</td>
                <td><input type="text" placeholder="前请输入转账金额"></td>
              </tr>
            </table>
        </div>
      </many>
      <telephone-bill></telephone-bill>
      <many menuHeaderName=信用卡>
        <div class="menuCard">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669567030,3133239781&fm=27&gp=0.jpg" alt="">
          <h3>LINEFRIENDS卡</h3>
          <p>超萌粉丝卡片</p>
          <p>粉丝专属礼遇</p>
          <span>申请办卡</span>
        </div>
      </many>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import TarbarHeader from '@/components/TarbarHeader'
import Lbt from '@/components/Lbt'
import Many from '@/components/Many'
import TelephoneBill from '@/components/TelephoneBill'
export default {
  components: {
    TarbarHeader,
    Lbt,
    Many,
    TelephoneBill
  }
}
</script>

<style scoped>
.login{
  width: 100%;
  height: 9rem;
  text-align: center;
  background: skyblue;
  padding-top: 1rem;
}
.login>span{
  font-size: 5rem;
  color: white;
}
.login>p{
  font-size: 1.5rem;
  color: white;
}
.main>ul:first-of-type {
  width: 100%;
  height: 9rem;
  padding-top: 2rem;
  background: skyblue;
}
.main>ul:first-of-type li{
  width: 25%;
  height: 100%;
  text-align: center;
  float: left;
  font-size: 1.5rem;
  color: white;
}
.main>ul:first-of-type li span{
  font-size: 3.5rem;
  color: white;
}
.homeOne{
  padding: 1rem 0.3rem;
  background: white;
}
.homeOne>ul{
  width: 100%;
  height: 6rem;
  margin: 1.2rem 0;
}
.homeOne>ul li{
  width: 25%;
  float: left;
  font-size: 1.3rem;
  /* border: solid 1px; */
  text-align: center;
}
.homeOne>ul li span{
  font-size: 3.5rem;
  color: skyblue;
}
.homeOne>ul li div{
  font-size: 4rem;
  color: gray;
  margin-top: 0.5rem;
}
.menuImg img{
  margin: 1rem 0;
  width: 100%;
  height: 10rem;
}
.menuTable table{
  width: 100%;
  font-size: 1.4rem;
}
.menuTable table tr{
  height: 3rem;
  line-height: 3rem;
}
.menuTable table tr td:first-of-type{
  width: 8rem;
  padding-left: 1rem;
}
.menuTable table tr td input{
  width: 100%;
  height: 3rem;
  outline: none;
  border: none;
  font-size: 1.4rem;
}
.menuCard{
  height: 10rem;
  widows: 100%;
  padding-top: 1rem;
}
.menuCard img{
  width: 40%;
  height: 8rem;
  line-height: 10rem;
  float: left;
  margin: 0 1rem;
  padding-left: 1rem;
}
.menuCard h3{
  font-size: 1.5rem;
}
.menuCard p{
  font-size: 1.4rem;
}
.menuCard span{
  display: inline-block;
  font-size: 1.4rem;
  border: solid 1px skyblue;
  border-radius: 2rem;
  color: skyblue;
  padding: 0.2rem 0.5rem;
  margin: 0.6rem;
}
</style>

