<template>
  <div id="lbt">
    <ul>
        <li>
            <img :src=img1 alt="">
        </li>
        <li>
            <img :src=img2 alt="">
        </li>
        <li>
            <img :src=img3 alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['img1', 'img2', 'img3']
}
</script>

<style scoped>
#lbt{
    width: 100%;
    height: 10rem;
    background: skyblue;
    overflow: hidden;
    position: relative;
    margin: 1rem 0;
}
#lbt ul{
    width: 300%;
    height: 10rem;
    position: absolute;
    left: 0;
    animation: leftAnimation 6s infinite;
}
#lbt ul li img{
    width: 33.33333%;
    height: 10rem;
    float: left;
}
@keyframes leftAnimation{
    30%{
        left: 0%;
    }
    60%{
        left: -100%;
    }
    90%{
        left: -200%;
    }
    100%{
        left: 0;
    }
}
</style>

