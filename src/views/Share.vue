<template>
  <div class="root">
    <pageTop></pageTop>
    <article>
      <h2>网友投稿</h2>
      <h5>SHARE</h5>
    </article>
    <div v-for="item in showPic" :key="item" class="itemContain">
      <img class="backImg" :src="item.url" @click="goDownload(item.url)">
      <center class="imgName">{{ item.name }}</center>
    </div>
    <button v-show="!noMorePic" @click="addShowPic">更多无水印壁纸</button>
    <button style="color: orange" v-show="noMorePic">无更多壁纸了！</button>  </div>
</template>

<script>
import pageTop from '../components/pageTop'
import { sharePics } from '../../http/http'

import { onMounted, ref, getCurrentInstance } from 'vue'
export default {
  name: 'Share',
  components: {
    pageTop
  },
  setup() {
    let { proxy } = getCurrentInstance()
    onMounted(() => {
      document.documentElement.scrollTo(0, 0);
      const top = document.documentElement.scrollTop || document.body.scrollTop;
    })
    let showPic = ref([])
    let showPicNum = ref(5)
    let noMorePic = ref(false)
    if (sharePics.length > 5) {
      showPic.value = sharePics.slice(0, showPicNum.value);
    } else {
      showPic.value = sharePics
    }
    let addShowPic = function () {
      showPicNum.value += 5
      if (sharePics[showPicNum.value - 1] != undefined) {
        showPic.value = sharePics.slice(0, showPicNum.value);
      } else {
        showPic.value = sharePics
        noMorePic.value = true
      }
    }
    let goDownload = function (url) {
      proxy.$router.push({
        path: '/PicDownload', query: {
          url: url
        }
      })
    }
    return { sharePics, showPic, showPicNum, addShowPic, noMorePic, goDownload }
  }
}
</script>

<style scoped lang="less">
.root {
  background-color: #10171a;
  width: 100%;
  height: auto;
}

article {
  margin-bottom: 20px;
}

h2 {
  font-size: 35px;
  text-align: center;
  color: white;
}

h5 {
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
  color: white;
}

.title_img {
  margin-top: 10px;
  width: 150px;
  height: 70px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}



.itemContain {
  margin-bottom: 20px;

  .backImg {
    width: 94%;
    margin-left: 3%;
    height: 328Px;
    object-fit: cover;
    object-position: 50% 15%;
    border: 1px solid #01e7ff;
  }




  .imgName {
    color: white;
    font-size: 28px;
  }
}



button {
  font-size: 26px;
  width: 90%;
  height: 70px;
  margin-left: 5%;
  background: rgba(9, 61, 118, .3);
  border: solid 1px #40D7F7;
  color: white;
  text-align: center;
  line-height: 70px;
  margin-top: 10Px;
  margin-bottom: 10px;
}
</style>
