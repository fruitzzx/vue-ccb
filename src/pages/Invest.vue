<template>
  <div id="invest">
    <tarbar-header seach='false' headerTitle='投资理财'></tarbar-header>
    <div class="main">
      <div class="cardOne">
        <ul>
          <li>
            <span class="iconfont icon-yingli"></span><br>
            速盈
          </li>
          <li>
            <span class="iconfont icon-licai"></span><br>
            基金投资
          </li>
          <li>
            <span class="iconfont icon-touzi"></span><br>
            理财产品
          </li>
          <li>
            <span class="iconfont icon-jieshouhuizhongshou"></span><br>
            结售汇
          </li>
        </ul>
        <ul>
          <li>
            <span class="iconfont icon-shangpin"></span><br>
            账户商品
          </li>
          <li>
            <span class="iconfont icon-guijinshu"></span><br>
            账户贵金属
          </li>
          <li>
            <span class="iconfont icon-baoxian1"></span><br>
            代理保险
          </li>
          <li>
            <span class="iconfont icon-touzi1"></span><br>
            全部投资理财
          </li>
        </ul>
      </div>
      <div class="imgDB">
        <img v-lazy=imgs[20] alt="">
        <img v-lazy=imgs[21] alt="">
      </div>
      <lbt-u-i :img1=imgs[17] :img2=imgs[18] :img3=imgs[19]></lbt-u-i>
      <many menuHeaderName="最近热卖">
        <ul class="investList">
          <li>
            <table>
              <tr>
                <td rowspan="2" style="fontSize:3rem; color:red">4.18%</td>
                <td>建信现金添利</td>
                <td rowspan="3" style="fontSize: 2rem; color:gray">&gt;</td>
              </tr>
              <tr>
                <!-- <td></td> -->
                <td style="color: red">货币市场基金</td>
                <!-- <td></td> -->
              </tr>
              <tr class="grayy">
                <td>七日年化收益</td>
                <td>万份收益1.0712</td>
                <!-- <td></td> -->
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td rowspan="2" style="fontSize:3rem; color:red">4.31%</td>
                <td>建信现金添益A</td>
                <td rowspan="3" style="fontSize: 2rem; color:gray">&gt;</td>
              </tr>
              <tr>
                <!-- <td></td> -->
                <td style="color: red">货币市场基金</td>
                <!-- <td></td> -->
              </tr>
              <tr class="grayy">
                <td>七日年化收益</td>
                <td>万份收益1.1476</td>
                <!-- <td></td> -->
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td rowspan="2" style="fontSize:3rem; color:red">4.18%</td>
                <td>建信双周安心A</td>
                <td rowspan="3" style="fontSize: 2rem; color:gray">&gt;</td>
              </tr>
              <tr>
                <!-- <td></td> -->
                <td style="color: red">债券基金</td>
                <!-- <td></td> -->
              </tr>
              <tr class="grayy">
                <td>七日年化收益</td>
                <td>万份收益1.1137</td>
                <!-- <td></td> -->
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td rowspan="2" style="fontSize:3rem; color:red">4.75%</td>
                <td>乾元-私享型2017-13<br>6理财产品</td>
                <td rowspan="3" style="fontSize: 2rem; color:gray">&gt;</td>
              </tr>
              <tr>
                <!-- <td></td> -->
                <td style="color: red">期限97天</td>
                <!-- <td></td> -->
              </tr>
              <tr class="grayy">
                <td>预期年化收益率</td>
                <td>起购金额 600w</td>
                <!-- <td></td> -->
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td rowspan="2" style="fontSize:3rem; color:red">4.55%</td>
                <td>乾元-私享荟2017年第4<br>期私人银行理财产品</td>
                <td rowspan="3" style="fontSize: 2rem; color:gray">&gt;</td>
              </tr>
              <tr>
                <!-- <td></td> -->
                <td style="color: red">期限92天</td>
                <!-- <td></td> -->
              </tr>
              <tr class="grayy">
                <td>预期年化收益率</td>
                <td>起购金额 600w</td>
                <!-- <td></td> -->
              </tr>
            </table>
          </li>
          <li>
            <table>
              <tr>
                <td rowspan="2" style="fontSize:3rem; color:red">4.50%</td>
                <td>乾元-私享荟2017年第3<br>期私人银行理财产品</td>
                <td rowspan="3" style="fontSize: 2rem; color:gray">&gt;</td>
              </tr>
              <tr>
                <!-- <td></td> -->
                <td style="color: red">期限61天</td>
                <!-- <td></td> -->
              </tr>
              <tr class="grayy">
                <td>预期年化收益率</td>
                <td>起购金额 600w</td>
                <!-- <td></td> -->
              </tr>
            </table>
          </li>
        </ul>
      </many>
      <many menuHeaderName="资讯" menuMore="更多&gt;">
        <div class="newsList">
          <ul>
            <li>
              <div class="left">西班牙情势：参议院批准对加泰罗尼亚实施直接管辖</div>
              <div class="right">2017-10-27</div>
            </li>
            <li>
              <div class="left">《全球市场》亚股持稳，欧元在欧洲央行会议前小涨</div>
              <div class="right">2017-10-26</div>
            </li>
            <li>
              <div class="left">《独家新闻》辉瑞欲脱手消费者保健业务，料11月启动流程--消息人士</div>
              <div class="right">2017-10-26</div>
            </li>
          </ul>
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
import LbtUI from '@/components/LbtUI'
import Many from '@/components/Many'
export default {
  created () {
    this.$store.state.homeActive = false
    this.$store.state.cardActive = false
    this.$store.state.investActive = true
    this.$store.state.loansActive = false
    this.$store.state.lifeActive = false
  },
  computed: {
    imgs () {
      return this.$store.state.imgs
    }
  },
  components: {
    TarbarHeader,
    LbtUI,
    Many
  }
}
</script>

<style scoped>
.cardOne{
  background: skyblue;
  color: white;
}
.cardOne ul li span{
  color: white;
}
.imgDB{
  width: 100%;
  height: 8rem;
  margin: 1rem 0;
}
.imgDB img{
  width: 50%;
  height: 8rem;
  float: left;
}
.investList{
  width: 100%;
}
.investList li{
  border-bottom: solid 1px #cccccc;
}
.investList li:last-of-type{
  border: 0;
}
.investList li table{
  width: 100%;
  height: 9rem;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem 0;
}
.investList li table tr{
  height: 3rem;
}
.grayy{
  color: gray;
}
.newsList{
  width: 100%;
  background: white;
}
.newsList ul li{
  width: 100%;
  height: 5rem;
  font-size: 1.2rem;
  padding: 1rem;
  border-bottom: solid 1px gray;
}
.newsList ul li:last-of-type{
  border: none;
}
.left{
  width: 70%;
  float: left;
}
.right{
  line-height: 4rem;
  color: gray;
  width: 25%;
  float: right;
}
</style>

