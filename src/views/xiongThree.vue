<template>
    <div class="root">
        <pageTop>
        </pageTop>
        <div class="video">
            <img :src="icon" v-if="!videoPlayState" class="icon" @click="play">
            <video ref="v" :poster="poster" @click="pause" @timeupdate="timeU" @canplay="timeW" @ended="videoEnd">
                <source :src="videoAddress" type="video/mp4" />您的浏览器不支持 mp4文件。
            </video>
            <div class="control-bar">

                <span class="times"> {{
                        playCurrentTime
                }} / {{ TimeD }}</span>
                <van-slider active-color="#fb7299" v-model="RangeValue" @change="timeC" :max="videoDuraction" />
            </div>
        </div>
        <div class="info">
            <img src="../assets/webInfoImg.jpg">
            <div class="text">
                <div class="text_title">
                    <span class="name">雄兵连3雷霆万钧</span>
                    <span class="point">9.0分</span>
                </div>
                <div class="content">
                    <p> 连载中</p>
                    雄兵连为国内首部3D军事科幻类动漫作品，《雄兵连》描述了在神河宇宙中各星系文明与神秘的虚空世界之间的发生的科幻战争故事。
                </div>
            </div>



        </div>
        <div class="ep-list">
            <div class="ep-list-header">
                <span class="ep-title"> 选集</span>
                <span class="ep-last">更新至第3话</span>
            </div>
            <div class="ep-list-body">
                <div :class="['ep-item', choosedEp == item.id ? 'ep-item-active' : '']" v-for="item in eps" :key="item"
                    @click="changeEp(item.id)">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <h1>测试页面</h1>


    </div>
</template>

<script >
import { ref } from 'vue'
import pageTop from '../components/pageTop'
export default {
    name: 'xiongThree',
    components: {
        pageTop
    },
    setup() {
        const v = ref()
        const poster = ref('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/a3ab6ff0-27da-4dce-baaf-a709961e4fb5.png')
        const icon = "https://s1.hdslb.com/bfs/static/bangumi/h5/asserts/player-play-tv-icon.png"
        const videoPlayState = ref(false)
        const videoAddress = ref('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/b5a06f88-fb89-4b85-8d58-960f4cb33c73.mp4')
        const videoDuraction = ref(0)
        const TimeD = ref('')
        const RangeValue = ref(0)
        const playCurrentTime = ref('00 : 00')
        const eps = ref([{ id: 1, name: '第1话' }, { id: 2, name: '第2话' }, { id: 3, name: '第3话' }, { id: 4, name: '第4话' }, { id: 5, name: '第5话' }])
        const choosedEp = ref(1)
        const changeEp = function (i) {
            choosedEp.value = i
        }
        let play = function () {
            v.value.play();
            videoPlayState.value = true
            console.log(v.value)
        }
        let pause = function () {
            v.value.pause();
            videoPlayState.value = false

        }
        let videoEnd = function () {
            videoPlayState.value = false
        }
        let timeW = function () {
            console.log(v.value.duration)
            TimeD.value = TimeHandle(v.value.duration)
            videoDuraction.value = v.value.duration

        }
        let timeC = function () {

            v.value.currentTime = RangeValue.value
            //    v.value.currentTime
        }
        let timeU = function () {

            RangeValue.value = v.value.currentTime
            playCurrentTime.value = TimeHandle(v.value.currentTime)
        }
        let TimeHandle = function (time) {
            // 转换为式分秒
            let h = parseInt(time / 60 / 60 % 24)
            h = h < 10 ? '0' + h : h
            let m = parseInt(time / 60 % 60)
            m = m < 10 ? '0' + m : m
            let s = parseInt(time % 60)
            s = s < 10 ? '0' + s : s
            // 作为返回值返回
            if (h == "00") {
                return m + ':' + s
            } else {
                return Number(h) + ':' + Number(m) + ':' + Number(s)
            }

        }

        return {
            icon, videoPlayState, videoAddress, eps, choosedEp, changeEp, poster, v, play, pause, timeW, timeU,
            playCurrentTime, videoDuraction, timeC, TimeHandle, TimeD, videoEnd, RangeValue
        }
    }
}
</script>

<style  scoped lang="less">
.root {
    background-color: #ffffff;
    height: 100%;
}

.video {
    position: relative;
    width: 100%;

}

video {
    z-index: 2;
    width: 100%;
}

.icon {
    z-index: 5;
    position: absolute;
    width: 95px;
    height: 86px;
    right: 50px;
    bottom: 50px;
}

.info {
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    flex-wrap: nowrap;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    margin-top: 10px;

    img {
        width: 25%;
        height: 250px;
    }

    .text {
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;

        .text_title {
            display: flex;
            justify-content: space-between;

            .name {
                display: inline-block;
                font-size: 32px;
            }

            .point {
                display: inline-block;
                color: #ffa726;
                font-size: 40px;
            }
        }

        .content {
            font-size: 12Px;
            color: #999;
            line-height: 40px;
        }

    }



    /* https://puui.qpic.cn/vcover_vt_pic/0/mzc002006zef3n41652588676293/260 */

}

.ep-list {
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    box-sizing: border-box;

    .ep-list-header {
        display: flex;
        height: 60px;
        margin-bottom: 10px;
        justify-content: space-between;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;

        .ep-title {
            font-size: 36px;
            line-height: 60px;
            font-weight: 700;
        }

        .ep-last {
            color: #999;
            line-height: 60px;
            font-size: 28px;
        }

        .ep-last::after {
            content: "";
            // position: relative;
            // top: 50%;
            // transform: translateY(-50%);
            margin-top: 21px;
            display: inline-block;
            vertical-align: top;
            width: 15px;
            height: 15px;
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            // margin-top: .74666667rem;
            // margin-right: .10666667rem;
            // margin-left: .10666667rem;
            position: relative;
        }
    }

    .ep-list-body {
        white-space: nowrap;
        overflow-x: scroll;
        height: 100px;

        .ep-item {
            width: 256px;
            height: 86px;
            line-height: 86px;
            text-align: center;
            border-radius: .21333333rem;
            border: 1px solid #ccc;
            display: inline-block;
            margin-left: 20px;
            font-size: 28px;
            letter-spacing: 5px;
        }

        .ep-item-active {
            border-color: #fb7299;
            color: #fb7299;
        }
    }

    .ep-list-body::-webkit-scrollbar {
        display: none;
    }
}

.control-bar {
    padding-left: 10px;
    height: 60px;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    border: 0 solid #e2e2e2;
    background-color: rgba(0, 0, 0, .4);
    opacity: 1;

    .times {
        display: inline-block;
        height: 100%;

        line-height: 60px;
        margin-right: 20px;
        font-size: 32px;
        color: #ffffff;
    }
}

:deep(.van-slider) {
    display: inline-block;
    width: 65%;
    height: 10px;
}
</style>
