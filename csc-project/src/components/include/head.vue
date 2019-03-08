<template>
    <header>
        <h1 class="head-cont"> <span v-if="show=='yes'" @click="goback"> &lt; </span> {{title}} </h1>
    </header>
</template>
<script>
export default {
    name:'head-tit',
    props:['title','show'],
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.head-cont{
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.18rem;
    background-color: #ffffff;
    position: relative;
}
.head-cont span{
    position: absolute;
    left: 0.1rem;
}

</style>
