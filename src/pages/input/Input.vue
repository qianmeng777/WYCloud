<template>
 <view class="inputPages"> 
    <view class="top">
        <view class="search">
            <view class="menu"><image src="../../static/美食-棒棒糖.png"></image></view>
            <input 
            class="inp" 
            type="text"
            :placeholder="currentPlaceholder" 
            @click="navigateToSearchPage">
            <view class="voice">搜索</view>
        </view>
        <scroll-view  scroll-x>
                <view class="tag">
                    <view>
                        <image src="../../static/bingqilin-01.png"></image>歌手
                    </view>|
                    <view>
                        <image src="../../static/可乐.png"></image>曲风
                    </view>|
                    <view>
                        <image src="../../static/paobing-01.png"></image>专区
                    </view>|
                    <view>
                        <image src="../../static/xuegao-01.png"></image>识曲
                    </view>
                </view>
        </scroll-view>
    </view>
    <view class="main">
        <view class="SearchHistory">
            <view class="SearchHistory-title">
                <view class="SearchHistory-title-left">
                    <!-- <image src="../../static/可乐.png"></image> -->
                    <text>搜索历史</text>
                    <view class="historyTag">
                        <view class="historyTag-item">多远都要在一起</view>
                        <view class="historyTag-item">我在</view>
                        <view class="historyTag-item">if you</view>
                    </view>
                </view>
                <view class="SearchHistory-title-right">
                    <text>猜你喜欢</text>
                    <view class="likeTag">
                        <view class="likeTag-item">扑通扑通</view>
                        <view class="likeTag-item">人山人海</view>
                        <view class="likeTag-item">烟火</view>
                        <view class="likeTag-item">打上花火</view>
                    </view>
                </view>
            </view>
            <view class="SearchHistory-content"></view>
        </view>  

        <swiper class="songlist" next-margin="40rpx">
            <swiper-item class="hotSearch" v-for="item in topList">
                <view class="title">
                    <view class="title-item">{{item.name}}</view>
                    <view class="play">
                        <image src="../../static/播放5.png"></image>
                        <text>播放</text>
                    </view>
                </view>
                <view class="songitem" v-for="song in Detail">
                    <view class="songName">{{song.name}}</view>
                </view>
            </swiper-item>
            <swiper-item class="hotSearch">
                <view class="title">
                    <view class="title-item">热搜榜</view>
                    <view class="play">
                        <image src="../../static/播放5.png"></image>
                        <text>播放</text>
                    </view>
                </view>
                <view class="songitem">
                    <view class="songName">罗生门</view>
                    <view class="songName">罗生门</view>
                    <view class="songName">罗生门</view>
                    <view class="songName">罗生门</view>
                    <view class="songName">罗生门</view>
                    <view class="songName">罗生门</view>
                </view>
            </swiper-item>
        </swiper>

    </view>
    <view class="footer">
        <view class="img">
            <image></image>图片
        </view>
        <view class="songInfo">
           <view class="songName">Dehors(外面)</view>
           <view class="songer"> - JORDANN</view>
        </view>
        <view class="image">
            <image src="../../static/播放.png"></image>
        </view>
        <view><uni-icons type="bars" size="30"></uni-icons></view>
    </view>
</view>   
</template>

<script setup>
import { ref,onMounted,onUnmounted } from 'vue'
import { gethHotApi,toplistApi,playlistDetailApi } from '../../services/index'

const hotSearch = ref([]);
const topList = ref([]);
const Detail = ref([]);

const placeholderList = ref([]);
const currentPlaceholder = ref('');
const index = ref(0);

const getHot = async () => {
    try {
      const res = await gethHotApi();
      
      hotSearch.value = res.data.result.hots
      placeholderList.value = res.data.result.hots.map((item) => item.first);
      currentPlaceholder.value = placeholderList.value[0];
    //   console.log(hotSearch.value);
    } catch (error) {
      console.error(error);
    }
}    


const getTopList = async () => {
    try {
      const res = await toplistApi();
      topList.value = res.data.list
      console.log(topList.value);
    } catch (error) {
      console.error(error);
    }
} 

const getDetail = async () => {
    try {
      const res = await playlistDetailApi();
      Detail.value = res.data.playlist.tracks.slice(0, 20);

      console.log(Detail.value);
    } catch (error) {
      console.error(error);
    }
} 


const updatePlaceholder = () => {
  index.value = (index.value + 1) % placeholderList.value.length;
  currentPlaceholder.value = placeholderList.value[index.value];
};
onMounted(async () => {
      await getHot();
      await getTopList();
      await getDetail();


  const timer = setInterval(updatePlaceholder, 3000);
  onUnmounted(() => {
    clearInterval(timer);
  });
});




