<template>
  <div
    class="root"
    v-infinite-scroll="addShowPic"
    :infinite-scroll-disabled="noMorePic"
    infinite-scroll-distance="200"
  >
    <pageTop></pageTop>
    <van-dropdown-menu >
      <van-icon name="search" />
      <van-dropdown-item v-model="value1" :options="option1" @change="change"/>
</van-dropdown-menu>
    <img class="title_img" src="../assets/wallPicBackGround.png" />
    <div v-for="item in showPic" :key="item" class="itemContain">
      <img class="backImg" :src="item.url" @click="goDownload(item)" />
      <center class="imgName">{{ item.name }}</center>
    </div>
    <button v-show="!noMorePic" @click="addShowPic">更多无水印壁纸</button>
    <button style="color: orange" v-show="noMorePic">无更多壁纸了！</button>
  </div>
</template>

<script>
import { examplePics, allPics, shootreq } from "../../http/http";
import pageTop from "../components/pageTop";
import { onMounted, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { DropdownMenu, DropdownItem } from 'vant';
export default {
  name: "WallPaper",
  components: {
    pageTop,
  },
  setup() {
    console.log(allPics);
    const value1 = ref('默认排序');

    const option1 = [
      { text: '默认排序', value: '默认排序' },
      { text: '彦', value: '彦' },
      { text: '阿追', value: '阿追' },
      { text: '鹤熙', value: '鹤熙' },
      { text: '凯莎', value: '凯莎' },
      { text: '凉冰', value: '凉冰' },
      { text: '琪琳', value: '琪琳' },
      { text: '炙心', value: '炙心' },
      { text: '阿狸', value: '阿狸' },
      { text: '蕾娜', value: '蕾娜' },
      { text: '怜风', value: '怜风' },
      { text: '群像', value: '群像' },
    ];
    let show = ref(true);
    const wid = ref({ imgHei: 0 });
    wid.value.imgHei = document.documentElement.clientWidth * 0.8 + "px";
    console.log(wid.value.imgHei);
    let { proxy } = getCurrentInstance();
    onMounted(() => {
      document.documentElement.scrollTo(0, 0);
      const top = document.documentElement.scrollTop || document.body.scrollTop;
    });
    let showPic = ref([]);
    let showPicNum = ref(5);
    let noMorePic = ref(false);
    let newPic=ref([])
    showPic.value = allPics.slice(0, showPicNum.value);
    let addShowPic = function () {

      showPicNum.value += 5;
      if (value1.value==='默认排序') {
        if (allPics[showPicNum.value - 1] != undefined) {
        showPic.value = allPics.slice(0, showPicNum.value);
      } else {
        showPic.value = allPics;
        noMorePic.value = true;
      }
      }else{
        if (newPic.value[showPicNum.value - 1] != undefined) {
        showPic.value = newPic.value.slice(0, showPicNum.value);
      } else {
        showPic.value = newPic.value;
        noMorePic.value = true;
      }
      }

    };
    let goDownload = function (data) {
      console.log(data);
      proxy.$router.push({
        path: "/PicDownload",
        query: {
          data: JSON.stringify(data),
        },
      });
    };
    let  change= function (data) {
if (data!=='默认排序') {
  newPic.value=[]
  allPics.forEach((item)=>{
if(item.name.indexOf(data) !==-1){
newPic.value.push(item)
}
})
showPic.value =newPic.value.slice(0, showPicNum.value);

}else{
  location.reload()
}

console.log(newPic.value);
    }
    return {
      newPic,
      value1,
      option1,
      show,
      allPics,
      showPic,
      showPicNum,
      addShowPic,
      noMorePic,
      goDownload,
      wid,
      change
    };
  },
};
</script>

<style scoped lang="less">
:deep(.van-cell:first-child){
  margin-top:0;
}
.van-dropdown-menu{
width: auto;
position: absolute;
top: 65px;
right: 120px;
z-index: 99;
text-align: center;
line-height: 50px;
color: white;
}
:deep(.van-dropdown-menu__bar){
  background: none;
  color: red !important;
  position: absolute;
  z-index: 999;
  width: 50px;
height: 65px;
}
:deep(.van-ellipsis){
  color: red !important;
  font-size: 0px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
:deep(.van-dropdown-menu__title):after{
  content:"";
  border:none
}
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
    height: v-bind("wid.imgHei");
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
  background: rgba(9, 61, 118, 0.3);
  border: solid 1px #40d7f7;
  color: white;
  text-align: center;
  line-height: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.van-icon-search{
  font-size: 50px;
}
</style>
