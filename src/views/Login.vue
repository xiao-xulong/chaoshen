<template>
  <div class="bg">
    <center style="height: 305px;">
      <img :src="wave" class="i" />
      <img src="../../img/loginText.png" class="logoText" />
    </center>

    <div class="pwd">
      <van-field ref="input" v-model="userId" label="账号" left-icon="user-o" placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" label="密码" left-icon="lock" placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写用户名' }]" type="password" />
    </div>

    <van-button type="success" native-type="submit" @click="login">Sign In</van-button>
    <!-- <img :src="wave" class="i" /> -->
    <!-- <img src="../../img/wing.gif" class="i" /> -->
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { Notify } from "vant";
import { Form, Field, CellGroup } from "vant";
import { Dialog } from "vant";
import { users } from "../../http/user";
export default {
  name: "Login",
  setup() {


    const router = useRouter();
    const wave = ref(
      "https://wimg.588ku.com/gif620/21/09/09/e13b08c1818f78d3b302c5ec85acf5e7.gif"
      // "https://wimg.588ku.com/gif620/20/09/18/8a9bbe9b029179e4d4560eea7618e4b3.gif"
    );
    let { proxy } = getCurrentInstance();
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    onMounted(() => {
      Dialog.alert({
        title: "提示",
        overlayClass: "tip-dialog",
        width: "80%",
        message:
          "受超神影业法务部警告，原网站改为私人学习，欣赏使用，如仍需要超神无水印壁纸请进Q群760844036",
        // message:
        //   "超神壁纸爱好者请进Q群760844036",
      }).then(() => {
        const uId = localStorage.getItem("userId");
        const pwd = localStorage.getItem("wingKey");
        if (uId) {
          userId.value = uId;
          password.value = pwd;
        } else {
          input.value.focus();
        }
      });
    });
    const login = function () {
      testInfo.value = undefined
      const map1 = new Map();

      users.forEach((item) => {
        map1.set(item.qq, item.pwd);
      });
      if (map1.get(Number(userId.value.trim()))) {
        if (map1.get(Number(userId.value.trim())) == password.value.trim()) {
          sessionStorage.setItem("angle", "Yan");
          localStorage.setItem('userId', userId.value);
          localStorage.setItem('wingKey', password.value);
          Notify({ type: 'success', message: '欢迎进入梅洛天庭' });
          proxy.$router.push({
            path: '/Home'
          })
        } else {
          Notify({ type: 'danger', message: '密码错误,请联系Q2431694726' });
        }
      } else {
        Notify({ type: 'danger', message: '账号不存在' });
      }

      // testInfo.value = undefined
      // const r = users.forEach((item) => {
      //     if (item.qq === Number(userId.value)) {
      //         testInfo.value = item

      //     }
      // })
      // if (testInfo.value === undefined) {
      //     Notify({ type: 'danger', message: '账号不存在' });

      // } else {
      //     if (testInfo.value.pwd == password.value) {
      //         sessionStorage.setItem("angle", "Yan");
      //         localStorage.setItem('userId', userId.value);
      //         localStorage.setItem('wingKey', password.value);
      //         Notify({ type: 'success', message: '欢迎进入天使之城' });
      //         proxy.$router.push({
      //             path: '/Home'
      //         })
      //     } else {
      //         Notify({ type: 'danger', message: '密码错误,请联系Q2431694726' });
      //     }
      // }
    };
    const testInfo = ref();
    const input = ref();

    const password = ref("");
    const userId = ref("");
    return {
      login,
      input,
      password,
      userId,
      onSubmit,
      wave,
      testInfo,
    };
  },
};
</script>

<style lang="less">
/* .van-dialog__message {
    --van-dialog-message-font-size: 24px;
    --van-dialog-message-line-height: 28px;
} */
/* .tip-dialog + .van-dialog .van-dialog__message {
    font-size: 24px;
} */

.van-dialog__footer {
  .van-button {
    font-size: 24px !important;
  }
}

.van-dialog {
  font-size: 24px !important;
}

.van-dialog__message {
  font-size: 24px !important;
  line-height: 30px !important;
}

/* .van-dialog__footer {
    --van-button-default-font-size: 24px !important;
}
.van-dialog {
    --van-dialog-font-size: 24px !important;
} */
</style>

<style  scoped>
svg {
  /* width: 100vw;
    height: 300px; */
  position: relative;
  bottom: 10px;
  z-index: 1;
}

:deep(.van-cell) {
  border: 0;
}

.bg {
  width: 100%;
  height: 100vh;
  background-image: url('https://vkceyugu-backup.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/c1770555-2e64-4fb4-b632-9058aa685443.jpg');
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 100%;
  overflow: hidden;
  z-index: 2;
  /* opacity: 0.9; */
}

.pwd {
  width: 90%;
  margin-left: 5%;
  margin-top: 50px;
  opacity: 0.8;
}

:deep(.van-field) {
  font-size: 28px;
  border-bottom: #d3d3d3 solid 1px;
  height: 80px;
  z-index: 2;
  margin-bottom: 30px;
}

:deep(.van-icon) {
  font-size: 30px !important;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.van-field__label) {
  line-height: 58px;
}

:deep(.van-field__value) {
  line-height: 58px;
}

:deep(.van-button) {
  margin-top: 250px;
  width: 90%;
  margin-left: 5%;
  font-size: 30px;
  height: 70px;
  z-index: 2;
}

.i {
  width: 50%;
  position: relative;

  /* position: relative;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%); */
  /* height: 100px; */
  z-index: 1;
}

.logoText {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 270px;
}
</style>
