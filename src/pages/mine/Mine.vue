<template>
  <!-- 头部区域 -->
  <view class="header" :style="{ backgroundImage: `url(${userStore.profile.backgroundUrl})` }">
    <image v-if="userStore.profile && userStore.profile.avatarUrl" :src="userStore.profile.avatarUrl" class="avatar" />
    <navigator v-if="!userStore.profile" url="/pages/login/login" class="login">立即登录 ></navigator>
    <view v-else class="username">{{ userStore.profile.nickname || '用户名' }}</view> <!-- 显示用户名 -->
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


<!-- 定位区 -->
<view class="cbl"></view>
<navigator url="/pages/input/Input" class="ser"></navigator>
<view class="more"></view>


</template>

<script setup>
 import { ref, onMounted } from 'vue'
  import Like from './components/Like.vue'
  import Blog from './components/Blog.vue'
  import DynamicState from './components/DynamicState.vue'
  import { useUserStore } from '../../stores/user' // 引入 Pinia store

  const curIndex = ref(0)
  const tabs = ['音乐', '博客', '动态']


  // 获取 Pinia store
  const userStore = useUserStore()


  onMounted(async () => {
  await userStore.getAccount();  // 获取用户信息
});


</script>

<style lang="scss" scoped>

.header{
    height: 600rpx;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.avatar{
  position: relative;
  top: 10%;
  left: 40%;
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/草莓.png');
}

.desc{
  height: 50rpx;
  width: 100%;
  margin-top: 200rpx;
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

.username{
  position: relative;
  top: 15%;
  left: 35%;
  width: 100%;
  height: 50rpx;
  font-size: 35rpx;
  font-weight: 900;
  background: linear-gradient(to right, red, violet, yellow, green, blue, indigo);
  -webkit-background-clip: text;
  color: transparent;
}


.cbl{
  position: fixed;
  top: 0;
  margin-top: 40rpx;
  left: 0;
  margin-left: 40rpx;
  width: 60rpx;
  height: 60rpx;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/卡通牛.png');
}

.ser{
  position: fixed;
  top: 0;
  margin-top: 40rpx;
  right: 0;
  margin-right: 90rpx;
  width: 45rpx;
  height: 45rpx;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/搜索-copy.png');
}


.more{
  position: fixed;
  top: 0;
  margin-top: 40rpx;
  right: 0;
  margin-right: 20rpx;
  width: 45rpx;
  height: 45rpx;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/更多.png');
}

</style>