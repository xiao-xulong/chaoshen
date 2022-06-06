<template>
    <div class="bg">

        <center>
            <img src="../assets/login_logo.png" style="margin-top: 20px;" />
        </center>









        <div class="pwd">

            <van-field ref="input" v-model="userId" label="账号" left-icon="user-o" placeholder="请输入账号"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" label="密码" left-icon="lock" placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写用户名' }]" type="password" />



        </div>

        <van-button type="success" native-type="submit" @click="login">Sign In</van-button>
        <svg width="100%" height="200" id="svg" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stop-color="#002bdc88"></stop>
                    <stop offset="95%" stop-color="#32ded488"></stop>
                </linearGradient>
            </defs>
            <path
                d="M 0,700 C 0,700 0,233 0,233 C 126.89285714285717,217.53571428571428 253.78571428571433,202.07142857142858 384,185 C 514.2142857142857,167.92857142857142 647.75,149.25 747,158 C 846.25,166.75 911.2142857142858,202.92857142857144 1021,220 C 1130.7857142857142,237.07142857142856 1285.392857142857,235.03571428571428 1440,233 C 1440,233 1440,700 1440,700 Z"
                stroke="none" stroke-width="0" fill="url(#gradient)"
                class="transition-all duration-300 ease-in-out delay-150 path-0"></path>

            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stop-color="#002bdcff"></stop>
                    <stop offset="95%" stop-color="#32ded4ff"></stop>
                </linearGradient>
            </defs>
            <path
                d="M 0,700 C 0,700 0,466 0,466 C 86.92857142857142,478.75 173.85714285714283,491.5 310,492 C 446.14285714285717,492.5 631.5000000000001,480.74999999999994 775,486 C 918.4999999999999,491.25000000000006 1020.1428571428571,513.5 1124,513 C 1227.857142857143,512.5 1333.9285714285716,489.25 1440,466 C 1440,466 1440,700 1440,700 Z"
                stroke="none" stroke-width="0" fill="url(#gradient)"
                class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
        </svg>
    </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useRouter } from "vue-router";
import { Notify } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { Dialog } from 'vant';
import { users } from '../../http/user';
export default {
    name: 'Login',
    setup() {
        const router = useRouter();
        let { proxy } = getCurrentInstance()
        const onSubmit = (values) => {
            console.log('submit', values);
        };
        onMounted(() => {
            Dialog.alert({
                title: '提示',
                overlayClass: "tip-dialog",
                width: '80%',
                message: '受超神影业法务部警告，原网站改为私人学习，欣赏使用，如仍需要超神无水印壁纸请联系QQ2431694726',
            }).then(() => {

                const uId = localStorage.getItem('userId')
                const pwd = localStorage.getItem('wingKey')
                if (uId) {
                    userId.value = uId
                    password.value = pwd
                } else {
                    input.value.focus()
                }

            });

        })
        const login = function () {

            let isUser = users.indexOf(Number(userId.value))
            if (isUser === -1) {
                Notify({ type: 'danger', message: '账号不存在' });
            } else {
                if (password.value.toLowerCase() == 'skyborn') {
                    sessionStorage.setItem("angle", "Yan");
                    localStorage.setItem('userId', userId.value);
                    localStorage.setItem('wingKey', 'skyborn');
                    Notify({ type: 'success', message: '欢迎进入天使之城' });
                    proxy.$router.push({
                        path: '/Home'
                    })
                } else {
                    Notify({ type: 'danger', message: '密码错误,请联系Q2431694726' });
                }
            }



        }
        const input = ref()

        const password = ref('');
        const userId = ref('');
        return {
            login, input, password, userId, onSubmit
        }
    }

}
</script>
  <style>
