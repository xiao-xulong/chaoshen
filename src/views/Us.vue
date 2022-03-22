<template>
  <pageTop></pageTop>
  <div class="root">
    <article>
      <h2>帮助我们</h2>
      <h5>HELP US</h5>
    </article>
    <center>本应用由超神粉丝自行研发，仅供粉丝们下载壁纸之用，不盈利，不引流，不接受广告，会不定期更新官方壁纸的无水印版本,如果该网站对您有帮助的话，请赞助我们以示鼓励，您的每一份支持都将成为我们的动力</center>
    <center>
      <img style="width: 80vw;" src="../assets/QQpay.png" />
    </center>
  </div>
</template>

<script>
import pageTop from '../components/pageTop'

export default {
  name: 'Us',
  components: {
    pageTop
  },

}
</script>

<style scoped>
.root {
  background-color: #10171a;
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 20px;
  text-align: center;
  color: white;
}
h5 {
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
  color: white;
}
center {
  margin-top: 20px;
  font-size: 28px;
  color: white;
}
</style>
