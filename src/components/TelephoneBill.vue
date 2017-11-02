<template>
  <div id="telephoneBill">
      <many menuHeaderName=话费充值>
          <div class="menuPhone">
              <div class="phoneTop">
                  <b>手机号码</b>
                  <input type="seach" placeholder="请输入充值手机号码" v-model="phone">
                  <span class="iconfont icon-lianxiren"></span>
              </div>
              <hr>
              <ul>
                <li @click="phoneBill">￥50</li>
                <li @click="phoneBill">￥100</li>
                <li @click="phoneBill">￥300</li>
                <li @click="phoneBill">￥500</li>
              </ul>
          </div>
      </many>
  </div>
</template>

<script>
import Many from '@/components/Many'
export default {
//   props: ['money'],
  data () {
    return {
      loginBol: this.$store.state.loginBol,
      phone: ''
    }
  },
  methods: {
    phoneBill () {
      if (this.loginBol) {
        if (this.phone !== '') {
          let loginUrl = `http://10.3.151.203:8081/users/${this.userInfo.id}`
          let money = parseInt((event.path[0].innerText).slice(1))
          this.$http.get(loginUrl)
            .then(res => {
              res.data.balanceMoney = (parseFloat(res.data.balanceMoney) - parseFloat(money)).toFixed(2)
              let obj = {
                text: `给${this.phone}充值话费`,
                to: `-${money}`,
                time: new Date().toLocaleString(),
                otherMoney: `余额: ${this.userInfo.balanceMoney - money}`
              }
              res.data.userHistory.push(obj)
              this.$http.put(loginUrl, res.data)
              // 同时更改userInfo的数据
              this.$store.dispatch('userLogin', res.data)
            })
          this.$msg('提示', '操作成功，话费将于24小时内到账，请注意查收')
        } else {
          this.$msg('提示', '请输入要充值的手机号码')
        }
      } else {
        this.$router.push('userlogin')
      }
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
    Many
  }
}
</script>

<style scoped>
#telephoneBill{
    width: 100%;
    margin: 1rem 0;
}
.menuPhone{
    width: 100%;
    font-size: 1.6rem;
    background: white;
}
.phoneTop{
    height: 4rem;
    line-height: 4rem;
    margin-bottom: 0.6rem;
}
.phoneTop b{
    width: 30%;
    font-weight: normal;
    padding: 1rem;
}
.phoneTop input{
    width: 60%;
    height: 3.2rem;
    font-size: 1.4rem;
    outline: none;
    border: none;
}
.phoneTop span{
    width: 10%;
    font-size: 2.2rem;
    color: skyblue;
}
.menuPhone ul li{
    display: inline-block;
    width: 20%;
    margin: 2% 1.8%;
    /* margin: 1rem 1rem; */
    padding: 0.2rem 0.6rem;
    border: solid 1px skyblue;
    color: skyblue;
    border-radius: 0.6rem;
}
</style>
