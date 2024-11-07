<template>
  <view class="header">
    <view class="avatar"></view>
    <view class="desc">
    <view class="center">
      <p>关注</p>
      <p>粉丝</p>
      <p>等级</p>
      <p>听歌</p>
    </view>
    </view>
  </view>

</template>

<script setup>
  import { ref } from 'vue'
  
</script>

<style lang="scss" scoped>

.header{
    height: 400rpx;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('./pic/15419466901131584.png');
}

.avatar{
  position: fixed;
  top: 10%;
  left: 40%;
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  background-color: #f4f4f4;
}

.desc{
  height: 50rpx;
  width: 100%;
  margin-top: 280rpx;
}

.center{
  height: 50rpx;
  width: 600rpx;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40rpx;
  p{
    margin: 0 40rpx;
    color: #cfc4c4;
    font-size: 28rpx;
  }
}

</style>