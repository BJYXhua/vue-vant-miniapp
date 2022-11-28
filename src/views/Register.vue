<template>
  <div class="registerContainer">
    <h5>欢迎注册mini充电站</h5>

    <!-- <div class="pic">
      <img src="../assets/logo.png" alt="" />
      <i class="iconfont icon-jiahao"></i>
    </div> -->
    <!-- 上传照片 -->
      <van-uploader :after-read="afterRead"  v-model="file[0]"  multiple :max-count="1"/>
    <form action="" class="register">
      <div>
        <van-cell-group class="loginGroup">
          <van-field
            v-model="username"
            required
            label="用户名"
            placeholder="用户名 4-16位字符,不包含数字"
          />
          <van-field
            v-model="telephone"
            required
            type="tel"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field 
          v-model="password"
          required
           type="password" 
           label="密码" 
           placeholder="请输入密码"
           />
          <van-field
            v-model="code"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button size="small" type="primary" @click.prevent="getCode()" class="code">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <button class="resBtn" @click="registerBtn">注册</button>
      </div>
    </form>
    <div class="registerfooter">
      已注册过 >
      <router-link to="/login">点击登录</router-link>
    </div>
    <!-- 测试图片上传 -->
    <!-- <img :src="imgsrc" alt=""> -->
  </div>
  
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    return {
      username: "",
      telephone: "",
      code: "",
      password: "",
      //  倒计时
      isRun: false,
      runTime: 30,
      file:[],
      // imgsrc:''
    };
  },
  methods: {
    // 上传文件
    afterRead(file) {
      console.log(file.content);
      this.file.push(file.content)
      localStorage.setItem("img", JSON.stringify(this.file[1]));
    },
    getCode() {
      if (this.isRun) return;
      if (!/^1\d{10}$/.test(this.telephone)) {
        alert("请保证手机号码正确~");
        return;
      }
      // 开启倒计时
      this.isRun = true;
      var msgCode=8888;
      this.autoTimer = setInterval(() => {
        document.querySelector('.code').innerHTML=this.runTime+'s后可重发'
        if (this.runTime === 0) {
          this.runTime = 30;
          this.isRun = false;
          clearInterval(this.autoTimer);
          this.code=msgCode;
        document.querySelector('.code').innerHTML='发送验证码'

          return;
        }
        this.runTime--;
      }, 1000);
      
    },
    // 注册
    registerBtn() {
      // 用户名
      if (!/^\D{4,16}$/.test(this.username)) {
        alert("用户名4-16位字符组成，不能包含数字");
        return;
      }
      if (!/^1\d{10}$/.test(this.telephone)) {
        alert("请保证手机号码正确~");
        return;
      }
      // 密码长度在4-10之间
      if (!/\S{4,10}$/.test(this.password)) {
        alert("密码长度在4-10之间");
        return;
      }
      if(this.code===''){
        alert("验证码不能为空！")
        return false
      }
      if (
        this.username ===localStorage.getItem("username") &&
        this.password===localStorage.getItem("password")
      ) {
        alert("您已经注册，可以直接登陆");
        return false;
      } else {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
        alert("注册成功");

        this.$router.push("/login");
      }
    },
  },
  updated() {
    //  this.imgsrc=JSON.parse(localStorage.getItem("img"))
    // console.log(this.imgsrc);
  }
};
</script>
<style scoped>
.registerContainer {
  font-size: 5vw;
  text-align: center;
  background: palegoldenrod;
  padding-top: 25vw;
  min-height: 1000px;
}
/* h2 {
  color: orange;
} */


.register {
  /* background-color: rgb(247, 218, 163); */
  border-radius: 4px;
  text-align: center;
}

.register {
  width: 85%;
  margin: 0 auto;
  /* height: 60vw; */
  text-align: center;
  border-radius: 4px;
  /* padding-top: ; */
  background-color: rgba(61, 61, 61, 0.2);
}
.register .loginGroup {
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

input:nth-child(1) {
  margin-top: 40px;
}
input {
  padding: 4%;
  width: 50%;
  margin-top: 6px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(253, 253, 253);
}
.resBtn {
  margin: 30px;
  background-color: white;
  width: 50%;
  border: none;
  padding: 3px;
  font-size: 4vw;
  border-radius: 20px;
  background-color: orange;
}
.registerfooter {
  margin-top: 10%;
  font-size: 4vw;
}
.isCode {
  margin-left: 30px;
  display: flex;
}
.code {
  flex: 5;
}
.getCode {
  flex: 7;
  background-color: none;
  outline: none;
  border: none;
  background-color: transparent;
}
</style>
