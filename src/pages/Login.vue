<template>
  <div class="login">
    <div class="left">
      <h4>欢迎登录壹心shop后台系统</h4>
    </div>
    <div class="right">
      <ul>
        <li>
          <h3>Login</h3>
        </li>
        <li>账号：</li>
        <li>
          <input type="text" placeholder="请输入您的管理员账号" v-model="acc_pass.account">
        </li>
        <li>密码：</li>
        <li>
          <input type="password" placeholder="请输入您的管理员密码" v-model="acc_pass.password">
        </li>
        <li>
          <input type="button" value="Login" class="btn" @click="handleLogin" @keyup.enter="handleLogin">
        </li>
        <li>
          <span>没有账号，申请入驻？</span>
        </li>
      </ul>
    </div>
  </div> 
</template>

<script setup>
import { ref, onMounted ,reactive } from 'vue';
import {useRouter} from 'vue-router'
import { ElMessage } from 'element-plus'
import axios from 'axios'; // 假设你使用axios作为HTTP请求库  

    // let account = ref('')
    // let password = ref('')
    let acc_pass = reactive({account:'',password:''})
    const router = useRouter()

    // 定义一个函数来发送登录请求  
    const handleLogin = async () => {
      await axios.post('http://127.0.0.1:5000/api/login', {
        user_id:acc_pass.account,
        password:acc_pass.password
        }).then((res) => {
          console.log(res.data.data.nickname);
          sessionStorage.setItem('quanxian',res.data.data.nickname)
          ElMessage({
            showClose: true,
            message: res.data.message,
            type: 'success',
          })
          router.push('/home')
        }).catch(function (error) {  
          // 处理错误的情况。error 对象包含了一些有用的属性和方法，你可以使用它们来处理错误。  
          console.log(error);  
          ElMessage({
            showClose: true,
            message: '用户名或密码错误',
            type: 'error',
          })
    });
      }




    // 在组件挂载后调用发送登录请求的函数 
    onMounted(()=>{
      // sendLoginRequest

      // console.log(acc_pass.account.value);
      // console.log(acc_pass.password.value);
    })
    
    
</script>

<style scoped>
.login {
  width: 60rem;
  height: 31.25rem;
  display: flex;
  border-radius: 10px;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  box-shadow: 5px 6px 12px rgba(0,0,0,0.3);
} 
 .left {
  width: 65%;
  background-image: url('../assets/img/111912503_0_final.png');
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
 }
 .right {
  width: 35%;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color:rgba(255, 255, 255, 0.5)

 }
 li:nth-child(1) {
  margin-top: 45px;
 }
 li:nth-child(2) {
  text-align: left;
  font-size: 15px;
  padding-left: 60px;
 }
 li:nth-child(3) {
  padding-top: 10px;
  text-align: left;
  padding-left: 60px;
  height: 45px;
  
 }
 li:nth-child(4) {
  text-align: left;
  padding-left: 60px;
  font-size: 15px;
  margin-top: 30px;
 }
 li:nth-child(5) {
  text-align: left;
  padding-left: 60px;
  padding-top: 10px;
  height: 45px;

 }
 li:nth-child(6) {
  margin: 30px 0;
  height: 40px;
 }
 li:nth-child(7) {
  margin: 30px 0;
  font-size: 12px;
 }

 input[type = 'button']{
  width: 120px;
  height: 40px !important;
  font-size: 18px;
  border-radius: 20px;
  transition: all 0.5s;
  /* background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12); */
 }
 .btn:hover {
  background: #86cde9;
 }
 li > input {
  width: 200px;
  outline: none;
  padding-left: 15px;
  border: 0;
  /* transition: all linear 0.1s; */
 }
 li > input[type=text]:focus,li > input[type=password]:focus {
  border: 2px solid #3e86e4;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
 }
 li>input:nth-child(1) {
  height: 30px;
  border-radius: 20px;

 }
</style>