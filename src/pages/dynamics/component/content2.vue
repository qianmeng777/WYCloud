<script setup>
import { ref, onMounted } from 'vue'
import { getrecommend } from '../../../services/index'

const recommend = ref([])

async () => {
  try {
    const res = await getrecommend()
    console.log(res.data.data)
    recommend.value = res.data.data
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
<view class="content">
    <view class="item" v-for="(item, index) in recommend" :key="index">
        <view class="item-img">
        <image :src="item.al.picUrl" mode="aspectFill" />
        </view>
        <view class="item-info">
        <view class="item-title">{{ item.name }}</view>
        </view>
    </view>
</view>
</template>

<style scoped lang='scss'>

</style>