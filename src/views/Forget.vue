<template>
  <div class="forget">
    <div class="head">
      <router-link to="/login">
        <i class="iconfont icon-xiangzuojiantou"></i>忘记密码
      </router-link>
      
    </div>
    <div class="forgetContainer">
      <form action="" class="login">
        <!-- 忘记密码 -->
        <van-cell-group class="loginGroup">
          <van-field
            v-model="telephone"
            required
            type="tel"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field
            v-model="code"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
                class="getCode"
                @click.prevent="getCode"
              >
                {{
                  isRun ? `${runTime}s后重新获取 ` : `获取验证码`
                }}</van-button
              >
            </template>
          </van-field>
          <van-field
            v-model="password"
            required
            type="password"
            label="重置密码"
            placeholder="请设置新密码"
          />
        </van-cell-group>
        <button class="reset" @click="resetPassword">确认重置</button>
        <router-view />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forget",
  data() {
    return {
      telephone: "",
      code: "",
      password: "",
      isRun: false,
      runTime: 30,
    };
  },
  methods: {
    getCode() {
      // 校验手机号码
      if (!/^1\d{10}$/.test(this.telephone)) {
        alert("请保证手机号码正确~");
        return;
      }
      // 开启倒计时
      this.isRun = true;
      // 验证码
      var msgCode = 8888;
      this.autoTimer = setInterval(() => {
        if (this.runTime === 0) {
          this.runTime = 30;
          this.isRun = false;
          this.code = msgCode;
          clearInterval(this.autoTimer);
          return 0;
        }
        this.runTime--;
      }, 1000);
    },
    // 重置密码操作
    resetPassword() {
      if (this.code === "") {
        alert("密码不能为空！");
        return 0;
      } else {
        localStorage.setItem("password", this.password);
        (this.telephone = ""), (this.code = ""), (this.password = "");
        alert("重置密码成功！");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.forget{
  min-height: 1000px;
   background: palegoldenrod;
}
.head {
  font-size: 4vw;
  position: absolute;
}
.forgetContainer {
  font-size: 5vw;
  text-align: center;
  padding-top: 25vw;
  padding-bottom: 53.333vw;
  height: 100%;
 
}

.login {
  width: 85%;
  margin: 0 auto;
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

input {
  width: 80%;
  padding: 10px;
  /* margin-top: 10px; */
  margin: 6px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(253, 252, 252);
}
.reset {
  margin: 30px;
  font-size: 3.5vw;
  background-color: white;
  width: 50%;
  border: none;
  padding: 3px;
  border-radius: 20px;
  background-color: orange;
}
.isCode {
  padding: 14px;
  margin: 9px;
  display: flex;
}
.code {
  flex: 4;
}

</style>
