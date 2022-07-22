<template>
  <div class="root" v-infinite-scroll="addShowPic" :infinite-scroll-disabled="noMorePic" infinite-scroll-distance="200">
    <pageTop></pageTop>
    <img class="title_img" src="../assets/wallPicBackGround.png">
    <div v-for="item in showPic" :key="item" class="itemContain">
      <img class="backImg" :src="item.url" @click="goDownload(item.url)">
      <center class="imgName">{{ item.name }}</center>
    </div>
    <button v-show="!noMorePic" @click="addShowPic">更多无水印壁纸</button>
    <button style="color: orange" v-show="noMorePic">无更多壁纸了！</button>
  </div>
</template>

<script>
import { examplePics, allPics, shootreq } from '../../http/http'
import pageTop from '../components/pageTop'
import { onMounted, ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'WallPaper',
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

    showPic.value = allPics.slice(0, showPicNum.value);
    let addShowPic = function () {
      showPicNum.value += 5
      if (allPics[showPicNum.value - 1] != undefined) {
        showPic.value = allPics.slice(0, showPicNum.value);
      } else {
        showPic.value = allPics
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
    return { allPics, showPic, showPicNum, addShowPic, noMorePic, goDownload }
  }
}
</script>

<style scoped lang="less">
.root {

  width: 100%;
  height: auto;

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
