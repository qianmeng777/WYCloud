<template>
    <view class="login">
      <view class="pic"></view>
      <Phone v-if="loginType === 'phone'" />
      <Email v-else-if="loginType === 'email'" />
      <Qr v-else />
      <view class="change-type">
        <view
          v-for="item in typeArr"
          :key="item.type"
          class="link"
          @click="loginType = item.type"
        >
          {{ item.text }}
        </view>
      </view>
    </view>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Phone from './components/Phone.vue'
  import Email from './components/Email.vue'
  import Qr from './components/Qr.vue'
  
  const loginType = ref('phone')
  const typeArr = [
    { type: 'phone', text: '手机号登录' },
    { type: 'email', text: '邮箱登录' },
    { type: 'qr', text: '二维码登录' }
  ]
  </script>
  
  <style lang="scss" scoped>
  .login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #6A0DAD, #FFD700);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .pic {
    width: 150rpx;
    height: 150rpx;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('.././../static/wangyiyun.png');
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .change-type {
    display: flex;
    justify-content: center;
    margin-top: 300rpx;
  }
  
  .link {
    margin: 0 10px;
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  </style>