</script>

<style lang="scss" scoped>
.inputPages{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: #f4f4f4;
    // overflow: auto;
.top{
    // background: #eaafaf;
    display: flex;
    width: 100vw;
    height: 170rpx;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-around;
    // position: fixed; 
    // top: 88rpx; 
    left: 0; 
    .search{
       margin-top: 20rpx;
       display: flex;
       width: 100%;
       align-items: center;
       justify-content: space-around;
       input{
        background: white;

       }
    }
    .tag{
    display: flex;
    // width: 100%;
    // align-items: center;
    justify-content: space-around;
    margin-top: 20rpx;
    font-weight: 900;
    font-size: 30rpx;
    height: 90rpx;
    line-height: 70rpx;
    // background: #efefef;
    image{
        width: 30rpx;
        height: 30rpx;
        margin-right: 10rpx;                                                                                                                              
    }
    }
  }
  .menu{
    width: 50rpx;
    height: 50rpx;
    // background: #712d2d;
    background: url(../../static/汉堡.png) no-repeat  center ;
    background-size: 40rpx;
    margin-left: 20rpx;
    image{
        width: 30rpx;
        height: 30rpx;
        margin: 10rpx 0 0 90rpx;
    } 
  }
  input{
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
  .voice{
    color: #000000;
    width: 100rpx;
    text-align: center;
  }
  .main{
    flex: 1;
    background: pink;
    padding: 30rpx;
    overflow: auto;
  }
  .footer{
    height: 100rpx;
    // background: red;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1rpx solid #ccc;
    background: white;
    .img{
        width: 70rpx;
        height: 70rpx;
        background: #ffffff;
        border-radius: 50%;
        margin-left: 20rpx;
        border: 10rpx solid #000000;

    }
    .songInfo{
        display: flex;
        .songer{
            // font-size: 25rpx;
            color: #b7b7b7;
            margin: 2rpx 0 0 10rpx;
        }
    }
    .image{
        image{
            width: 60rpx;
            height: 60rpx;
            margin-top: 5rpx;
        }
    }
  }
  .historyTag{
    display: flex;
    align-items: center;
    // justify-content: space-around;
    // background: #f4f4f4;
    font-size: 20rpx;
    flex-wrap: wrap;
    .historyTag-item{
        height: 40rpx;
        background: #ffffff;
        color: #ffffff;
        text-align: center;
        line-height: 40rpx;
        padding: 5rpx 20rpx;
        margin: 10rpx 10rpx 10rpx 0;
        border-radius: 30rpx;
        color: #000000;
    }
  }
  .SearchHistory-title-right{
    margin-top: 30rpx;
    .likeTag{
    display: flex;
    align-items: center;
    // justify-content: space-around;
    // background: #f4f4f4;
    font-size: 20rpx;
    flex-wrap: wrap;
    .likeTag-item{
        height: 40rpx;
        background: #ffffff;
        color: #ffffff;
        text-align: center;
        line-height: 40rpx;
        padding: 5rpx 10rpx;
        margin: 10rpx 10rpx 10rpx 0;
        border-radius: 30rpx;
        color: #000000;
    }

  }
  }
  .bac{
        width: 2rpx!important;
    }
  .songlist{
    display: flex;
    height: 800rpx;
    
    .hotSearch{
        margin-top: 30rpx;
        background: #ffffff;
        width: 500rpx!important;
        border-radius: 16rpx;
        padding: 20rpx 30rpx;
        border-right: 20rpx solid pink;

        .title{
           display: flex;
           border-bottom: 1rpx solid #e7e7e7;
           padding-bottom: 20rpx;
           .title-item{
              font-weight: 900;
           }
           .play{
            font-size: 26rpx;
            line-height: 40rpx;
            margin-left: 20rpx;
            border-radius: 20rpx;
            padding: 0 20rpx 0 40rpx;
            // background: url(../../static/播放5.png) no-repeat ;
            background-size: 20rpx;
            background-position: left 12rpx center;
            background-color:#e7e7e7 ;
            position: relative;
            image{
                width: 26rpx;
                height: 26rpx;
                line-height: 40rpx;
                margin-top: 10rpx;
                position: absolute;
                left: 10rpx;
            }
           }
        }
        .songitem{
            flex-wrap: wrap;
            font-size: 20rpx;
            margin-top: 20rpx;
            .songName{
                width: 300rpx;
                height: 40rpx;
                line-height: 40rpx;
                margin: 10rpx 10rpx 10rpx 0;
                border-radius: 30rpx;
                padding: 5rpx 10rpx;
            }
        }
    }
  }
} 
</style>