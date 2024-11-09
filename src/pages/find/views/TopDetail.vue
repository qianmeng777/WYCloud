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

  const joinArtists = (item) => {
    return item.ar.map(artist => artist.name).join(' / ');
  }


</script>

<template>
  <view class="page">
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

  <view class="button">
      <view class="left">
        <view><image src="../../../static/播放红.png"></image></view>
        <view>播放全部(100)</view>
      </view>
      <view class="right">
        <view><image src="../../../static/下载.png"></image></view>
        <view><image src="../../../static/播放列表.png"></image></view>
      </view>
    </view>
    <view class="list">
      <view class="con" v-for="(item, index) in playlistDetail.playlist.tracks" key="item.id">
        <view class="wenzi">
          <view class="index">{{ index + 1 }}</view>
          <view class="msg">
            <view class="songName">{{ item.name }}</view>
            <view v-if="item.originSongSimpleData?.artists[0].name" class="songMsg">{{ joinArtists(item) }}-{{ item.al.name }}|原唱:{{ item.originSongSimpleData?.artists[0].name }}</view>
            <view v-else class="songMsg">{{ joinArtists(item) }}-{{ item.al.name }} </view>
          </view>
        </view>
        <view class="icon">
          <view><image class="mv" src="../../../static/MV.png"></image></view>
          <view><image class="more" src="../../../static/更多1.png"></image></view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .page{
    background: rgb(164, 68, 164);
  }
  .top{
    height: 180px;
    width: 100%;
    background-color: rgb(201, 68, 99);
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
    margin: 5px 40px 5px 45px;
  }
  .count{
    width: 300px;
    height: 50px;
    border-radius: 20px;
    font-size: 12px;
    background-color: #d96072;
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

  .button{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      view{
        margin-left: 10px;
      }
    }
    .right{
      display: flex;
      view{
        margin-right: 10px;
      }
    }
    image{
      width: 20px;
      height: 20px;
    }
  }
  .list{
    margin-top: 20px;
    background: linear-gradient(to right, purple , hotpink );
  }
  .con{
    display: flex;
    align-items: center;
    padding: 5px 0;
    justify-content: space-between;
    .wenzi{
      display: flex;
      align-items: center;
    }
    .index{
      width: 22px;
      text-align: center;
      padding: 0 5px;
      font-size: 14px;
    }
    .icon{
      width: 100px;
      display: flex;
      justify-content: flex-end;
      .mv{
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
      .more{
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
    }
  }
  .msg{
    padding: 5px;
    margin-left: 10px;
    .songName{
      font-size: 12px;
    }
    .songMsg{
      margin-top: 5px;
      font-size: 10px;
      color: #CCC;
      font-weight: 900;
    }
  }
</style>