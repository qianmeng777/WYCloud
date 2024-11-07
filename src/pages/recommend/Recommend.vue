<template>
    <view class="top">
      <view class="menu"></view>
        <input type="text" placeholder="搜索喜欢的音乐">
      <view class="voice"></view>
    </view>

    <view class="main">
      <view class="first">
        <view class="h3">
          上午好
        </view>
        <view class="dayRec">
          <scroll-view enable-flex scroll-x>
            <view class="firstlist">
              <view class="listItem" v-for="item in resource">
                <image :src="item.creator.avatarUrl"></image>
                <p>{{ item.name}}</p>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="recommendList">
        <view class="h3">
          推荐歌单
        </view>
        <view class="recommend">
          <scroll-view enable-flex scroll-x>
            <view class="recommendlist">
              <view class="recListItem" v-for="item in topPlaylist">
                <image :src="item.coverImgUrl"></image>
                <view class="name">{{ item.name}}</view>
                <view class="palyCount">{{ formatPlayCount(item.playCount) }}</view>
              </view>
            </view>
          </scroll-view>
        </view>

      </view>
    </view>
</template>

<script setup lang="ts">
  import { ref,onMounted,computed } from 'vue'
  import { getResourceApi,topPlaylistApi} from '../../services/index'

  const resource = ref([])
  const topPlaylist = ref([])

  // getBannerApi().then(res => console.log(res)).catch(error => console.error(error))
  
const getResource = async () => {
  try {
    const res = await getResourceApi();
    resource.value = res.data.recommend;
    console.log(resource.value);
  } catch (error) {
    console.error(error);
  }
};

const getTopPlaylist = async () => {
  try {
    const res = await topPlaylistApi()
    topPlaylist.value = res.data.playlists
    console.log(topPlaylist.value)
  } catch (error) {
    console.error(error)
  }
};
onMounted(async () => {
    await getResource();
    await getTopPlaylist();
  });

  const formatPlayCount = (playCount) => {
  return (playCount / 10000).toFixed(1) + '万';
};

</script>




<style lang="scss" scoped>

li{
  list-style: none;
}
.top{
  // background: #eaafaf;
  color: white;
  display: flex;
  width: 100vw;
  height: 90rpx;
  // justify-content: center;
  align-items: center;
  justify-content: space-around;
  position: fixed; 
  top: 88rpx; 
  left: 0; 
}
.menu{
  width: 50rpx;
  height: 50rpx;
  // background: #712d2d;
  background: url(../../static/汉堡.png) no-repeat  center ;
  background-size: 40rpx;
  margin-left: 20rpx;
}

.voice{
  width: 50rpx;
  height: 50rpx;
  // background: #ccc;
  background: url(../../static/可乐.png) no-repeat center;
  background-size: 40rpx;
  margin-left: 10px;
}
input{
  background: #efefef;
  width: 75%;
  height: 60rpx;
  border-radius: 50rpx;
  margin-left: 20rpx;
  // padding-left: 20rpx;
  box-sizing: border-box;
  padding: 5rpx 20rpx 5rpx 60rpx;
  color: #000000;
  background: url(../../static/美食-棒棒糖.png) no-repeat ;
  background-color: #efefef;
  background-size: 40rpx;
  background-position: left 10rpx center;
  line-height: 60rpx;
}
.main{
  overflow: auto;
  height: calc(100vh - 320rpx); // 减去头部的高度
  padding: 10rpx 30rpx;
  margin-top: 100rpx;
  display: flex;
  flex-direction: column;
}

.first{
  height: 400rpx;
  // background: #712d2d;
  .h3{
    font-size: 50rpx;
  }
  .dayRec{
    .firstlist{
      margin-right: 100rpx;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    // overflow: hidden;
      .listItem{
        width: 300rpx;
        height: 400rpx;
        background: #ccc;
        margin-top: 20rpx;
        margin-right: 40rpx;
        // white-space: nowrap;
        display: flex;
        flex-direction: column;
        text-align: center;
        background: #959595;
        border-radius: 20rpx;
        color: white;
        image{
          width: 300rpx;
          height: 300rpx;
          border-radius: 20rpx;
        }
      }
    }
  }
  
}

.recommendList{
  height: 400rpx;
  // background: #712d2d;
  margin-top: 100rpx;
  .h3{
    font-size: 30rpx;
  }
  .recommend{
    .recommendlist{
      margin-right: 100rpx;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    // overflow: hidden;
      .recListItem{
        width: 200rpx;
        height: 300rpx;
        background: white;
        margin-top: 20rpx;
        margin-right: 40rpx;
        // white-space: nowrap;
        display: flex;
        flex-direction: column;
        text-align: center;
        // background: #959595;
        border-radius: 20rpx;
        color: white;
        text-overflow: ellipsis;
        position: relative;
        .palyCount{
          position: absolute;
          left: 20rpx;
          background: url(../../static/耳机.png) no-repeat left center;
          background-size:30rpx;
          padding-left: 30rpx;
          padding-bottom: 3rpx;
          color: white;
        }
        image{
          width: 200rpx;
          height: 200rpx;
          border-radius: 20rpx;
        }
        .name{
          color: #000000;
          font-size: 24rpx;
          height: 70rpx;
          width: 200rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          // white-space: nowrap;
          margin-top: 10rpx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
  
}
</style>