<template>
<view class="dyst">
<view class="mylike"><image src="../../../static/音乐.png" />分享你喜欢的音乐吧</view>
<view class="go">去分享</view>
</view>
</template>

<style lang='scss' scoped>

.dyst{
    height: calc(100vh - 528rpx);
    background-color: #f4f4f4;
    overflow: hidden;
}

.mylike{
   width: 100%;
   height: 80rpx;
   background-color: #f4f4f4;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 32rpx;
   font-weight: 900;
   margin-top: 40rpx;
   image{
     width: 40rpx;
     height: 40rpx;
   }
}

.go{
   width: 150rpx;
   height: 60rpx;
   text-align: center;
   line-height: 60rpx;
   color: white;
   margin: 0 auto;
   margin-top: 40rpx;
   background-color: #00B4D8;
   font-size: 32rpx;
   font-weight: 900;
   border-radius: 20px;
}
</style>

<script setup>

</script>