<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="WallPaper">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #10171a;
}
:root {
  --van-popup-close-icon-size: 50px !important;
  --van-cell-font-size: 300px;
  --van-cell-line-height: 300px;
  color: #40d7f7;
}
.van-cell:first-child {
  border-top: solid 1px grey;
  margin-top: 80px;
}
.van-cell {
  --van-cell-font-size: 30px;
  --van-cell-line-height: 80px;
  --van-cell-icon-size: 30px;
  border-bottom: solid 1px grey;
  height: 100px;
}
</style>
