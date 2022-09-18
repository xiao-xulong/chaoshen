<template>
  <div class="root">
    <div @click="menu">
      <pageTop> </pageTop>
    </div>

    <div class="video">
      <img :src="icon" v-if="!videoPlayState" class="icon" @click="play" />
      <video ref="v" crossorigin="anonymous" x5-video-player-type="h5" :src="videoAddress" :poster="poster"
        @click="pause" @timeupdate="timeU" @canplay="timeW" @ended="videoEnd"></video>
      <div class="control-bar">
        <span class="times"> {{ playCurrentTime }} / {{ TimeD }}</span>

        <van-slider active-color="#fb7299" v-model="RangeValue" @change="timeC" :max="videoDuraction" />
        <i @click="fullScreen" class="fullScreenIcon"><svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path
                d="M17.262 9.995a.75.75 0 01.75.75v6.585a.75.75 0 01-.75.75h-6.515a.75.75 0 010-1.5h5.765v-5.835a.75.75 0 01.75-.75zm-6-6a.75.75 0 110 1.5H5.497v5.835a.75.75 0 01-1.5 0V4.745a.75.75 0 01.75-.75h6.515z"
                id="pid-2-svgo-a"></path>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h22v22H0z"></path>
              <mask id="pid-2-svgo-b" fill="#fff">
                <use xlink:href="#pid-2-svgo-a"></use>
              </mask>
              <use fill="#979797" fill-rule="nonzero" xlink:href="#pid-2-svgo-a"></use>
              <g mask="url(#pid-2-svgo-b)" fill="#FFF" fill-rule="nonzero">
                <path d="M0 0h22v22H0z"></path>
              </g>
            </g>
          </svg></i>
      </div>
    </div>
    <div class="info">
      <img src="../assets/webInfoImg.jpg" />
      <div class="text">
        <div class="text_title">
          <span class="name">雄兵连3雷霆万钧</span>
          <span class="point">9.0分</span>
        </div>
        <div class="content">
          <p>连载中</p>
          雄兵连为国内首部3D军事科幻类动漫作品，《雄兵连》描述了在神河宇宙中各星系文明与神秘的虚空世界之间的发生的科幻战争故事。
        </div>
      </div>
    </div>
    <div class="ep-list">
      <div class="ep-list-header">
        <span class="ep-title"> 选集</span>
        <span class="ep-last">更新至第20话</span>
      </div>
      <div class="ep-list-body">
        <div :class="['ep-item', choosedEp == item.id ? 'ep-item-active' : '']" v-for="item in eps" :key="item"
          @click="changeEp(item)">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from "vue";
