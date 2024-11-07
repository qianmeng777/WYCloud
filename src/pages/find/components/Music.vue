<script setup>
  import { ref, onMounted } from 'vue'
  import { bannerApi, topPlaylistApi, getNewSongApi } from '../../../services/index'

  const banners = ref([])
  const selectPlaylist = ref([])
  const newPlaylist = ref([])
  const newSonglist = ref([])

  onMounted(async () => {
  try {
    const res = await bannerApi()
    // console.log(res)
    banners.value = res.data.banners
  } catch (error) {
    console.error(error)
  }

  try {
    const res = await topPlaylistApi()
    // console.log(res.data.playlists)
    selectPlaylist.value = res.data.playlists.slice(0,6)
    newPlaylist.value = res.data.playlists.slice(6,11)
  } catch (error) {
    console.error(error)
  }

  try {
    const res = await getNewSongApi()
    console.log(res.data.data)
    newSonglist.value = res.data.data.slice(0,12)
  } catch (error) {
    console.error(error)
  }
})

  const goDetail = (item) => {
    console.log('goDetail')
  }
</script>

<template>

  <view class="page">
    <view class="con">
      <swiper class="swiper" autoplay interval="3000" duration="500">
        <swiper-item v-for="item in banners" :key="item.targetId">
          <image class="img" :src="item.imageUrl" mode="widthFix" @click="goDetail(item)"/>
        </swiper-item>
      </swiper>
    </view>

    <view class="tit">甄选歌单</view>
    <view class="select">
      <view class="selectCon">
        <scroll-view class="scroll" scroll-x>
          <view class="list">
            <view class="listItem" v-for="item in selectPlaylist">
              <image :src="item.coverImgUrl"></image>
              <view>{{ item.name}}</view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>

    <view class="tit">云村新鲜事</view>
    <view class="new">
      <view class="newCon">
        <scroll-view class="scroll" scroll-x>
          <view class="list">
            <view class="listItem" v-for="item in newPlaylist">
              <image :src="item.coverImgUrl"></image>
              <view>{{ item.name}}</view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>

    <view class="tit">新歌新碟</view>
    <view class="newSong">
      <scroll-view class="newSongCon" scroll-x>
        <view class="newSongList">
          <view class="newSongItem" v-for="item in newSonglist">
            <image :src="item.album.picUrl"></image>
            <view class="right">
              <view class="song">{{ item.album.name }}</view>
              <view class="singer">{{ item.album.company}}-{{item.album.subType}}-{{item.album.artists[0].name }}</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>

</template>

<style lang="scss" scoped>
  .page{
    padding: 0 10px;
    height: 100vh;
    overflow: auto;
  }

  .con{
    width: 100%;
    margin-top: 5px;
  }
  .swiper{
    height: 264rpx;
  }
  .img{
    width: 100%;
    object-fit: cover;
  }

  .tit{
    font-size: 14px;
    font-weight: 900;
    margin-top: 15px;
  }

  .select , .new , .newSong{
  height: 300rpx;
    .selectCon , .newCon {
      .list{
        display: flex;
        width: 100%;
        justify-content: flex-start;
        margin-top: 10px;
        .listItem{
          width: 250rpx;
          height: 300rpx;
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          text-align: center;
          border-radius: 20rpx;
          image{
            width: 200rpx;
            height: 200rpx;
            border-radius: 20rpx;
          }
          view{
            color: black;
            font-size: 12px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
            overflow: hidden; /* 隐藏超出的内容 */
            text-overflow: ellipsis; /* 溢出时显示省略号 */
          }
        }
      }
    }  
  }

  .newSongCon{
    height: 340rpx;
    margin-top: 10px;
  }
  .newSongList{
    display: flex;
    width: 2600rpx;
    height: 340rpx;
    flex-wrap: wrap;
  }
  .newSongItem{
    width: 650rpx;
    margin-bottom: 5px;
    height: 100rpx;
    display: flex;
    image{
      width: 100rpx;
      height: 100rpx;
    }
    view{
      margin-left: 10px;
    }
  }
  .song{
    color: black;
    font-weight: 900;
    font-size: 14px;
    margin-top: 8px;
  }
  .singer{
    font-size: 10px;
    color:gray;
    margin-top: 5px;
  }
</style>
