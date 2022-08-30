<template>
    <div>
        <page-top></page-top>
        <h1>{{  videoName  }}</h1>
        <div :class="['video', 'gradient-border']">
            <div v-show="videoState" class="icon" @click="play"></div>
            <video :poster="videoAddress + '?x-oss-process=video/snapshot,t_0,f_jpg,w_0,h_0,ar_auto'" ref="v"
                @click="pause" autoplay @ended="pause">
                <source :src="videoAddress" type="video/mp4" />您的浏览器不支持 mp4文件。
            </video>
        </div>
        <a id="bottom-1" class="downLoadBtn" :href="videoAddress + '?response-content-type=application/octet-stream'"
            download>
            壁纸下载
        </a>
    </div>
</template>

<script setup>
import pageTop from '../components/pageTop';
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
let videoAddress = ref()
const videoState = ref(false)
let v = ref('v')
let videoName = ref('')
let route = useRoute();
onMounted(() => {
    let info = JSON.parse(route.query.url)
    videoAddress.value = info.videoAddress
    videoName.value = info.name
    console.log(info)
})
const play = function () {
    videoState.value = false
    v.value.play()
}
const pause = function () {
    videoState.value = true
    v.value.pause()
}
</script>

<style  scoped lang="less">
@import '../assets/fonts/f.css';

h1 {
    background-image: linear-gradient(#2de2ff, #8b67fb);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    font-family: fz;
    letter-spacing: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.video {
    position: relative;
    width: 94%;
    margin-left: 3%;
    // height: 400px;
    // background: url("../assets/videoContain.png") no-repeat;
    // background-size: contain;
    // background-position: center;
    // object-fit: contain;
    // object-position: 50% 15%;

    .icon {
        position: absolute;
        width: 80px;
        height: 80px;
        background: url("../assets/videoPlayIcon.png") no-repeat;
        background-position: center;
        background-size: cover;
        left: 50%;
        top: 50%;
        z-index: 600;
        transform: translate(-50%, -50%);
    }

    video {
        z-index: 2;
        width: 98%;
        position: relative;
        left: 50%;
        // top: 50%;
        transform: translateX(-50%);
        // height: 800px;
        object-fit: contain;
    }
}

.downLoadBtn {
    display: inline-block;
    text-align: center;
    margin-top: 20Px;
    margin-left: 3.5%;
    width: 45%;
    height: 40Px;
    color: #40D7F7;
    border: #01e7ff solid 1px;
    line-height: 40Px;
    font-size: 22Px;
    margin-bottom: 10px;
}

.downLoadBtn::before {
    content: "";
    display: inline-block;
    width: 24Px;
    height: 22Px;
    background: url("../assets/download.png") no-repeat;
    background-size: 24Px 22Px;
    background-position: center;
    position: relative;
    top: 4Px;
    margin-right: 10px;


}
</style>
