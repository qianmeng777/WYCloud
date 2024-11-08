<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { playlistDetailApi } from '../../../services/index'

  const playlistDetail = ref({})
  const id = ref('')
  const showText = ref(false)

  onMounted(async () => {
    try {
      const res = await playlistDetailApi(id.value)
      console.log(res)
      playlistDetail.value = res.data
    } catch (error) {
        console.error(error)
      }
  })

  onLoad((Option) => {
    // console.log(Option)
    id.value = Option.id
  })

  const dateStr = computed(() => {
    if (!playlistDetail?.value?.playlist?.trackUpdateTime) return ''
    const date = new Date(playlistDetail?.value?.playlist?.trackUpdateTime)
    const day = date.getDate()
    const month = date.getMonth() + 1
    return `${month}月${day}日`
  })

  const handleNum = (num) => {
    return (num / 10000).toFixed(1)
  }


</script>

<template>
  <view class="top">
    <view class="title"><image src="../../../static/wangyiyun.png"></image>网易云音乐</view>
    <view class="name">{{ playlistDetail.playlist.name || '未知'}}</view>
    <view class="update">
      <view>{{ dateStr }}更新</view>
      <view><image src="../../../static/圆圈i.png" @click="showText=!showText"></image></view>
    </view>
    <view class="text" v-if="showText">{{ playlistDetail.playlist.description }}</view>
    <view class="count">
      <view class="countCon">
        <view><image class="countPic" src="../../../static/添加0.png"></image></view>
        {{ handleNum(playlistDetail.playlist.subscribedCount) }}万
      </view>
      <view class="countCon">
        <view><image class="countPic" src="../../../static/评论0.png"></image></view>
        {{ handleNum(playlistDetail.playlist.commentCount) }}万
      </view>
      <view class="countCon">
        <view><image class="countPic" src="../../../static/分享0.png"></image></view>
        {{ handleNum(playlistDetail.playlist.shareCount) }}万
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .top{
    height: 180px;
    width: 100%;
    background-color: rgb(161, 9, 34);
    overflow: hidden;
    .name{
      font-size: 44px;
      color: #FFF;
      text-align: center;
      margin-top: 5px;
    }
    .update{
      text-align: center;
      font-size: 10px;
      color: #FFF;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      image{
        width: 10px;
        height: 10px;
        margin: 2px 0 0 2px;
      }
    }
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #FFF;
    margin-top: 20px;
    image{
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
  .text{
    position: absolute;
    padding: 5px;
    font-size: 12px;
    color:#FFF;
    z-index: 9;
    background: rgba($color: #000000, $alpha: .8);
    margin: 5px 10px;
  }
  .count{
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 12px;
    background-color: #CCC;
    position: absolute;
    top: 150px;
    left: 40px;
    display: flex;
    justify-content: center;
    z-index: 2;
    .countCon{
      display: flex;
      align-items: center;
      margin: 0 10px;
      .countPic{
        width: 15px;
        height: 15px;
        margin: 3px 5px 0 0;
      }
    }
  }
</style>