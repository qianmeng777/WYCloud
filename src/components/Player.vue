<template>
  <view class="footer">
      <swiper class="swiper">
        <swiper-item class="swiper-item" v-for="item in dailySongs">
            <view class="img" @click="goRoam">
                <image :src="item.al.picUrl"></image>
            </view>
            <view class="songInfo" @click="goRoam" >
                <view class="songName" >{{ item.name }}</view>
                <view class="songer"> - {{ item.ar[0].name }}</view>
            </view>
        </swiper-item>
    </swiper>  
        <view class="image" @click="handlePlayClick(currentSongInfo)">
            <image src="../static/播放.png"></image>
        </view>
        <view><uni-icons type="bars" size="30"></uni-icons></view>
    </view>
</template>

<script lang="ts" setup>
import { ref,computed,onMounted } from 'vue'
import { useAudioStore } from '../stores/music';
import { useSongStore } from '../stores/SongList';

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
    bottom: 0rpx;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1rpx solid #ccc;
    background: #FFFFFF;
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
  }
</style>