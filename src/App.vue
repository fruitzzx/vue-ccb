<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <tarbar></tarbar>
  </div>
</template>

<script>
import '@/common/reset.js'
import Tarbar from '@/components/Tarbar'
export default {
  name: 'app',
  components: {
    Tarbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #ccc;
}
ul, ol, li{
  list-style: none;
}
a{
  text-decoration: none;
}
img{
  display: inline-block;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
#content{
  width: 100%;
  position: relative;
  /* top: 66px; */
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
}
.main{
  position: relative;
  top: 50px;
}
.menuCard{
  height: 10rem;
  width: 100%;
  padding-top: 1rem;
}
.menuCard img{
  width: 40%;
  /* height: 8rem; */
  line-height: 10rem;
  float: left;
  margin: 0 1rem;
  padding-left: 1rem;
}
.menuCard h3{
  font-size: 1.5rem;
}
.menuCard p{
  font-size: 1.4rem;
}
.menuCard span{
  display: inline-block;
  font-size: 1.4rem;
  border: solid 1px skyblue;
  border-radius: 2rem;
  color: skyblue;
  padding: 0.2rem 0.5rem;
  margin: 0.6rem;
}
</style>
