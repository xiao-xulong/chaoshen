<template>
  <pageTop></pageTop>
  <div class="root">
    <article>
      <h2>使用帮助</h2>
      <h5>USE HELP</h5>
    </article>
    <center>
      <span>1.点击下载按钮下载文件</span>
      <img src="../assets/9507E77B9F93B39095CEED95E9656F78.jpg" />
      <span>2.下载完成后在浏览器下载中或提示栏中找到该文件</span>
      <img src="../assets/5455841178C7000EA0F7349B4E3B5D60.jpg" />
      <span>3.用手机相册打开即可设置为壁纸或其他操作</span>
      <img src="../assets/535DDCF13A3C5CFC6432A70E99724C6F.jpg" />
    </center>
  </div>
</template>

<script>
import pageTop from '../components/pageTop'

export default {
  name: 'UseHelp',
  components: {
    pageTop
  },
  setup() {

  }
}
</script>

<style scoped>
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
img {
  width: 90%;
  margin-left: 5%;
  margin-bottom: 100px;
}
span {
  display: block;
  font-size: 28px;
  color: white;
}
</style>
