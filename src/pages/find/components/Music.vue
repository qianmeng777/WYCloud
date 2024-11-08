<script setup>
  import { ref, onMounted } from 'vue'
  import { bannerApi, topPlaylistApi, getNewSongApi, getTags, toplistApi, playlistDetailApi } from '../../../services/index'

  const banners = ref([])
  const selectPlaylist = ref([])
  const newPlaylist = ref([])
  const newSonglist = ref([])
  // const tagsList = ref([])
  const topList = ref([])
  const playlistDetail = ref([])

  onMounted(async () => {
  // 调banner接口
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
    // console.log(res.data.data)
    newSonglist.value = res.data.data.slice(0,12)
  } catch (error) {
    console.error(error)
  }

  try {
    const res = await toplistApi()
    console.log(res)
    topList.value = res.data.list.slice(0,6)
  } catch (error) {
    console.error(error)
  }

  // try {
  //   const res = await getTags()
  //   console.log(res.data)
  //   TagsList.value = res.data.data
  // } catch (error) {
  //   console.error(error)
  // }
})

  // 跳转banner详情
  const goDetail = (item) => {
    uni.navigateTo ({
      url: '/pages/find/views/BannerDetail'
    })
  }

  // 跳转榜单详情
  const goTopDetail = async (id) => {
    console.log(id)
    uni.navigateTo ({
      url: `/pages/find/views/TopDetail?id=${id}`
    })
  }

  // 数组转字符串
  const text = (arr) => {
    return arr.map(item => {
      return item.first
    })
  }
</script>

<template>

  <view class="page">
    <view class="con">
      <swiper class="swiper" autoplay interval="3000" duration="500">
        <swiper-item v-for="item in banners" :key="item.targetId">
          <image class="img" :src="item.imageUrl" mode="widthFix" @tap="goDetail(item.id)"/>
        </swiper-item>
      </swiper>
    </view>

    <view class="tit">甄选歌单</view>
    <view class="select">
      <view class="selectCon">
        <scroll-view class="scroll" scroll-x>
          <view class="list">
            <view class="listItem" v-for="item in selectPlaylist" :key="item">
              <image :src="item.coverImgUrl"></image>
              <view>{{ item.name}}</view>
              <view class="play"><image src="../../../static/bofang.png"></image></view>
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
            <view class="listItem" v-for="item in newPlaylist" :key="item">
              <image :src="item.coverImgUrl"></image>
              <view>{{ item.name}}</view>
              <view class="play"><image src="../../../static/bofang.png"></image></view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>

    <view class="tit">新歌新碟&gt;</view>
    <view class="newSong">
      <scroll-view class="newSongCon" scroll-x>
        <view class="newSongList">
          <view class="newSongItem" v-for="item in newSonglist" :key="item">
            <image :src="item.album.picUrl"></image>
            <view class="right">
              <view class="song">{{ item.album.name }}</view>
              <view class="singer">{{ item.album.company}}-{{item.album.subType}}-{{item.album.artists[0].name }}</view>
              <view class="playFive"><image src="../../../static/播放5.png"></image></view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <view class="tit phb">排行榜&gt;</view>
    <view class="top">
      <view class="topCon">
        <scroll-view class="scroll" scroll-x>
          <view class="list">
            <view class="listItem" v-for="item in topList" :key="item.id">
              <image :src="item.coverImgUrl" @tap="goTopDetail(item.id)"></image>
              <view class="th"> 
                <view>{{ (String(text(item.tracks))).replace(/,/g, "、") }}</view>
                <view class="play"><image src="../../../static/bofang.png"></image></view>
                <!-- <view v-for="(item , i) in item.tracks" class="three">
                {{ item.first }}{{ i < 2 ? '、': '' }}
              </view> -->
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>

    <view class="tit">探索更多</view>
    <view class="styleList">
      <view class="style">按曲风浏览&gt;</view>
      <view class="style">按歌手浏览&gt;</view>
      <view class="style">音乐专区&gt;</view>
      <view class="style">歌单广场&gt;</view>
      <view class="style">宝藏曲库&gt;</view>
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
    margin-top: 45px;
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
    margin: 25px 0 5px 0;
  }
  .phb{
    margin: 35px 0 5px 0;
  }

  .select , .new , .newSong , .top{
  height: 300rpx;
    .selectCon , .newCon , .topCon {
      .list{
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        .listItem{
          width: 250rpx;
          height: 300rpx;
          margin-right: 10px;
          // display: flex;
          flex-direction: column;
          text-align: center;
          border-radius: 20rpx;
          position: relative;
          .play{
            width: 20px;
            height: 20px;
            position: absolute;
            right: 5rpx;
            bottom: 110rpx;
            image{
              width: 20px;
              height: 20px;
            }
          }
          image{
            width: 200rpx;
            height: 200rpx;
            border-radius: 20rpx;
          }
          .three{
            display: flex;
            font-size: 10px;
            flex-wrap: wrap;
            height: 27px;
            width: 50rpx;
            text{
              flex-shrink: 0;
              display: flex;
            }
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
.th{
  display: flex;
}
  .newSongCon{
    height: 340rpx;
    margin-top: 10px;
  }
  .newSongList{
    display: flex;
    width: 2600rpx;
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
      flex-shrink: 0;
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
  .newSongItem{
    position: relative;
    .playFive{
      width: 20px;
      height: 20px;
      position: absolute;
      top:30rpx;
      right: 40rpx;
      image{
        width: 20px;
        height: 20px;
      }
    }
  }
  
  .style{
    font-size: 12px;
    font-family: "楷体";
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
  }
</style>
