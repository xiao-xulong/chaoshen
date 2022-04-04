<template>
  <pageTop></pageTop>
  <div class="root">
    <article>
      <h2 @click="c">关于我们</h2>
      <h5>ABOUT US</h5>
    </article>
    <center>该网站属于为个人学习、研究成果，因简历需要所以发布到网上，图片来源于虚拟印象动画工作室官博已发布的图片https://weibo.com/u/2532310695?tabtype=feed&layerid=4511021468080958</center>
  </div>
</template>

<script setup>
import pageTop from '../components/pageTop';
import { ref, reactive } from "vue";
const backC = reactive({ co: "red" })
const c = function () {
  backC.co = 'white'
};
</script>

<style scoped>
.root {
  background-color: #10171a;
  width: 100%;
  height: 100%;
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
</style>
