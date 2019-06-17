<template>
    <div class="wrap">
        <p>
            <input type="text" placeholder="手机号码" v-model="phone_value">
        </p>
        <p>
            <input type="password" placeholder="密码" v-model="pwd_value"> 
        </p>
        <button id="loginbtn" @click="handleLogin">登录</button>
    </div>
</template>
<script>
const phoneReg = /^1[3589]\d{9}$/;
import request from '../../utils/request';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            phone_value : '',
            pwd_value : '',
        }
    },
    computed:{

    },
    methods:{
        handleLogin(){
            if(phoneReg.test(this.phone_value) && this.pwd_value.trim() !== ''){
                request.post('/api/login',{
                    phone:this.phone_value,
                    password : this.pwd_value
                }).then(res => {
                    window.localStorage.setItem('token',res.token);
                    this.$router.back();
                }).catch(error => {
                    alert(error.response.data.message);
                })
            }else{
                alert('请正确输入用户名或密码')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/_minix.scss';
@import '../../static/scss/common.scss';
.wrap{
    width: 100%;
    height: 100%;
    p{
        width: 100%;
        input{
            width: 100%;
            height: pxTorem(50px);
            line-height:pxTorem(50px);
            border-bottom: 1px solid #ccc;
            padding-left: pxTorem(20px);
            box-sizing: border-box;
            font-size: pxTorem(16px);
        }
    }
    #loginbtn{
        width: 100%;
        height: pxTorem(50px);
        line-height:pxTorem(50px);
        margin-top: pxTorem(20px);
        background: rgb(187, 186, 186);
        border: 0;
        border-radius: pxTorem(20px);
        font-size: pxTorem(16px);
        color: #fff;
        outline: none;
    }
}
</style>