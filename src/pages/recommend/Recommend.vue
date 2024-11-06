<template>
    <view class="top">
      <view class="menu"></view>
      <input type="text" placeholder="搜索喜欢的音乐">
      <view class="voice"></view>
    </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { getBannerApi } from '../../services/index'

  const title = ref('Hello')

  getBannerApi().then(res => console.log(res)).catch(error => console.error(error))

</script>

<style lang="scss" scoped>
.top{
  // background: #ff0000;
  color: white;
  display: flex;
  height: 70rpx;
  // justify-content: center;
  align-items: center;
 
}
.menu{
  width: 50rpx;
  height: 50rpx;
  // background: #712d2d;
  background: url(../../static/汉堡.png) no-repeat  center ;
  background-size: 40rpx;
  margin-left: 20rpx;
}
.voice{
  width: 50rpx;
  height: 50rpx;
  // background: #ccc;
  background: url(../../static/可乐.png) no-repeat center;
  background-size: 40rpx;
  
}
input{
  background: #ccc;
  width: 75%;
  height: 50rpx;
  border-radius: 20rpx;
  margin-left: 20rpx;
  // padding-left: 20rpx;
  box-sizing: border-box;
  padding: 10rpx 20rpx;
}

</style>