<template>
  <div id="login">
      <div v-show="!loginBol" class="login" @click="userLogin">
        <span class="iconfont icon-login"></span><br>
        <p>{{loginContent}}</p>
      </div>
      <div v-show="loginBol" class="loginOK">
        <p>{{userInfo.userName}}</p>
        <p v-show="!spanBol">****</p>
        <p v-show="spanBol">￥{{userInfo.balanceMoney}}</p>
        <br>
        <p>{{time}}</p>
        <span @click="spanBol=!spanBol" v-show="!spanBol" class="iconfont icon-yanjingbiqilai"></span>
        <span @click="spanBol=!spanBol" v-show="spanBol" class="iconfont icon-yanjing"></span>
      </div>
      <ul>
        <li>
          <span class="iconfont" :class="span1"></span><br>
          {{txt1}}
        </li>
        <li>
          <span class="iconfont" :class="span2"></span><br>
          {{txt2}}
        </li>
        <li>
          <span class="iconfont" :class="span3"></span><br>
          {{txt3}}
        </li>
        <li>
          <span class="iconfont" :class="span4"></span><br>
          {{txt4}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['loginContent', 'txt1', 'txt2', 'txt3', 'txt4', 'span1', 'span2', 'span3', 'span4'],
  data () {
    return {
      // 判断是否已经登录
      loginBol: this.$store.state.loginBol,
      // 初始化眼睛不打开
      spanBol: this.$store.state.spanBol
    }
  },
  methods: {
    userLogin () {
      this.$router.push('/userlogin')
    }
  },
  computed: {
    userInfo () {
      let userInfo = this.$store.state.userInfo
      if (userInfo.userId) {
        this.loginBol = true
        return userInfo
      } else {
        this.loginBol = false
        return {}
      }
    },
    time () {
      return this.$store.state.time
    }
  }
}
</script>

<style scoped>
#login{
    width: 100%;
    height: 16rem;
    background: skyblue;
}
.login{
  width: 100%;
  height: 8rem;
  text-align: center;
  padding-top: 1rem;
  /* border: solid 1px; */
}
.login>span{
  font-size: 5rem;
  color: white;
}
.login>p{
  font-size: 1.5rem;
  color: white;
}
#login ul {
  width: 100%;
  height: 8rem;
  padding-top: 2rem;
}
#login ul li{
  width: 25%;
  height: 100%;
  text-align: center;
  float: left;
  font-size: 1.5rem;
  color: white;
}
#login ul li span{
  font-size: 3rem;
  color: white;
}
.loginOK{
  width: 100%;
  height: 8rem;
  padding-top: 1rem;
}
.loginOK p{
  font-size: 2rem;
  color: white;
  padding-left: 1rem;
}
.loginOK p:first-of-type {
  font-size: 1.6rem;
}
.loginOK p:last-of-type{
  font-size: 1.4rem;
  display: inline;
}
.loginOK span{
  font-size: 2rem;
  color: white;
}
</style>

