<template>
  <van-notice-bar left-icon="volume-o" text="网站图片皆来源于超神影业官方微博，不做任何商业行为和盈利，不损失版权方任何利益，仅限于收藏使用，个人欣赏，不注释，改编，不推广和宣传以及引流。" />
  <div class="top">
    <img class="logo" src="../assets/logo.png" />
    <img class="menuIcon" src="../assets/菜单.png" @click="showPopup" />
  </div>
  <van-popup v-model:show="show" position="right" :style="{ width: '40%', height: '100%' }">
    <!-- <van-cell-group>
      <van-cell
        @click="jump(item.name)"
        v-for="item in menuList"
        :key="item"
        :title="item.text"
        is-link
      />
    </van-cell-group> -->
    <van-sidebar v-model="act">
      <van-sidebar-item @click="jump(item.name, index)" v-for="(item, index) in menuList" :key="item"
        :title="item.text" />

    </van-sidebar>

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
    const menuList = [{ name: 'Home', text: '首页' }, { name: 'WallPaper', text: '精美壁纸' },
    { name: 'QPics', text: 'Q版雄兵连' },
    //  { name: 'xiongThree', text: '雄三在线' },
    { name: 'activePics', text: '动态壁纸' },
    { name: 'Us', text: '支持我们' }
    ]
    const show = ref(false);
    const act = ref(0)
    const showPopup = () => {
      show.value = true;
      act.value = sessionStorage.getItem('i')
      console.log(act.value)
    };
    let jump = function (name, i) {

      console.log(typeof i)
      sessionStorage.setItem('i', i)

      if (proxy.$router.currentRoute.value.name == name) {
        show.value = false;
      } else {
        show.value = false;
        proxy.$router.push({ name: name })

      }

    }
    return {
      show, showPopup, menuList, jump, act
    }
  }
}
</script>
<style lang="less">
:root {
  --sidebarW: 100%;
}


.van-sidebar {
  width: var(--sidebarW) !important;
  background-color: #EDEDED;
  height: 100%;

  .van-sidebar-item--select:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 8px;
    height: 25px;
    transform: translateY(-50%);
    content: "";
  }

  .van-sidebar-item {
    font-size: 28px !important;
    margin-bottom: 20px;
    height: 80px;
    line-height: 40px;
    background-color: #EDEDED;
  }

  .van-sidebar-item--select,
  .van-sidebar-item--select:active {
    background-color: white;
  }
}
</style>
<style  scoped lang="less">
:deep(.van-notice-bar__content) {
  font-size: 24px;
}

.top {
  width: 100%;
  height: 95px;
  background-color: #404142;

  .logo {
    width: 205px;
    height: 80px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 15px;
  }

  .menuIcon {
    width: 60px;
    height: 60px;
    float: right;
    color: white;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 15px;
  }

}
</style>
