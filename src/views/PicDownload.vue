<template>
  <div class="root">
    <page-top></page-top>

    <img class="title_img" src="../assets/wallPicBackGround.png" />
    <img class="pic" :src="picAddress" @click="preView" />

    <a id="bottom-1" class="downLoadBtn" @click="down"> 壁纸下载</a>
  </div>
</template>

<script>
import exportFile from "@/utils/downFiles";
import pageTop from "../components/pageTop";
import { ImagePreview } from "vant";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
export default {
  name: "PicDownload",
  components: {
    pageTop,
  },
  setup() {
    let route = useRoute();
    onMounted(() => {
      const data = JSON.parse(route.query.data);
      console.log(data);
      picAddress.value = data.url;
    });
    let picAddress = ref("");

    let fileList = ref([]);
    let preView = function () {
      const data = JSON.parse(route.query.data);
      ImagePreview([JSON.parse(data.url)]);
    };
    const down = function () {
      const data = JSON.parse(route.query.data);

      exportFile.getImgURLs(picAddress.value, data.name);
    };
    return {
      fileList,
      picAddress,
      preView,
      down,
    };
  },
};
</script>

<style scoped lang="less">
.root {
  background-color: #10171a;
  width: 100%;
  height: auto;
  background-image: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/16822a8c-4b1b-4490-bcc1-bbdd744d5fa2.jpg");
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
  margin-top: 10px;
  margin-left: 5%;
  width: 45%;
  height: 80px;
  color: #40d7f7;
  border: #01e7ff solid 1px;
  line-height: 80px;
  font-size: 30px;
  margin-bottom: 10px;
}

.downLoadBtn::before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 28px;
  background: url("../assets/download.png") no-repeat;
  background-size: 30px 28px;
  background-position: center;
  position: relative;
  top: 4px;
  margin-right: 10px;
}
</style>
