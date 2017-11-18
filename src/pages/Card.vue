<template>
  <div id="card">
    <tarbar-header seach='false' headerTitle='信用卡'></tarbar-header>
    <div class="main">
      <!-- ............................ -->
      <div v-show="!loginBol" class="cardHeader">
        <span class="iconfont icon-suo"></span><br>
        <p>请登录查看您的信用卡账单和卡片信息</p>
      </div>
      <lbt v-show="loginBol" :img1=imgs[11] :img2=imgs[22] :img3=imgs[28] :img4=imgs[5]></lbt>
      <div class="cardOne">
        <ul>
          <li>
            <span class="iconfont icon-huankuan"></span><br>
            为本人还款
          </li>
          <li>
            <span class="iconfont icon-fenqifu"></span><br>
            账单分期
          </li>
          <li>
            <span class="iconfont icon-fenqigou"></span><br>
            现金分期
          </li>
          <li>
            <span class="iconfont icon-fenqi"></span><br>
            为他人还款
          </li>
        </ul>
        <hr>
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
      <lbt-u-i :img1=imgs[24] :img2=imgs[25] :img3=imgs[26]></lbt-u-i>
      <many menuHeaderName=信用卡管理>
        <div class="menuDB">
          <mt-swipe :auto="0">
            <mt-swipe-item>
              <ul>
                <li>
                  <span class="iconfont icon-xinyongqia"></span><br>
                  信用卡申请
                </li>
                <li>
                  <span class="iconfont icon-edu"></span><br>
                  额度调整
                </li>
                <li>
                  <span class="iconfont icon-chaxun"></span><br>
                  调额申请查询
                </li>
                <li>
                  <span class="iconfont icon-yuedinghuankuanriqi"></span><br>
                  约定还款
                </li>
              </ul>
              <!-- <hr> -->
              <ul>
                <li>
                  <span class="iconfont icon-xinyongka-jihuo"></span><br>
                  信用卡激活
                </li>
                <li>
                  <span class="iconfont icon-zhanghumimaguanli"></span><br>
                  密码管理
                </li>
                <li>
                  <span class="iconfont icon-my"></span><br>
                  个人资料
                </li>
                <li>
                  <span class="iconfont icon-qiapianguashi"></span><br>
                  信用卡挂失
                </li>
              </ul>
            </mt-swipe-item>
            <mt-swipe-item>
              <ul>
                <li>
                  <span class="iconfont icon-huanqia"></span><br>
                  损坏换卡
                </li>
                <li>
                  <span class="iconfont icon-chaxun"></span><br>
                  分期查询
                </li>
                <li>
                  <span class="iconfont icon-banqiajinduchaxun"></span><br>
                  办卡进度查询
                </li>
                <li>
                  <span class="iconfont icon-ERP_yinhangqia"></span><br>
                  龙卡e付卡
                </li>
              </ul>
              <!-- <hr> -->
              <ul>
                <li>
                  <span class="iconfont icon-xiane"></span><br>
                  交易限额
                </li>
                <li>
                  <span class="iconfont icon-shenpi"></span><br>
                  预审批额度
                </li>
                <li>
                  <span class="iconfont icon-qia-"></span><br>
                  卡标志
                </li>
              </ul>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </many>
      <many menuHeaderName=卡片推荐 menuMore=更多卡片&gt;>
        <table>
          <tr>
            <td class="hui">
              <div class="menuCard">
                <img v-lazy=imgs[5] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
            <td>
              <div class="menuCard">
                <img v-lazy=imgs[6] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="menuCard">
                <img v-lazy=imgs[7] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
            <td class="hui">
              <div class="menuCard">
                <img v-lazy=imgs[8] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
          </tr>
        </table>
      </many>
      <many menuHeaderName=热门商户 menuMore=周边商户&gt;>
        <table>
          <tr class="menuDBImg">
            <td>
              <img v-lazy=imgs[9] alt="">
              <p>大家好我是李易峰</p>
            </td>
            <td>
              <img v-lazy=imgs[10] alt="">
              <p>大家好我是李易峰</p>
            </td>
          </tr>
        </table>
      </many>
      <many menuHeaderName=分期乐 menuMore=更多分期&gt;>
        <table>
          <tr class="menuDBImg">
            <td>
              <img v-lazy=imgs[11] alt="">
              <p>大家好我是李易峰</p>
            </td>
            <td>
              <img v-lazy=imgs[12] alt="">
              <p>大家好我是李易峰</p>
            </td>
          </tr>
        </table>
      </many>
      <many menuHeaderName=热门活动 menuMore=更多活动&gt;>
        <table>
          <tr>
            <td>
              <div class="menuCard">
                <img v-lazy=imgs[13] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
            <td class="hui">
              <div class="menuCard">
                <img v-lazy=imgs[14] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="hui">
              <div class="menuCard">
                <img v-lazy=imgs[15] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
            <td>
              <div class="menuCard">
                <img v-lazy=imgs[16] alt="">
                <h3>LINEFRIENDS卡</h3>
                <p>超萌粉丝卡片</p>
                <p>粉丝专属礼遇</p>
              </div>
            </td>
          </tr>
        </table>
      </many>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import TarbarHeader from '@/components/TarbarHeader'
import Lbt from '@/components/Lbt'
import LbtUI from '@/components/LbtUI'
import Many from '@/components/Many'
export default {
  created () {
    this.$store.state.homeActive = false
    this.$store.state.cardActive = true
    this.$store.state.investActive = false
    this.$store.state.loansActive = false
    this.$store.state.lifeActive = false
  },
  data () {
    return {
      loginBol: this.$store.state.loginBol
    }
  },
  computed: {
    imgs () {
      return this.$store.state.imgs
    }
  },
  components: {
    TarbarHeader,
    Lbt,
    LbtUI,
    Many
  }
}
</script>

<style scoped>
.cardHeader{
  width: 100%;
  height: 16rem;
  text-align: center;
  background: skyblue;
  padding-top: 1rem;
}
.cardHeader>span{
  font-size: 8rem;
  color: white;
}
.cardHeader>p{
  padding-top: 1.2rem;
  font-size: 1.2rem;
  color: white;
}
.menuDB{
  width: 100%;
  height: 14rem;
}
table{
  width: 100%;
  height: 14rem;
}
table tr{
  width: 100%;
  height: 7rem;
}
table tr td{
  width: 50%;
  /* border: solid; */
}
.menuCard{
  height: 7rem;
}
.menuCard img{
  width: 35%;
  height: 5rem;
  line-height: 5rem;
  float: left;
  margin: 0 1rem;
  padding: 0;
}
.menuCard h3{
  font-size: 1.1rem;
  font-weight: normal;
}
.menuCard p{
  font-size: 1rem;
}
.menuDBImg{
  height: 8rem;
  /* padding-left: 3rem; */
}
.menuDBImg img{
  width: 95%;
  height: 7rem;
  padding: 0 2%;
}
.menuDBImg p{
  width: 100%;
  /* text-align: center; */
  font-size: 1.2rem;
}
</style>

