<template>
    <div class="actP">
        <page-top></page-top>
        <h1>动态专区</h1>
        <div :class="['video', 'gradient-border']" v-for="item in actp" :key="item.videoAddress">
            <div class="icon" @click="goDownload(item)"></div>
            <video :poster="item.post"
                @click="goDownload(item)">
                <source :src="item.videoAddress" type="video/mp4" />您的浏览器不支持 mp4文件。
            </video>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { actp } from "../../http/http";
import pageTop from '../components/pageTop'
const { proxy } = getCurrentInstance()
const activePics = ref([
{ videoAddress: require('../../video/彦叉腰动态.mp4'), name: '彦叉腰',post: require("../../img/彦叉腰动态_poster.jpg") },
    { videoAddress: require('../../video/帅琪琳.mp4'), name: '帅琪琳',post: require("../../img/帅琪琳poster.jpg") },
    { videoAddress: require('../../video/蔷薇机甲动态.mp4'), name: '蔷薇机甲动态',post:require("../../img/蔷薇机甲动态poster.jpg") },
    { videoAddress: require('../../video/悟空动态.mp4'), name: '悟空动态',post:require("../../img/悟空动态poster.jpg") }
    ,
    { videoAddress: require('../../video/蔷薇短发星命动态.mp4'), name: '蔷薇短发星命动态' ,post:require("../../img/蔷薇短发星命动态poster.jpg")}
    ,
    { videoAddress: require('../../video/鹤熙樱花唯美动态壁纸.mp4'), name: '鹤熙樱花唯美动态壁纸' ,post:require("../../img/鹤熙樱花唯美动态壁纸poster.jpg")},
    { videoAddress: require('../../video/凉薇展翼动态壁纸.mp4'), name: '凉薇展翼动态壁纸' ,post:require("../../img/凉薇展翼动态壁纸poster.jpg")},
    { videoAddress: require('../../video/凯莎动态.mp4'), name: '凯莎动态壁纸' ,post:require("../../img/凯莎动态poster.jpg")},
    { videoAddress: require('../../video/阿狸动态.mp4'), name: '阿狸动态壁纸' ,post:require("../../img/阿狸动态poster.jpg")},
    { videoAddress: require('../../video/凉薇牵手动态壁纸.mp4'), name: '凉薇牵手动态壁纸' ,post:require("../../img/凉薇牵手动态壁纸poster.jpg")},
    { videoAddress: require('../../video/凯莎持剑动态.mp4'), name: '凯莎持剑动态',post:require("../../img/凯莎持剑动态poster.jpg" )}

])

let goDownload = function (url) {
    proxy.$router.push({
        path: '/activePicsDownload', query: {
            url: JSON.stringify(url)
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
