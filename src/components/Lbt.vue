<template>
  <div id="lbt">
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
        <mt-swipe-item>
            <img :src=img4 alt="">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ['img1', 'img2', 'img3', 'img4']
}
</script>


<style scoped>
#lbt{
    width: 100%;
    height: 16rem;
    text-align: center;
    background: skyblue;
    padding-top: 1rem;
}
img{
    width: 100%;
    height: 16rem;
}
</style>
