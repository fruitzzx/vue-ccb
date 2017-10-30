<template>
  <div id="telephoneBill">
      <many menuHeaderName=话费充值>
          <div class="menuPhone">
              <div class="phoneTop">
                  <b>手机号码</b>
                  <input type="seach" placeholder="请输入充值手机号码">
                  <span class="iconfont icon-lianxiren"></span>
              </div>
              <hr>
              <ul>
                  <li>￥50</li>
                  <li>￥100</li>
                  <li>￥300</li>
                  <li>￥500</li>
              </ul>
          </div>
      </many>
  </div>
</template>

<script>
import Many from '@/components/Many'
export default {
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
    font-weight: normal;
    padding: 1rem;
}
.phoneTop input{
    width: 18rem;
    height: 3.2rem;
    font-size: 1.4rem;
    outline: none;
    border: none;
}
.phoneTop span{
    font-size: 2.6rem;
    color: skyblue;
}
.menuPhone ul li{
    display: inline-block;
    margin: 1rem 1rem;
    padding: 0.2rem 0.6rem;
    border: solid 1px skyblue;
    color: skyblue;
    border-radius: 0.6rem;
}
</style>
