<template>
  <div class="root">
    <page-top></page-top>

    <img class="title_img" src="../assets/wallPicBackGround.png">
    <img class="pic" :src="picAddress" @click="preView">

    <a id="bottom-1" class="downLoadBtn" :href="picAddress + '?response-content-type=application/octet-stream'"
      download>

      壁纸下载</a>


  </div>
</template>

<script>
import pageTop from '../components/pageTop'
import { ImagePreview } from 'vant';
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
export default {
  name: 'PicDownload',
  components: {
    pageTop
  },
  setup() {
    let route = useRoute();
    onMounted(() => {
      picAddress.value = route.query.url
    })
    let picAddress = ref('')

    let fileList = ref([])
    let preView = function () {
      ImagePreview([
        route.query.url
      ]);

    }




    return {
      fileList, picAddress, preView
    }
  }
}
</script>

<style scoped lang="less">
.root {
  background-color: #10171A;
  width: 100%;
  height: auto;
  background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/16822a8c-4b1b-4490-bcc1-bbdd744d5fa2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;

  .title_img {
    margin-top: 10px;
    width: 150px;
    height: 70px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .pic {
    width: 90%;
    height: auto;
    margin-top: 20px;
    margin-left: 5%;
  }
}

.downLoadBtn {
  display: inline-block;
  text-align: center;
  margin-top: 10Px;
  margin-left: 5%;
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
