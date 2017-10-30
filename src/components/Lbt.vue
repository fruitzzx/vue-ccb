<template>
  <div id="lbt">
    <ul>
        <li>
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3184141841,117106269&fm=27&gp=0.jpg" alt="">
        </li>
        <li>
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2017023583,3353199622&fm=27&gp=0.jpg" alt="">
        </li>
        <li>
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=577381051,417275712&fm=27&gp=0.jpg" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#lbt{
    width: 100%;
    height: 10rem;
    background: red;
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

