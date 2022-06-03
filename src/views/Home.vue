<template>
  <div class="root">
    <!--     <div class="top">-->
    <!--       <img class="logo" src="../assets/logo.png">-->
    <!--       <img class="menuIcon" src="../assets/菜单.png">-->

    <!--     </div>-->
    <pageTop></pageTop>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <article>
      <h2>雄兵连</h2>
      <h5>GAME CHARACTER</h5>
    </article>
    <!--      <input id="range" type="range" :value="videoCurrentTime" :max="videoTimeWidth" @input="vc">-->
    <!--      <button @click="fullScreen">123</button>-->
    <div class="video">
      <div v-if="!videoPlayState" class="icon" @click="play"></div>
      <video poster="../assets/post.jpg" id="v" @click="pause" @timeupdate="timeU" @canplay="timeW">
        <source :src="videoAddress" type="video/mp4" />您的浏览器不支持 mp4文件。
      </video>
    </div>

    <article>
      <h2>壁纸下载</h2>
      <h5>DOWNLOAD WALLPAPER</h5>
    </article>
    <div v-for="item in backPics" :key="item">
      <img @click="goDownload(item.url)" class="backImg" :src="item.url" />
      <center class="imgName">{{ item.name }}</center>
    </div>
    <button @click="morePic">更多无水印壁纸</button>
  </div>
</template>

<script>
// import s1 from '../assets/swiper1.jpg';
// import s2 from '../assets/swiper2.jpg';
// import s3 from '../assets/swiper3.jpg';
import { examplePics, allPics, shootreq } from '../../http/http'
import { onMounted, ref, getCurrentInstance } from 'vue'
import { useRouter } from "vue-router";
import pageTop from '../components/pageTop'
import { Dialog } from 'vant';
export default {
  name: 'Home',
  components: {
    pageTop
  },
  setup() {
    onMounted(async () => {

      // backPics.value=res.data

    })
    const router = useRouter();
    let { proxy } = getCurrentInstance()
    let backPics = ref(examplePics)
    // const images = [s1, s2, s3]
    const images = ['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/c4f816cf-4f76-4a67-9010-ba53590b17eb.jpg', 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/1a81d7e1-9049-4274-8f4a-248ad6d024f9.jpg', 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/0d302c95-6bcb-4bbf-ac19-6e5355644d0c.jpg']

    let videoPlayState = ref(false)
    let videoAddress = ref('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/b5a06f88-fb89-4b85-8d58-960f4cb33c73.mp4')
    // let videoTimeWidth=ref(0)
    //   let videoCurrentTime=ref(0)
    let play = function () {
      let v = document.getElementById('v')
      v.play();
      videoPlayState.value = true

    }
    let pause = function () {
      let v = document.getElementById('v')
      v.pause();
      videoPlayState.value = false
    }
    let morePic = function () {
      sessionStorage.setItem('i', 1)

      proxy.$router.push({ name: 'WallPaper' })
    }
    let goDownload = function (url) {
      proxy.$router.push({
        path: '/PicDownload', query: {
          url: url
        }
      })
    }
    // let vc=function () {
    //   let v= document.getElementById('v')
    //  let range = document.getElementById('range');
    //   v.currentTime= range.value
    //
    //   console.log(videoCurrentTime.value)
    //
    // }
    // let timeU=function () {
    //   let v= document.getElementById('v')
    //   videoCurrentTime.value=v.currentTime
    //   console.log(  videoCurrentTime.value)
    // }
    // let timeW=function () {
    //   let v= document.getElementById('v')
    //   videoTimeWidth.value=v.duration
    // }
    //       let fullScreen=function () {
    //         let v= document.getElementById('v')
    //         v.style.top="0px"
    //         v.style.height=document.documentElement.clientHeight+'Px'
    //         v.style.width=document.documentElement.clientWidth+'Px'
    //         v.style.objectFit="fill"
    //         console.log(v.style)
    //       }
    return { images, play, videoPlayState, pause, videoAddress, backPics, morePic, goDownload };
  }
}
</script>
<style>
.van-notify {
  font-size: 30px;
}

.van-notify {
  height: 60px;
}
</style>
<style scoped lang="less">
.root {
  background-color: #10171a;
  width: 100%;
  height: auto;
}

/*.top{*/
/*  width: 100%;*/
/*  height: 50Px;*/
/*  background-color: #404142;*/
/* .logo{*/
/*    width: 110Px;*/
/*    height: 25Px;*/
/*    position: relative;*/
/*    top: 50%;*/
/*    transform: translateY(-50%);*/
/*    margin-left: 15px;*/
/*  }*/
/*  .menuIcon{*/
/*    width: 40Px;*/
/*    height: 35Px;*/
/*    float: right;*/
/*    color: white;*/
/*    position: relative;*/
/*    top: 50%;*/
/*    transform: translateY(-50%);*/
/*    margin-right: 15px;*/
/*  }*/
/*}*/
.my-swipe .van-swipe-item {
  height: 330px;

  img {
    width: 100%;
    height: 330px;
  }
}

article {
  padding-top: 25px;
  background: url("../assets/line.png") no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    font-size: 30px;
    text-align: center;
    color: white;
  }

  h5 {
    margin-top: 15px;
    font-size: 14px;
    text-align: center;
    color: white;
  }
}

.video {
  position: relative;
  width: 94%;
  margin-left: 3%;
  height: 535px;
  background: url("../assets/videoContain.png") no-repeat;
  background-size: contain;
  background-position: center;

  .icon {
    position: absolute;
    width: 80px;
    height: 80px;
    background: url("../assets/videoPlayIcon.png") no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    left: 50%;
    top: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
  }

  video {
    z-index: 2;
    width: 94%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    object-fit: cover;
  }
}

.backImg {
  width: 96%;
  margin: 0 2%;
  margin-top: 16px;
}

.imgName {
  color: #8c8c8c;
  font-size: 28px;
}

button {
  font-size: 26px;
  width: 90%;
  height: 70px;
  margin-left: 5%;
  background: rgba(9, 61, 118, 0.3);
  border: solid 1px #40d7f7;
  color: white;
  text-align: center;
  line-height: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
