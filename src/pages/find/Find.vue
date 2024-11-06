<template>
  <view>发现</view>
  <view class="con">
    <swiper class="swiper" autoplay interval="3000" duration="500">
      <swiper-item v-for="item in banners" :key="item.targetId" @click="goDetail(item)">
        <image class="img" :src="item.imageUrl" mode="widthFix"/>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBannerApi } from '../../services/index'

const banners = ref([])

onMounted(async () => {
  try {
    const res = await getBannerApi()
    console.log(res)
    banners.value = res.data.banners
  } catch (error) {
    console.error(error)
  }
})
</script>

<style lang="scss" scoped>
  .con{
    width: 100%;
  }
  .swiper{
    height: 276rpx;
  }
  .img{
    width: 100%;
  }
</style>