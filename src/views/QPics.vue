<template>
  <div class="fb">
    <pageTop></pageTop>
    <center>
      <article>
        <img
          style="width: 110px; height: 35px; margin-top: 5px"
          src="../../img/QpicLogo.png"
        />
      </article>
    </center>
    <div class="allQcontain">
      <div v-for="item in QPics" :key="item" class="itemContain">
        <img class="backImg" v-lazy="item.url" @click="goDownload(item.url)" />
        <center class="imgName">{{ item.name }}</center>
      </div>
    </div>
  </div>
</template>

<script>
import { QPics } from "../../http/http";
import { getCurrentInstance } from "vue";
import pageTop from "../components/pageTop.vue";
export default {
  name: "QPics",
  components: {
    pageTop,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    let goDownload = function (url) {
      proxy.$router.push({
        path: "/PicDownload",
        query: {
          url: url,
        },
      });
    };
    return {
      goDownload,
      QPics,
    };
  },
};
</script>

<style  scoped lang="less">
.allQcontain {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;

  .itemContain {
    margin-bottom: 20px;
    // background-color: #01e7ff;
    display: inline-block;
    // width: 260px;

    .backImg {
      width: 300px;
      margin-left: 3%;
      height: 300px;
      object-fit: cover;
      object-position: 50% 35%;
      border: 1px solid #01e7ff;
    }

    .imgName {
      color: white;
      font-size: 28px;
    }
  }
}
</style>
