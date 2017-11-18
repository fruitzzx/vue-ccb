<template>
  <div id="userLogin">
    <p @click="close">×</p>
    <span class="iconfont icon-login"></span>
    <table>
        <tr>
            <td>证件号码</td>
            <td>
                <input type="text" placeholder="请输入开通手机银行的证件号码" v-model="loginNum">
            </td>
        </tr>
        <tr>
            <td>登录密码</td>
            <td>
                <input type="password" placeholder="请输入您的登录密码" v-model="loginPwd">
                <span class="iconfont icon-icontishiwenhao pwd" @click="showQuestion"></span>
            </td>
        </tr>
    </table>
    <button @click="loginBtn">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginNum: '',
      loginPwd: ''
    }
  },
  methods: {
    close () {
      this.$router.push('/')
    },
    showQuestion () {
      this.$msg('', '如果忘记手机银行登录密码，请持本人有效身份证件及注册手机银行的账户，前往建行任意网点办理密码重置。')
    },
    loginBtn () {
      if (this.loginNum !== '' && this.loginPwd !== '') {
        let url = 'http://10.3.158.97:8081/users?userId=' + this.loginNum
        return this.$http.get(url)
          .then(res => {
            // 如果数据库中已存在该用户的信息，则返回数据库里的信息
            this.$store.state.time = new Date().toLocaleString()
            if (res.data.length > 0) {
              let userObj = res.data[0]
              if (this.loginPwd === userObj.userPwd) {
                this.$store.dispatch('userLogin', userObj)
                this.$store.state.loginBol = true
                this.$router.push('/home')
              } else {
                this.$msg('提示', '密码错误')
              }
            } else {
              //   如果数据库中不存在该用户的信息，则给数据库添加用户信息
              this.$msg.prompt('第一次登录需提交您的姓名进行实名认证，请输入姓名').then(({ value, action }) => {
                let userObj = {
                  userName: value,
                  userId: this.loginNum,
                  userPwd: this.loginPwd,
                  balanceMoney: (parseInt(Math.random() * 1000000) / 100).toFixed(2),
                  userHistory: []
                }
                this.$http.post(url, userObj)
                this.$store.dispatch('userLogin', userObj)
                this.$store.state.loginBol = true
                this.$router.push('/home')
              })
            }
          })
      } else {
        this.$msg('提示', '号码和密码都不能为空')
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
#userLogin{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background: black;
}
#userLogin p{
    width: 100%;
    font-size: 4rem;
}
#userLogin>span{
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 6rem;
}
#userLogin table{
    width: 100%;
    height: 8rem;
    margin-top: 2rem;
    font-size: 1.4rem;
}
#userLogin table tr td{
    height: 4rem;
    /* border: solid 1px white; */
}
#userLogin table tr td:first-of-type{
    width: 30%;
    text-align: center;
}
#userLogin table tr td:last-of-type{
    width: 70%;
    text-align: right;
}
#userLogin table tr td input{
    width: 88%;
    height: 2.5rem;
    color: white;
    outline: none;
    border: none;
    padding-left: 0.5rem;
    background-color: black;
    float: left;
}
#userLogin .pwd{
    font-size: 2.5rem;
    color: gray;
}
#userLogin button{
    background: white;
    outline: none;
    border: none;
    width: 50%;
    height: 3rem;
    color: gray;
    text-align: center;
    border-radius: 2rem;
    margin-top: 2rem;
    margin-left: 25%;
}
</style>
