<template>
  <div class="top">
    <img class="logo" src="../assets/logo.png" />
    <img class="menuIcon" src="../assets/菜单.png" @click="showPopup" />
  </div>
  <van-popup
    v-model:show="show"
    closeable
    position="right"
    :style="{ width: '40%', height: '100%' }"
  >
    <van-cell-group>
      <van-cell
        @click="jump(item.name)"
        v-for="item in menuList"
        :key="item"
        :title="item.text"
        is-link
      />
    </van-cell-group>
  </van-popup>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from "vue-router";
export default {
  name: 'pageTop',
  setup() {

    let { proxy } = getCurrentInstance()
    console.log(proxy.$router.currentRoute.value.name)
    const menuList = [{ name: 'Home', text: '首页' }, { name: 'WallPaper', text: '精美壁纸' }, { name: 'UseHelp', text: '使用说明' }, { name: 'Us', text: '帮助我们' }]
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    let jump = function (name) {
      if (proxy.$router.currentRoute.value.name == name) {
        show.value = false;
      } else {
        proxy.$router.push({ name: name })
      }

    }
    return {
      show, showPopup, menuList, jump
    }
  }
}
</script>

<style  scoped lang="less">
.top {
  width: 100%;
  height: 50px;
  background-color: #404142;
  .logo {
    width: 110px;
    height: 25px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 15px;
  }
  .menuIcon {
    width: 40px;
    height: 35px;
    float: right;
    color: white;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 15px;
  }
}
</style>
