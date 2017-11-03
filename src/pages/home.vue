<template>
  <div id="home">
    <tarbar-header seach=true headerTitle=搜索></tarbar-header>
    <div class="main">
      <login loginContent=登录可查询余额 txt1=财富 txt2=转账 txt3=快贷 txt4=龙支付 span1="icon-touzi" span2="icon-weibiaoti5" span3="icon-daikuan1" span4="icon-longzhifu-copy"></login>
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
      <lbt-u-i img1="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3184141841,117106269&fm=27&gp=0.jpg" img2="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2017023583,3353199622&fm=27&gp=0.jpg" img3="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=577381051,417275712&fm=27&gp=0.jpg"></lbt-u-i>
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
                <td><input type="text" placeholder="请输入收款户名" v-model="transferName"></td>
              </tr>
              <tr>
                <td>收款账号</td>
                <td><input type="text" placeholder="请输入收款账号或手机号" v-model="transferNum"></td>
              </tr>
              <tr>
                <td>转账金额</td>
                <td class="zz">
                  <input type="text" placeholder="前请输入转账金额" v-model="transferMoney">
                  <button :disabled="transferBol" @click="transfer">转账</button>
                </td>
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
    </div>
  </div>
</template>

<script>
import TarbarHeader from '@/components/TarbarHeader'
import Login from '@/components/Login'
import LbtUI from '@/components/LbtUI'
import Many from '@/components/Many'
import TelephoneBill from '@/components/TelephoneBill'
export default {
  data () {
    return {
      transferName: '',
      transferNum: '',
      transferMoney: '',
      loginBol: this.$store.state.loginBol
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    transferBol () {
      if (this.transferName !== '' && this.transferNum !== '' && this.transferMoney !== '') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    // 转账
    transfer () {
      if (this.loginBol) {
        let url = 'http://10.3.151.203:8081/users?userName=' + this.transferName + '&userId=' + this.transferNum
        this.$http.get(url)
          .then(res => {
            if (res.data.length > 0) {
              this.$msg.confirm('此操作无法撤销，确定执行?')
                .then(action => {
                  let loginUrl = `http://10.3.151.203:8081/users/${this.userInfo.id}`
                  let passivityUrl = `http://10.3.151.203:8081/users/${res.data[0].id}`
                  // 转账人
                  this.$http.get(loginUrl)
                    .then(res => {
                      res.data.balanceMoney = (parseFloat(res.data.balanceMoney) - parseFloat(this.transferMoney)).toFixed(2)
                      let obj = {
                        text: `给${this.transferName}(${this.transferNum})转账`,
                        to: `-${this.transferMoney}`,
                        time: new Date().toLocaleString(),
                        otherMoney: `余额: ${res.data.balanceMoney}`
                      }
                      res.data.userHistory.push(obj)
                      this.$http.put(loginUrl, res.data)
                      // 同时更改userInfo的数据
                      this.$store.dispatch('userLogin', res.data)
                    })
                    // 被转账人
                  this.$http.get(passivityUrl)
                    .then(res => {
                      res.data.balanceMoney = (parseFloat(res.data.balanceMoney) + parseFloat(this.transferMoney)).toFixed(2)
                      let obj = {
                        text: `${this.userInfo.userName}(${this.userInfo.userId})转账给你`,
                        to: `+${this.transferMoney}`,
                        time: new Date().toLocaleString(),
                        otherMoney: `余额: ${res.data.balanceMoney}`
                      }
                      res.data.userHistory.push(obj)
                      this.$http.put(passivityUrl, res.data)
                    })
                  this.$msg('提示', '转账成功')
                })
            } else {
              this.$msg('提示', '您输入的用户不存在')
            }
          })
      } else {
        this.$router.push('/userlogin')
      }
    }
  },
  components: {
    TarbarHeader,
    Login,
    LbtUI,
    Many,
    TelephoneBill
  }
}
</script>

<style scoped>
.homeOne{
  padding: 0.3rem 0.3rem;
  background: white;
}
.homeOne>ul{
  width: 100%;
  height: 5rem;
  margin: 1.2rem 0;
}
.homeOne>ul li{
  width: 25%;
  float: left;
  font-size: 1.2rem;
  /* border: solid 1px; */
  text-align: center;
}
.homeOne>ul li span{
  font-size: 2.8rem;
  color: skyblue;
}
.homeOne>ul li div{
  font-size: 3rem;
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
  width: 70%;
  height: 3rem;
  outline: none;
  border: none;
  font-size: 1.4rem;
}
.zz button{
  display: inline-block;
  width: 28%;
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
  border: solid 1px skyblue;
  border-radius: 2rem;
  color: skyblue;
  float: right;
  background: white;
  /* outline: none; */
}
</style>

