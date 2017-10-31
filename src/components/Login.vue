<template>
  <div id="login">
      <div class="login">
        <span class="iconfont icon-login"></span><br>
        <p>{{loginContent}}</p>
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
  </div>
</template>

<script>
export default {
  props: ['loginContent']
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
  font-size: 3.5rem;
  color: white;
}
</style>

