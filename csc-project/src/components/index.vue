<template>
    <div class='main-cont'>
         <head-tit title='首页' show='no' />
         <div>
             <div>
                 <img class='banner' src="../assets/img/index/banner.png" alt="">
             </div>
             <section class='borraw'>
                 <header>
                     <h3 class="sign"> <span>商户汇</span> </h3>
                 </header>
                 <div>
                     <p class='limit-tit'>最高可借用额度</p>
                     <p class='limit'><strong>100</strong> <span>万元</span></p>
                     <button class="borrow-btn">
                         <router-link to="">去借款 </router-link>
                     </button>
                 </div>
             </section>
         </div>
         <foot-nav></foot-nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.banner{
    display: block;
    width: 100%;
}
.borraw{
    font-size: 0;
    background-color: #ffffff;
    padding-bottom: 0.2rem;
    margin-top:0.1rem;
}
.sign{
    width: 1rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    background-color: #ff9933;
    border-bottom-right-radius:8px; 
}
.sign span{
    font-size: 0.14rem;
    color: #ffffff;
}
.limit-tit{
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
    margin-top:0.2rem;
}
.limit{
    margin: 0.1rem 0;
}
.limit strong{
    font-size: 0.3rem;
    color:#ff9933;
    margin-right: 0.08rem;
}
.limit span{
    font-size: 0.14rem;
     color:#ff9933;
}
.borrow-btn{
    display: block;
    width: 80%;
    height: 0.36rem;
    background-color: #ff9933;
    border: none;
    outline: none;
    margin: 0.1rem auto;
    color: #ffffff;
}
.borrow-btn a{
    color: #ffffff;
}
</style>
