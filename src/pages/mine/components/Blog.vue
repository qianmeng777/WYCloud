<template>
<view class="blog">
      <!-- 添加博客 -->
  <view class="like">
    <view class="like1">
        <view class="like-pic"><image src="../../../static/百事可乐汽水.png" alt="" /></view>
        <view class="like-content">
          <view class="like-title">添加博客和有声书</view>
        </view>
    </view>
  </view>

  <!-- 为你推荐专区 -->
   <view></view>
</view>

</template>

<style lang='scss' scoped>
.blog{
  height: calc(100vh - 528rpx);
  background-color: #f4f4f4;
  overflow: hidden;
}

.like{
  height: 120rpx;
  width: 100%;
  margin-top: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.like1{
  height: 80rpx;
  width: 90%;
  display: flex;
  align-items: center;
}

.like-pic{
  width: 80rpx;
  height: 70rpx;
  background-color: #f4f4f4;
  image{
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
// import { ref, onMounted } from 'vue'
// import { topPlaylistApi } from '../../../services/index'

// const Recommended = ref([])

// onMounted(async () => {
//   try {
//     const res = await topPlaylistApi()
//     console.log(res)
//     Recommended.value = res.data
//   } catch (error) {
//     console.error(error)
//   }
// }
// )
</script>