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
  bottom: 66px;
  left: 0;
  right: 0;
  overflow: auto;
}
.main{
  position: relative;
  top: 66px;
}
</style>
