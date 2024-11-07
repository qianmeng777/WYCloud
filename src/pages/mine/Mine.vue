<template>
  <!-- 头部区域 -->
  <view class="header">
    <view class="avatar"></view>
    <view class="login">立即登录 ></view>
    <view class="desc">
    <view class="center">
      <view class="p">关注</view>
      <view class="p">粉丝</view>
      <view class="p">等级</view>
      <view class="p">听歌</view>
    </view>
    </view>
  </view>


<view class="tab">
  <view class="center1"  v-for="(item, index) in tabs" @click="curIndex=index" :class="{ 'active': curIndex===index }">
{{ item }}
  </view>
</view>
<view>
  <Like v-if="curIndex===0" />
  <Blog v-if="curIndex===1" />
  <DynamicState v-if="curIndex===2" />
</view>

</template>

<script setup>

  import { ref } from 'vue'
  import Like from './components/Like.vue'
  import Blog from './components/Blog.vue'
  import DynamicState from './components/DynamicState.vue'
  const curIndex = ref(0)

  const tabs = ['音乐', '博客', '动态']
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
  position: relative;
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
  margin-top: 100rpx;
}

.center{
  height: 50rpx;
  width: 600rpx;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40rpx;
  .p{
    margin: 0 40rpx;
    font-size: 28rpx;
    font-weight: 900;
    background: linear-gradient(to right, #00B4D8, #006B8E); /* 渐变背景 */
    -webkit-background-clip: text;  /* 需要前缀 */
    background-clip: text;  /* 标准属性 */
    color: transparent; /* 使文字颜色透明 */
  }
}


.center1{
  height: 50rpx;
  width: 600rpx;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40rpx;
  margin: 0 40rpx;
  font-size: 28rpx;
  font-weight: 900;
  background: linear-gradient(to right, #00B4D8, #006B8E); /* 渐变背景 */
  -webkit-background-clip: text;  /* 需要前缀 */
  background-clip: text;  /* 标准属性 */
  color: transparent; /* 使文字颜色透明 */
}



.tab{
  height: 100rpx;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 30rpx 30rpx 0 0;
  p{
    margin: 0 60rpx;
    font-size: 32rpx;
    font-weight: 900;
}
}


.login {
  position: relative;
  top: 15%;
  left: 42%;
  width: 150rpx;
  height: 50rpx;
  font-size: 28rpx;
  font-weight: 900;
  color: white;
}




</style>