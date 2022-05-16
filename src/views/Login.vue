<template>
    <div class="bg">
        <center>
            <img src="../assets/login_logo.png" style="margin-top: 20px;" />
        </center>
        <div class="pwd">
            <van-field ref="input" v-model="password" label="密码" left-icon="lock" placeholder="password"
                type="password" />
        </div>
        <van-button type="success" @click="login">Sign In</van-button>
    </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from "vue-router";

import { Dialog } from 'vant';
export default {
    name: 'Login',
    setup() {
        const router = useRouter();
        let { proxy } = getCurrentInstance()

        onMounted(() => {
            Dialog.alert({
                title: '提示',
                overlayClass: "tip-dialog",
                width: '80%',
                message: '受超神影业法务部警告，原网站改为私人学习，欣赏使用，如仍需要超神无水印壁纸请联系QQ2431694726',
            }).then(() => {


                const pwd = localStorage.getItem('wingKey')
                if (pwd) {
                    password.value = pwd
                } else {
                    input.value.focus()
                }

            });

        })
        const login = function () {
            if (password.value.toLowerCase() == 'angel') {
                sessionStorage.setItem("angle", "Yan");
                localStorage.setItem('wingKey', 'angel');
                proxy.$router.push({
                    path: '/Home'
                })
            } else {
                message.error('密码错误');
            }


        }
        const input = ref()

        const password = ref('');
        return {
            login, input, password
        }
    }

}


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
.bg {
    width: 100%;
    height: 100%;
    background-color: white;
}

.pwd {
    width: 90%;
    margin-left: 5%;
    margin-top: 50px;
}

:deep(.van-field) {
    font-size: 28px;
    border: #d3d3d3 solid 1px;
    height: 80px;
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
    margin-top: 450px;
    width: 90%;
    margin-left: 5%;
    font-size: 30px;
    height: 70px;
}
</style>
