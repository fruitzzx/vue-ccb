<template>
  <div id="login">
      <div class="login">
        <span class="iconfont icon-login"></span><br>
        <p>{{loginContent}}</p>
      </div>
      <ul>
        <li>
          <span class="iconfont" :class=span1></span><br>
          {{txt1}}
        </li>
        <li>
          <span class="iconfont" :class=span2></span><br>
          {{txt2}}
        </li>
        <li>
          <span class="iconfont" :class=span3></span><br>
          {{txt3}}
        </li>
        <li>
          <span class="iconfont" :class=span4></span><br>
          {{txt4}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['loginContent', 'txt1', 'txt2', 'txt3', 'txt4', 'span1', 'span2', 'span3', 'span4']
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
  font-size: 3rem;
  color: white;
}
</style>

