<template>
  <div id="menu">
    <div class="menuHeader">
        <span></span>
        <p>{{menuHeaderName}}</p>
        <p><span>{{menuMore}}</span></p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['menuHeaderName', 'menuMore']
}
</script>

<style scoped>
#menu{
    background: white;
    margin: 1rem 0;
}
.menuHeader{
    width: 100%;
    height: 4rem;
    line-height: 3rem;
    border-bottom: solid 1px gray;
    padding: 0.5rem 0;
}
.menuHeader>span{
    display: block;
    width: 0.5rem;
    height: 100%;
    background: skyblue;
    float: left;
    border-radius: 0 1rem 1rem 0;
}
.menuHeader>p{
    font-size: 1.6rem;
    padding-left: 2rem;
    color: skyblue;
}
.menuHeader>p>span{
    float: right;
    padding-right: 1rem;
    font-size: 1.4rem;
    margin-top: -3rem;
}
</style>
