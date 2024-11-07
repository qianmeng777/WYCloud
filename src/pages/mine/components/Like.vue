<template>
  <!-- 我喜欢区域 -->
  <view class="bottom">
    <view class="like">
      <view class="like1">
          <view class="like-pic"><img src="https://p1.music.126.net/9-rm4PUkKuL-lD1Rgg6SDw==/109951165434984508.jpg" alt=""></view>
          <view class="like-content">
            <view class="like-title">我喜欢的音乐</view>
            <view class="like-desc"><span>0首</span>~<span>0次播放</span></view>
          </view>
      </view>
    </view>
</view>
</template>

<style lang='scss' scoped>
.bottom{
  height: calc(100vh - 528rpx);
  background-color: #f4f4f4;
  overflow: hidden;
}
.like{
  height: 120rpx;
  width: 100%;
  border-top: 1px solid #dcdcdc; 
  border-bottom: 1px solid #dcdcdc; 
  margin-top: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.like1{
  height: 80rpx;
  width: 90%;
  display: flex;           /* 使用 Flexbox */
  align-items: center;     /* 垂直居中对齐 */
}

.like-pic{
  width: 80rpx;
  height: 80rpx;
  background-color: #f4f4f4;
  img{
    width: 100%;
    height: 100%;
  }
}

.like-title{
  flex: 1;
  font-size: 30rpx;
  padding-left: 30rpx;
  padding-top: 5rpx;
  color: #000;
}

.like-desc{
  flex: 1;
  font-size: 25rpx;
  padding-left: 30rpx;
  padding-top: 5rpx;
  color: #999999;
}
</style>

<script setup>
import { ref } from 'vue'

</script>