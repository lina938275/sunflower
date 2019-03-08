<template>
    <footer>
        <ul>
            <li>
                <router-link to="">首页</router-link>
            </li>
            <li>
                <router-link to="">我的</router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
export default {
    name:'foot-nav'
}
</script>
<style scoped>
footer{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 0.44rem;
    background-color: #ffffff;
}
ul{
    font-size: 0;
}
ul>li{
    display: inline-block;
    width: 50%;
    text-align: center;
    font-size: 0.16rem;
    color:#ff9933;
    line-height: 0.44rem;
}
ul li a{
    color:#ff9933;
}
</style>
