<template>
  <pageTop></pageTop>
  <div class="root">
    <article>
      <h2 class="tit" style="" @click="c">支持我们</h2>
      <p class="thank">1元不嫌少，100不嫌多！感谢支持！</p>
      <p class="thank">所有费用皆用于网站运营</p>
    </article>
    <section>
      <div class="pay">

        <img class="payImg" @click="fullView(vxImg)" :src="vxImg">
        <img class="payImg" @click="fullView(zfbImg)" :src="zfbImg">
        <span class="payImgText">微信打赏</span>
        <span class="payImgText">支付宝赞助</span>
      </div>
    </section>
    <div class="vip">
      <div class="vipTitle">
        赞助名单列表

      </div>
      <div class="vipHead">
        <span>腾讯QQ</span>
        <span>QQ网名</span>
        <span>赞助金额</span>
      </div>
      <div :class="[index == 0 ? 'first' : (index == 1 ? 'sec' : (index == 2 ? 'third' : '')), 'vipInfo']"
        v-for="(item, index) in vips" :key="item.qq">

        <span>{{ item.qq }}</span>
        <span>
          <!-- 金牌 -->
          <svg t="1653902095619" v-if="index == 0" class="icon" viewBox="0 0 1024 1024" version="1.1">
            <path d="M337.175 0H162.375l249.8 449.6h174.8L337.175 0z" fill="#E64A19" p-id="1423"></path>
            <path d="M686.875 0L437.075 449.6H611.875L861.675 0H686.875z" fill="#FF754C" p-id="1424"></path>
            <path d="M586.975 449.6l-1.7-3.3-1.7 3.3h3.4zM482.775 260.7l-86 160.4 27.9 54.4 87-160.6-28.9-54.2z"
              fill="#C93D18" p-id="1425"></path>
            <path d="M511.975 724.3m-299.7 0a299.7 299.7 0 1 0 599.4 0 299.7 299.7 0 1 0-599.4 0Z" fill="#FFBA57"
              p-id="1426"></path>
            <path
              d="M511.975 974c-137.9 0-249.8-111.8-249.8-249.8s111.8-249.8 249.8-249.8 249.8 111.8 249.8 249.8c-0.2 138-111.9 249.7-249.8 249.8z m-74.9-174.8v50h149.9v-50h-50V649.4h50v-50H437.075v50h50v149.9h-50z"
              fill="#FFE082" p-id="1427"></path>
          </svg>
          <!-- 银牌 -->
          <svg t="1653902269084" v-if="index == 1" class="icon" viewBox="0 0 1024 1024" version="1.1">
            <path d="M337.2 0H162.3l249.8 449.6h174.8L337.2 0z" fill="#E64A19" p-id="1587"></path>
            <path d="M686.8 0L437.1 449.6h174.8L861.7 0H686.8z" fill="#FF754C" p-id="1588"></path>
            <path d="M586.9 449.6l-1.7-3.3-1.7 3.3h3.4zM482.7 260.7l-86 160.4 27.9 54.4 87-160.6-28.9-54.2z"
              fill="#C93D18" p-id="1589"></path>
            <path d="M512 724.3m-299.7 0a299.7 299.7 0 1 0 599.4 0 299.7 299.7 0 1 0-599.4 0Z" fill="#9FA8DA"
              p-id="1590"></path>
            <path d="M487 649.4h50v149.9h-50z" fill="#C5CAE9" p-id="1591"></path>
            <path
              d="M512 974c-137.9 0-249.8-111.8-249.8-249.8S374.1 474.5 512 474.5s249.8 111.8 249.8 249.8C761.6 862.2 649.9 973.9 512 974zM387.1 799.2v50h249.8v-50h-50V649.4h50v-50H387.1v50h50v149.9h-50z"
              fill="#C5CAE9" p-id="1592"></path>
          </svg>
          <!-- 铜牌 -->
          <svg t="1653902305350" v-if="index == 2" class="icon" viewBox="0 0 1024 1024" version="1.1">
            <path d="M337.2 0H162.3l249.8 449.6h174.8L337.2 0z" fill="#E64A19" p-id="1752"></path>
            <path d="M686.8 0L437.1 449.6h174.8L861.7 0H686.8z" fill="#FF754C" p-id="1753"></path>
            <path d="M586.9 449.6l-1.7-3.3-1.7 3.3h3.4zM482.7 260.7l-86 160.4 27.9 54.4 87-160.6-28.9-54.2z"
              fill="#C93D18" p-id="1754"></path>
            <path d="M512 724.3m-299.7 0a299.7 299.7 0 1 0 599.4 0 299.7 299.7 0 1 0-599.4 0Z" fill="#AF8A77"
              p-id="1755"></path>
            <path
              d="M512 974c-137.9 0-249.8-111.8-249.8-249.8S374.1 474.5 512 474.5s249.8 111.8 249.8 249.8C761.6 862.2 649.9 973.9 512 974zM337.2 799.2v50h349.7v-50h-50V649.4h50v-50H337.2v50h50v149.9h-50z"
              fill="#CEB1A1" p-id="1756"></path>
            <path d="M537 649.4h50v149.9h-50zM437.1 649.4h50v149.9h-50z" fill="#CEB1A1" p-id="1757"></path>
          </svg>

          {{ item.name }}
        </span>
        <span>&emsp;&emsp;赞助{{ item.money }}元 </span>
      </div>
    </div>
  </div>