.path-1 {
    animation: pathAnim-1 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes pathAnim-1 {
    0% {
        d: path("M 0,700 C 0,700 0,466 0,466 C 86.92857142857142,478.75 173.85714285714283,491.5 310,492 C 446.14285714285717,492.5 631.5000000000001,480.74999999999994 775,486 C 918.4999999999999,491.25000000000006 1020.1428571428571,513.5 1124,513 C 1227.857142857143,512.5 1333.9285714285716,489.25 1440,466 C 1440,466 1440,700 1440,700 Z");
    }

    25% {
        d: path("M 0,700 C 0,700 0,466 0,466 C 95.42857142857142,433.92857142857144 190.85714285714283,401.85714285714283 322,404 C 453.14285714285717,406.14285714285717 620.0000000000001,442.5 734,452 C 847.9999999999999,461.5 909.1428571428571,444.14285714285717 1018,442 C 1126.857142857143,439.85714285714283 1283.4285714285716,452.92857142857144 1440,466 C 1440,466 1440,700 1440,700 Z");
    }

    50% {
        d: path("M 0,700 C 0,700 0,466 0,466 C 118.60714285714286,429 237.21428571428572,392 345,393 C 452.7857142857143,394 549.7499999999999,433.00000000000006 678,457 C 806.2500000000001,480.99999999999994 965.7857142857144,489.99999999999994 1098,489 C 1230.2142857142856,488.00000000000006 1335.1071428571427,477 1440,466 C 1440,466 1440,700 1440,700 Z");
    }

    75% {
        d: path("M 0,700 C 0,700 0,466 0,466 C 124.92857142857142,465.82142857142856 249.85714285714283,465.64285714285717 373,475 C 496.14285714285717,484.35714285714283 617.5,503.25 750,499 C 882.5,494.75 1026.142857142857,467.35714285714283 1143,458 C 1259.857142857143,448.64285714285717 1349.9285714285716,457.32142857142856 1440,466 C 1440,466 1440,700 1440,700 Z");
    }

    100% {
        d: path("M 0,700 C 0,700 0,466 0,466 C 86.92857142857142,478.75 173.85714285714283,491.5 310,492 C 446.14285714285717,492.5 631.5000000000001,480.74999999999994 775,486 C 918.4999999999999,491.25000000000006 1020.1428571428571,513.5 1124,513 C 1227.857142857143,512.5 1333.9285714285716,489.25 1440,466 C 1440,466 1440,700 1440,700 Z");
    }
}
</style>
 <style>
.path-0 {
    animation: pathAnim-0 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes pathAnim-0 {
    0% {
        d: path("M 0,700 C 0,700 0,233 0,233 C 126.89285714285717,217.53571428571428 253.78571428571433,202.07142857142858 384,185 C 514.2142857142857,167.92857142857142 647.75,149.25 747,158 C 846.25,166.75 911.2142857142858,202.92857142857144 1021,220 C 1130.7857142857142,237.07142857142856 1285.392857142857,235.03571428571428 1440,233 C 1440,233 1440,700 1440,700 Z");
    }

    25% {
        d: path("M 0,700 C 0,700 0,233 0,233 C 137.46428571428572,233.46428571428572 274.92857142857144,233.92857142857142 387,217 C 499.07142857142856,200.07142857142858 585.7500000000001,165.75 690,148 C 794.2499999999999,130.25 916.0714285714284,129.07142857142858 1044,146 C 1171.9285714285716,162.92857142857142 1305.9642857142858,197.96428571428572 1440,233 C 1440,233 1440,700 1440,700 Z");
    }

    50% {
        d: path("M 0,700 C 0,700 0,233 0,233 C 87.25,271.7857142857143 174.5,310.57142857142856 295,288 C 415.5,265.42857142857144 569.2499999999999,181.5 713,160 C 856.7500000000001,138.5 990.5,179.42857142857144 1110,202 C 1229.5,224.57142857142856 1334.75,228.78571428571428 1440,233 C 1440,233 1440,700 1440,700 Z");
    }

    75% {
        d: path("M 0,700 C 0,700 0,233 0,233 C 110.57142857142858,194 221.14285714285717,155 326,174 C 430.85714285714283,193 530,270 671,276 C 812,282 994.8571428571429,217.00000000000003 1130,198 C 1265.142857142857,178.99999999999997 1352.5714285714284,206 1440,233 C 1440,233 1440,700 1440,700 Z");
    }

    100% {
        d: path("M 0,700 C 0,700 0,233 0,233 C 126.89285714285717,217.53571428571428 253.78571428571433,202.07142857142858 384,185 C 514.2142857142857,167.92857142857142 647.75,149.25 747,158 C 846.25,166.75 911.2142857142858,202.92857142857144 1021,220 C 1130.7857142857142,237.07142857142856 1285.392857142857,235.03571428571428 1440,233 C 1440,233 1440,700 1440,700 Z");
    }
}
</style>
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
    background-color: white;
    overflow: hidden;
    z-index: 2;

}

.pwd {
    width: 90%;
    margin-left: 5%;
    margin-top: 50px;
}

:deep(.van-field) {
    font-size: 28px;
    border-bottom: #d3d3d3 solid 1px;
    height: 80px;
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
</style>
