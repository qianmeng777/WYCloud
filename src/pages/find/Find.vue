<template>
  <view class="tabs">
    <view class="tab-list">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </view>
    <view class="tab-content">
      <navigator :is="currentTabComponent" />
    </view>
  </view>

  <view class="con">
    <swiper class="swiper" autoplay interval="3000" duration="500">
      <swiper-item v-for="item in banners" :key="item.targetId" @click="goDetail(item)">
        <image class="img" :src="item.imageUrl" mode="widthFix"/>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getBannerApi, getPageApi } from '../../services/index'

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

const tabs = ['音乐', '博客', '听书', '直播']
const currentTab = ref('音乐');

const currentTabComponent = computed(() => {
  switch (currentTab.value) {
    case '音乐':
      return 'MusicComponent'
    case '博客':
      return 'BlogComponent'
    case '听书':
      return 'AudiobookComponent'
    case '直播':
      return 'LiveComponent'
    default:
      return 'MusicComponent'
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

  .tabs {
  display: flex;
  flex-direction: column;
}

.tab-list {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.tab-list button {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}

.tab-list button.active {
  border-bottom: 2px solid blue;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>