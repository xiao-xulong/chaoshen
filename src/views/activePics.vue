<template>
    <div class="actP">
        <page-top></page-top>
        <h1>动态专区</h1>
        <div :class="['video', 'gradient-border']" v-for="item in activePics" :key="item.videoAddress">
            <div class="icon" @click="goDownload(item.videoAddress)"></div>
            <video :poster="item.videoAddress + '?x-oss-process=video/snapshot,t_0,f_jpg,w_0,h_0,ar_auto'"
                @click="goDownload(item.videoAddress)">
                <source :src="item.videoAddress" type="video/mp4" />您的浏览器不支持 mp4文件。
            </video>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import pageTop from '../components/pageTop'
const { proxy } = getCurrentInstance()
const activePics = ref([
    { videoAddress: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/720528f9-8e7f-41cc-a2a8-c761cb7340ed.mp4', name: '凉薇展翼动态壁纸' },
    { videoAddress: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/6b16823b-ca04-4508-a584-e6ab5af23236.mp4', name: '凯莎动态壁纸' },
    { videoAddress: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/84b387eb-9d59-481e-b794-0616487b9104.mp4', name: '阿狸动态壁纸' },
    { videoAddress: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/75ef0ced-b946-46e1-afc6-54cfa728c430.mp4', name: '凉薇牵手动态壁纸' },
])
const videoAddress = ref('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/720528f9-8e7f-41cc-a2a8-c761cb7340ed.mp4')
let goDownload = function (url) {
    proxy.$router.push({
        path: '/activePicsDownload', query: {
            url: url
        }
    })
}
</script>

<style scoped lang="less">
@import '../assets/fonts/f.css';

h1 {
    background-image: linear-gradient(#2de2ff, #8b67fb);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    font-family: fz;
    letter-spacing: 5px;
}

.gradient-border {
    --borderWidth: 1px;
    background: #1d1f20;
    position: relative;
    border-radius: var(--borderWidth);
}

.gradient-border:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(60deg,
            #f79533,
            #f37055,
            #ef4e7b,
            #a166ab,
            #5073b8,
            #1098ad,
            #07b39b,
            #6fba82);
    border-radius: calc(2 * var(--borderWidth));
    // z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
}

@keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}





.video {
    position: relative;
    width: 94%;
    margin-left: 3%;
    height: 815px;
    // background: url("../assets/videoContain.png") no-repeat;
    // background-size: contain;
    // background-position: center;
    // object-fit: contain;
    // object-position: 50% 15%;
    margin-bottom: 30px;

    .icon {
        position: absolute;
        width: 80px;
        height: 80px;
        background: url("../assets/videoPlayIcon.png") no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        left: 50%;
        top: 50%;
        z-index: 5;
        transform: translate(-50%, -50%);
    }

    video {
        z-index: 2;
        width: 98%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 800px;
        object-fit: cover;
    }
}
</style>
