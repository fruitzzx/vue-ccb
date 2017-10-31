<template>
  <div id="header">
      <ul>
          <li>
              <span class="iconfont icon-xuanxiang"></span>
          </li>
          <li>
              <input v-if="seach=='true'" type="seach" :placeholder=headerTitle>
              <span v-if="seach=='false'">{{headerTitle}}</span>
          </li>
          <li>
              <span class="iconfont icon-kefu"></span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['headerTitle', 'seach']
}
</script>

<style scoped>
#header{
    width: 100%;
    height: 50px;
    background: skyblue;
    font-size: 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}
#header ul{
    width: 100%;
}
#header ul li{
    width: 20%;
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: center;
}
#header ul li:nth-of-type(2){
    width: 60%;
}
#header ul li span{
    font-size: 3rem;
    /* text-align: center; */
    color: white;
}
#header ul li:nth-of-type(2) input{
    width: 100%;
    height: 2.6rem;
    outline: none;
    border: none;
    border-radius: 3rem;
    padding-left: 3.5rem;
    color: #dbdbdb;
    font-size: 1.6rem;
    background: url(../common/img/seach.svg) no-repeat 10px center;
    background-color: white;
    background-size: 2rem 2rem;
}
#header ul li:nth-of-type(2) span{
    font-size: 2rem;
}
</style>

