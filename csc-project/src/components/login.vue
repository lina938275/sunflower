<template>
    <div class="login-cont">
        <img class="login-logo" src="../assets/img/logo.png" alt="">
        <div class="form-cont">
            <form action="" class="login-form" @submit.prevent="submitForm">
                <input type="text" placeholder="请输入手机号" v-model="loginForm.phone">
                <input type="text" placeholder="请输入密码" v-model="loginForm.password">
                <button type="submit" class="login-btn">登陆</button>
            </form>
        </div>
        <div class="to-register">
            <router-link to='/register'><span>注册</span></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loginForm:{}
        }
    },
    methods:{
        submitForm(){ 

            this.$ajax.post('./abc',this.loginForm).then(function(res){

            })
            .catch(function(err){

            });
            console.log(this.loginForm);
        }
        
    }
}
</script>
<style>
.login-logo{
    margin-top: 0.6rem;
}
.login-form input{
    display: block;
    width: 85%;
    height: 0.4rem;
    margin: 0.1rem auto;
    padding-left:5px;
    background-color:#ffffff;
    border: none; 
}
.login-btn{
    display: block;
    width:85%;
    margin: 0.1rem auto;
    background-color:#ff9933;
    outline:none;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    height: 0.4rem;
}
.to-register{
    margin-top: 2rem;
    color: #ff9933;
    font-size: 0.16rem;
}
</style>
