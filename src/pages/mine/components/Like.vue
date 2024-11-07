<template>
  <!-- 我喜欢区域 -->
  <view class="bottom">
    <view class="like">
    <view class="like-title">我喜欢的音乐</view>
    <view class="like-content">
      <view class="like-item">
          <view class="like-pic"></view>
          <view class="like-desc">
            <view class="like-name">音乐名称</view>
            <view class="like-artist">歌手</view>
          </view>
    </view>
    </view>
    </view>
</view>
</template>

<style lang='scss' scoped>
.bottom{
  height: calc(100vh - 528rpx);
  background-color: #f4f4f4;
}
</style>

<script setup>
import { ref } from 'vue'

</script>