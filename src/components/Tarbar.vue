<template>
  <div id="tarbar">
      <ul>
        <router-link tag="li" to="/">
            <span class="iconfont icon-home"></span><br>
            首页
        </router-link>
        <router-link tag="li" to="/card">
            <span class="iconfont icon-card"></span><br>
            信用卡
        </router-link>
        <router-link tag="li" to="/invest">
            <span class="iconfont icon-invest"></span><br>
            投资理财
        </router-link>
        <router-link tag="li" to="/loans">
            <span class="iconfont icon-daikuan"></span><br>
            贷款
        </router-link>
        <router-link tag="li" to="/life">
            <span class="iconfont icon-shenghuo"></span><br>
            悦享生活
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tarbar{
    width: 100%;
    height: 50px;
    background: black;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
#tarbar ul li{
    width: 20%;
    text-align: center;
    float: left;
    color: white;
    padding-top: 0.5rem;
}
#tarbar ul li span{
    font-size: 2rem;
}
</style>