</template>

<script setup>
import pageTop from '../components/pageTop';
import { ref, reactive } from "vue";
import { ImagePreview } from 'vant';
const vxImg = ref('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/31230ac8-ad14-4403-a698-fce394bc4da5.jpg')
const zfbImg = ref('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-bdbeaf13-95b3-48c4-a13b-687691a23e5f/cc7446b0-e0d1-48f2-b6fa-219d0f7da47a.jpg')
const vips = ref([{ qq: '2592526921', name: '青争', money: '50' }, { qq: '430841254', name: '北宸', money: '20' }, { qq: '1834727719', name: '茶杯', money: '15' },
{ qq: '3065699812', name: '四月的阵雨孕育五月的芳香', money: '10' },
{ qq: '450008868', name: '求求你不要在秀啦', money: '3' },
{ qq: '2806266318', name: '无尽', money: '5' }, { qq: '3069636940', name: '•᷄ᯅ•᷅', money: '5' },
{ qq: '1330167188', name: '离离原上草', money: '10' }, { qq: '2641164263', name: '🤔🤔🤔', money: '10' }
  , { qq: '459098757', name: '眉间雪', money: '10' }, { qq: '2334385343', name: 'Stronger', money: '3' },
{ qq: '2563727567', name: '╰ァ 真爱必将永恒 ℡', money: '10' }, { qq: '807324278', name: '雄灬雷霆万钧', money: '10' },
{ qq: '2292443696', name: '尘缘如幻梦', money: '5' }, { qq: '1843948100', name: '謎語', money: '10' }, { qq: '1732253807', name: '天逸', money: '3' },

])
const backC = reactive({ co: "red" })
const c = function () {
  backC.co = 'white'
};
const fullView = function (url) {
  ImagePreview([url]);
}
</script>

<style scoped lang="less">
@import '../assets/fonts/f.css';

article {
  border-bottom: solid 1px rgb(170, 170, 250);
  margin-bottom: 10px;
}

.tit {
  font-family: fz;
  color: #337FE5;
  font-size: 60px;
  letter-spacing: 10px;
}

.thank {
  text-align: center;
  font-family: fz;
  color: rgb(102, 99, 99);
  font-size: 30px;
}

.root {
  background-color: rgb(245, 240, 240);
  width: 100%;
}

h2 {
  font-size: 35px;
  text-align: center;
  color: v-bind("backC.co");
}

h5 {
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
  color: white;
}

center {
  margin-top: 20px;
  font-size: 28px;
  color: white;
}

.pay {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
}

.payImg {
  width: 330px;

}

.payImgText {
  display: inline-block;
  width: 330px;
  background-color: white;
  text-align: center;
  font-family: fz;
  letter-spacing: 5px;
  font-size: 22px;

}

.vip {
  margin-top: 30px;
}

.vipTitle {
  background: url(../assets/record_Bg.png) no-repeat;
  background-size: contain;
  height: 100px;
  line-height: 103px;
  text-align: center;
  color: white;
  font-family: fz;
  letter-spacing: 5px;
  font-size: 28px;
  font-weight: bolder;
  background-position: center center;
  margin-bottom: 20px;
}

.vipHead {
  font-family: fz;
  padding-bottom: 5px;
  font-size: 28px;
  font-weight: 600;
  color: #1B96EE;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1B96EE;
  padding: 0 30px;
}

.vipInfo {
  font-family: fz;
  height: 50px;
  line-height: 50px;
  font-size: 26px;
  color: #818689;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #818689;
  padding: 0 30px;
}

.first {
  color: rgb(255, 217, 4);
  font-weight: bolder;
}

.sec {
  color: #c0c0c0;
}

.third {
  color: #B87333;
}

.prize {
  font-weight: normal;
  font-size: 30px;
  font-family: '' !important;
}

.icon {
  width: 40px;
  vertical-align: middle;
}
</style>
