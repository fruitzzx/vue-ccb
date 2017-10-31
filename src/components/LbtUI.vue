<template>
  <div id="lbtUI">
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img :src=img1 alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img :src=img2 alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img :src=img3 alt="">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ['img1', 'img2', 'img3']
}
</script>


<style scoped>
#lbtUI{
    width: 100%;
    height: 10rem;
    background: skyblue;
    margin: 1rem 0;
}
img{
    width: 100%;
    height: 10rem;
}
</style>
