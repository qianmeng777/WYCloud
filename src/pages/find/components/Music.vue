<script setup>
  import { ref, onMounted } from 'vue'
  import { getBannerApi, getPageApi } from '../../../services/index'

  const banners = ref([])

  onMounted(async () => {
  try {
    const res = await getBannerApi()
    console.log(res)
    banners.value = res.data.banners
  } catch (error) {
    console.error(error)
  }
  try {
    const res = await getPageApi()
    console.log(res)
    // banners.value = res.data.banners
  } catch (error) {
    console.error(error)
  }
})

  const goDetail = (item) => {
    console.log('goDetail')
  }
</script>

<template>
  <view>音乐</view>

  <view class="con">
    <swiper class="swiper" autoplay interval="3000" duration="500">
      <swiper-item v-for="item in banners" :key="item.targetId">
        <image class="img" :src="item.imageUrl" mode="widthFix" @click="goDetail(item)"/>
      </swiper-item>
    </swiper>
  </view>
</template>

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
