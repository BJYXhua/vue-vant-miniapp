<template>
  <div class="Logincontainer">
    <h4>欢迎登录mini充电站</h4>
    <!-- 表单 -->
    <!-- <div class="error">{{message}}</div> -->
    <form action="" class="login">
      <van-cell-group class="loginGroup">
        <van-field
          v-model="username"
          required
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          required
          label="密码"
          type="password"
          placeholder="请输入密码"
        />
      </van-cell-group>

      <button @click.prevent="login" class="submit">登录</button>
    </form>

    <div class="link">
      <router-link to="/Forget">忘记密码?</router-link>
      | 还没有账号?
      <router-link to="/Register">立即注册</router-link>
    </div>
    <div class="icons">
      <div class="line">其他方式登录</div>
     <div class="iconGroup">
       <span> <i class="iconfont icon-weixin" style="color: #49c43c"></i><br><span>微信登录</span></span>
      <span><i class="iconfont icon-QQ" style="color: #49a6df"></i> <br> <span>QQ登录</span></span>
      <span><i class="iconfont icon-weibo" style="color: #e15c59"></i> <br> <span>微博登录</span> </span>
     </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {

      if(this.username===''&&this.password===''){
        alert("用户名密码不能为空!");
        return false
      }
      if (
        localStorage.getItem("username") == this.username &&
        localStorage.getItem("password") == this.password 
      ) {
        this.$router.push("/home?username="+this.username);
        
      } else {
        alert("用户名或密码错误");
        return false;
      }
    },
  },
};
</script>
<style scoped>
.Logincontainer {
  font-size: 4vw;
  text-align: center;
  /* position: absolute; */
  /* top: 25%; */
  /* left: 50%; */
  padding-top: 25vw;
  /* transform: translate(-50%, -50%); */
  min-height: 1000px;

  background: palegoldenrod;
}
.login {
  width: 85%;
  margin: 0 auto;
  /* height: 60vw; */
  text-align: center;
  border-radius: 4px;
  background-color: rgba(61, 61, 61, 0.2);
}
.login .loginGroup {
  background-color: transparent;
  color: #fff;
}
.van-field .van-field__label span {
  color: #fff;
}
.loginGroup .van-field {
  background-color: transparent;
}
.van-field__control {
  color: #fff;
}
/* 修改placeholder颜色 */
::v-deep .van-field__control::-webkit-input-placeholder {
  color: #fff;
  font-size: 0.2rem;
  font-weight: 600;
}

.link {
  margin-top: 10%;
  font-size: 3.5vw;
}
.line {
  margin-top: 20%;
  margin-bottom: 6.667vw;
  color: rgb(182, 181, 181);
  padding-bottom: 2.667vw;
  text-align: center;
  border-bottom: 1px solid rgb(255, 255, 255);
  margin-left: 10vw;
  margin-right: 8vw;
}
.iconGroup{
  display: flex;
  justify-content: space-around;
  margin: 10%;
}
.icons i {
  font-size: 8vw;
  
}

/* input {
  width: 50%;
  padding: 4%;
  margin-top: 10px;
  margin: 5%;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(246, 240, 240);
} */

.submit {
  margin: 30px;
  background-color: white;
  width: 50%;
  border: none;
  padding: 3px;
  border-radius: 20px;
  background-color: orange;
}
</style>