import pageTop from "../components/pageTop";
export default {
  name: "xiongThree",
  components: {
    pageTop,
  },
  setup() {
    //video的dom
    const v = ref();
    //视频封面
    const poster = ref(
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/a3ab6ff0-27da-4dce-baaf-a709961e4fb5.png"
    );
    //哔哩哔哩电视图标
    const icon =
      "https://s1.hdslb.com/bfs/static/bangumi/h5/asserts/player-play-tv-icon.png";
    //视频播放状态
    const videoPlayState = ref(false);
    //视频地址
    const videoAddress = ref("http://42.192.47.115:16880/xs01.mp4");
    //视频长度
    const videoDuraction = ref(0);
    //格式处理后的时间总长度 00：00
    const TimeD = ref("");
    //进度条的value
    const RangeValue = ref(0);
    //格式处理后的正在播放的时间
    const playCurrentTime = ref("00 : 00");
    //剧集详情
    const eps = ref([
      {
        id: 1,
        name: "第1话",
        videoAddress: "http://42.192.47.115:16880/xs01.mp4",
      },
      {
        id: 2,
        name: "第2话",
        videoAddress: "http://42.192.47.115:16880/xs02.mp4",
      },
      {
        id: 3,
        name: "第3话",
        videoAddress: "http://42.192.47.115:16880/xs03.mp4",
      },
      {
        id: 4,
        name: "第4话",
        videoAddress: "http://42.192.47.115:16880/xs04.mp4",
      },
      {
        id: 5,
        name: "第5话",
        videoAddress: "http://42.192.47.115:16880/xs05.mp4",
      },
      {
        id: 6,
        name: "第6话",
        videoAddress: "http://42.192.47.115:16880/xs06.mp4",
      },
      {
        id: 7,
        name: "第7话",
        videoAddress: "http://42.192.47.115:16880/xs07.mp4",
      },
      {
        id: 9,
        name: "第9话",
        videoAddress: "http://42.192.47.115:16880/xs09.mp4",
      },
      {
        id: 10,
        name: "第10话",
        videoAddress: "http://42.192.47.115:16880/xs10.mp4",
      },
      {
        id: 11,
        name: "第11话",
        videoAddress: "http://42.192.47.115:16880/xs11.mp4",
      },
      {
        id: 12,
        name: "第12话",
        videoAddress: "http://42.192.47.115:16880/xs12.mp4",
      },
      {
        id: 13,
        name: "第13话",
        videoAddress: "http://42.192.47.115:16880/xs13.mp4",
      },
      {
        id: 14,
        name: "第14话",
        videoAddress: "http://42.192.47.115:16880/xs14.mp4",
      },
      {
        id: 15,
        name: "第15话",
        videoAddress: "http://42.192.47.115:16880/xs15.mp4",
      },
      {
        id: 16,
        name: "第16话",
        videoAddress: "http://42.192.47.115:16880/xs16.mp4",
      },
      {
        id: 17, name: '第17话',
        videoAddress: "http://42.192.47.115:16880/xs17.mp4"
      },
      { id: 18, name: '第18话', videoAddress: "http://42.192.47.115:16880/xs18.mp4" },
      { id: 19, name: '第19话', videoAddress: "http://42.192.47.115:16880/xs19.mp4" },
      { id: 20, name: '第20话', videoAddress: "http://42.192.47.115:16880/xs20.mp4" },
      // { id: 3, name: '第3话' },
      // { id: 4, name: '第4话' },
      // { id: 5, name: '第5话' }
    ]);
    //选中的剧集
    const choosedEp = ref(1);
    //选中剧集时视频地址重加载 播放状态改为false
    const changeEp = function (i) {
      choosedEp.value = i.id;
      videoAddress.value = i.videoAddress;
      console.log(videoAddress.value);
      videoPlayState.value = false;
    };
    //开始播放
    let play = function () {
      v.value.play();
      videoPlayState.value = true;
      console.log(v.value);
      // v.value.webkitRequestFullscreen()
    };
    //暂停播放
    let pause = function () {
      v.value.pause();
      videoPlayState.value = false;
    };
    //视频全屏
    let fullScreen = function () {
      v.value.webkitRequestFullscreen();
    };
    //播放结束
    let videoEnd = function () {
      videoPlayState.value = false;
    };
    //视频资源加载后获取视频长度
    let timeW = function () {
      console.log(v.value.duration);
      TimeD.value = TimeHandle(v.value.duration);
      videoDuraction.value = v.value.duration;
    };
    let timeC = function () {
      v.value.currentTime = RangeValue.value;
    };
    let timeU = function () {
      RangeValue.value = v.value.currentTime;
      playCurrentTime.value = TimeHandle(v.value.currentTime);
    };
    const menu = function () {
      v.value.pause();
      videoPlayState.value = false;
      console.log("pause");
    };
    let TimeHandle = function (time) {
      // 转换为式分秒
      let h = parseInt((time / 60 / 60) % 24);
      h = h < 10 ? "0" + h : h;
      let m = parseInt((time / 60) % 60);
      m = m < 10 ? "0" + m : m;
      let s = parseInt(time % 60);
      s = s < 10 ? "0" + s : s;
      // 作为返回值返回
      if (h == "00") {
        return m + ":" + s;
      } else {
        return h + ":" + m + ":" + s;
      }
    };

    return {
      icon,
      videoPlayState,
      videoAddress,
      eps,
      choosedEp,
      changeEp,
      poster,
      v,
      play,
      pause,
      timeW,
      timeU,
      playCurrentTime,
      videoDuraction,
      timeC,
      TimeHandle,
      TimeD,
      videoEnd,
      RangeValue,
      fullScreen,
      menu,
    };
  },
};
</script>

<style  scoped lang="less">
.root {
  background-color: #ffffff;
  height: 100%;
}

.menu {
  z-index: 10;
}

.video {
  position: relative;
  width: 100%;
}

video {
  width: 100%;
  object-fit: fill;
}

.icon {
  z-index: 5;
  position: absolute;
  width: 99px;
  height: 90px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      font-size: 20px;
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
      border-radius: 0.21333333rem;
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
  height: 40px;
  position: absolute;
  z-index: 2;
  bottom: 15px;
  left: 0;
  right: 0;
  border: 0 solid #e2e2e2;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  line-height: 40px;

  .times {
    display: inline-block;
    height: 100%;
    line-height: 60px;
    margin-right: 20px;
    font-size: 28px;
    color: #ffffff;
  }
}

:deep(.van-slider) {
  display: inline-block;
  width: 60%;
  height: 10px;
  position: relative;
  bottom: 5px;
}

.fullScreenIcon {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  position: relative;
  left: 45px;
  top: 8px;
}
</style>
