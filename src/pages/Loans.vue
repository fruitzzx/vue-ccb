<template>
  <div id="loans">
    <tarbar-header seach='false' headerTitle='贷款'></tarbar-header>
    <div class="main">
      <login loginContent=登录可查询贷款 txt1=还款 txt2=借贷通 txt3=支用 txt4=我的贷款 span1="icon-huankuan" span2="icon-daikuan1" span3="icon-zhiyongjilu" span4="icon-wodedaikuan"></login>
      <div class="cardOne">
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
      <many menuHeaderName=精彩推荐>
        <div class="advertising">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1291549759,450642421&fm=27&gp=0.jpg" alt="">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1291549759,450642421&fm=27&gp=0.jpg" alt="">
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
import Many from '@/components/Many'
export default {
  components: {
    TarbarHeader,
    Login,
    Many
  }
}
</script>

<style scoped>
.advertising{
  /* width: 100%; */
}
.advertising img{
  width: 100%;
  height: 10rem;
}
</style>

