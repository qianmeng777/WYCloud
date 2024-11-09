<template>
  <view class="footer">
    <view class="popup">
      <uni-popup ref="bottomPopup" type="bottom">
        <view class="popup-content">
          <view class="header">
            <veiw class="top">
              <view class="current">当前播放</view> 
              <view class="history">历史播放</view> 
            </veiw>
            <view class="function">
              <view class="playType">
                 <view class="type">
                  <view class="typeItem">随机播放</view>
                 </view>
              </view>
              <view class="functionType">
                 <view class="manage"></view>
                 <view class="download"></view>
                 <view class="del"></view>
              </view>
            </view>
          </view>
          <view class="list">
            <view class="listItem" v-for="item in dailySongs">
              <view class="songInfo">
                 <view class="songName">{{ item.name }}</view>
                 <view class="songer"> · {{ item.ar[0].name }}</view> 
              </view>
              <view>×</view>
            </view>
          </view>
        </view>
      </uni-popup>
    </view>


    <swiper class="swiper">
      <swiper-item class="swiper-item" v-for="item in dailySongs">
        <view class="img" @click="goRoam">
          <image :src="item.al.picUrl"></image>
        </view>
        <view class="songInfo" @click="goRoam">
          <view class="songName">{{ item.name }}</view>
          <view class="songer"> - {{ item.ar[0].name }}</view>
        </view>
      </swiper-item>
    </swiper>

    <view class="image" @click="handlePlayClick(currentSongInfo)">
      <image src="../static/播放.png"></image>
    </view>
    <view><uni-icons type="bars" size="30" @click="openBottomPopup"></uni-icons></view>
  
  </view>

</template>

<script lang="ts" setup>
import { ref,computed,onMounted} from 'vue'
import { useAudioStore } from '../stores/music';
import { useSongStore } from '../stores/SongList';
// import { UniPopup } from '@dcloudio/uni-ui';


const bottomPopup = ref(null);

// 打开底部弹出层
const openBottomPopup = () => {
  bottomPopup.value.open();
};

// 关闭底部弹出层
const closeBottomPopup = () => {
  bottomPopup.value.close();
};



const songs = ref([]);


const songStore = useSongStore();
const dailySongs = computed(() => songStore.songs.data?.dailySongs);
onMounted(async () => {
  await songStore.fetchRecommendedSongs();
  console.log(dailySongs.value)
});

// onLoad(options) {
//     const curid = options.id; // 这里的id就是传递过来的curid
//   }
const audioStore = useAudioStore();


const currentSongInfo = computed(() => ({
  songName: audioStore.songName,
  singer: audioStore.singer,
  songImg: audioStore.songImg
}));


// 添加处理 likePlay 点击事件的方法
const handlePlayClick = (songInfo) => {
  if (!songInfo) {
    console.error('Song info is undefined');
    return;
  }
  if (!songInfo.ar || songInfo.ar.length === 0) {
    console.error('Song artist information is missing');
    return;
  }
  // 如果当前没有播放，或者点击的是不同的歌曲，则播放新歌曲
  if (!audioStore.playing || audioStore.songName !== songInfo.songName) {
    audioStore.updateSongInfo(songInfo.songName, songInfo.ar[0].name, songInfo.songImg);
    audioStore.play();
  } else {
    // 如果当前歌曲正在播放，点击则暂停
    audioStore.togglePlayPause();
  }
};



const goRoam = () => {
      uni.switchTab({
        url: '/pages/roam/Roam' 
      });
  };


</script>

<style lang="scss" scoped>
.footer{
    height: 100rpx;
    // background: red;
    position: fixed;
    bottom: 200rpx;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1rpx solid #ccc;
    background: #FFFFFF;
    position: relative;
    .popup-content{
      background-image: linear-gradient(to bottom right, pink, purple);

      height: 800rpx;
      width: 100vw;
      position: absolute;
      bottom: 100rpx;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      // padding: 30rpx 25rpx;
      .header{
        padding: 30rpx 25rpx;
        .top{
        display: flex;
        border-bottom: 1rpx solid #ccc;
          .current{
            margin-right: 90rpx;
            // background: pink;
            padding-bottom: 20rpx;
            border-bottom: 1rpx solid #000000;
          }
          .history{
            // background: pink;
            // padding-bottom: 20rpx;
            border-bottom: 1rpx solid #000000;
          }
        }
        .function{
          display: flex;
          justify-content: space-between;
          margin-top: 20rpx;
          .playType{
            display: flex;
            background-image: linear-gradient(to right, rgb(230, 211, 242), rgb(245, 183, 192));
            padding: 10rpx 20rpx;
            border-radius: 30rpx;
            font-size: 24rpx;
            .type{
              width: 150rpx;
              height: 40rpx;
              margin-right: 20rpx;
              background: url(../static/随机播放.png) no-repeat center;
              background-size: 40rpx;
              background-position: -0 0;
              .typeItem{
                margin-left: 50rpx;
                line-height: 40rpx;
              }
              image{
                width: 40rpx;
                height: 40rpx;
              }
            }
          }
          .functionType{
            display: flex;
            margin-top: 10rpx;
            width: 250rpx;
            justify-content: space-between;
            .manage{
              width: 40rpx;
              height: 40rpx;
              background: url(../static/下载.png) no-repeat center;
              margin-right: 20rpx;
              background-size: 40rpx;
              image{
                width: 40rpx;
                height: 40rpx;
              }
            }
            .download{
              width: 40rpx;
              height: 40rpx;
              background: url(../static/添加2.png) no-repeat center;
              margin-right: 20rpx;
              background-size: 40rpx;
            }
            .del{
              width: 40rpx;
              height: 40rpx;
              background: url(../static/删除1.png) no-repeat center;
              margin-right: 20rpx;
              background-size: 40rpx;
            }
          }
        }
      }
    }
    .popup{
      position: absolute;
      bottom: 200rpx;
      border-radius: 20rpx;
      width: 100vw;
    }
    .swiper{
        height: 90rpx;
        width: 70%;
        .swiper-item{
            width: 80%;
            display: flex;
            .songInfo{
                display: flex;
                line-height: 90rpx;
                margin-left: 20rpx;
                .songer{
                    // font-size: 25rpx;
                    color: #909090;
                    margin: 0 0 0 10rpx;
                }
                
            }
            .img{
                margin-left: 20rpx;
            }
        }

    }
    .img{
        width: 70rpx;
        height: 70rpx;
        background: #ffffff;
        border-radius: 50%;
        margin-left: 5rpx 0 0 20rpx;
        border: 10rpx solid #000000;
        image{
            width: 70rpx;
            height: 70rpx;
            border-radius: 50%;
        }

    }
    
    .image{
        image{
            width: 60rpx;
            height: 60rpx;
            margin-top: 5rpx;
        }
    }
    .list{
      padding: 0 25rpx;
      overflow: auto;
      height: calc(100% - 200rpx);
      .listItem{
        border-bottom: 1rpx solid #b0c9fd;
        display: flex;
        // margin-bottom: 20rpx;
        justify-content: space-between;
        padding: 20rpx 0;
        .songInfo{
          display: flex;
          .songName{
            font-style: oblique;
            text-shadow: 2px 2px 2px #f5bed2;
            
          }
          .songer{
            font-size: 24rpx;
            line-height: 45rpx;
            margin-left: 20rpx;
            font-style: oblique;
            text-shadow: 2px 2px 2px #f397df;
            font-family: '楷体';
          }
        }
      }
    }
  }
</style>