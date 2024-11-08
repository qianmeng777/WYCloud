<template>
  <view class="roam">
     <view class="big">
         <view class="img">
          <image :src="resource[curindex]?.al.picUrl"/>
         </view>
     </view>
    <view class="list">
         <view class="title">
          <h3>{{ resource[curindex]?.al.name }}</h3>
          <text>{{ resource[curindex]?.ar[0].name }}</text>
         </view>
        </view>
    <view class="btn">
          <uni-icons type="left" size="50" @click="prev" color="white"></uni-icons>
          <image v-if="picstab" src=../../static/暂停1.png  @click="playing"/>
          <image v-else src=../../static/播放1.png @click="parsing"/>
          <uni-icons type="right" size="50" @click="next" color="white"></uni-icons>
         </view>
  </view>

  


</template>

<script setup>
//  import { ref,onMounted,onUnmounted } from 'vue'
//  import { recommendSongsApi,getSongsApi,getplaylistApi} from '../../services/index'

//  const open=ref("true")
//  const picstab=ref("false")

//  const resource = ref([])
//  let curindex = ref(1)
//  const curid=ref(0)
//  const songurl= ref('')
 
// const innerAudioContext = uni.createInnerAudioContext();
// innerAudioContext.autoplay = true;
// innerAudioContext.src = '';
// innerAudioContext.onPlay(() => {
//   console.log('开始播放');
// });
// const playing = () => {
//   picstab.value=!picstab.value
//   innerAudioContext.src=''
// }
// const parsing = () => {
//   picstab.value=!picstab.value
//   fetchRecommendSongs(),
//   fetchSongUrl()
//   innerAudioContext.src=songurl.value
// }
// const next= () => {
//   curindex.value++
//   fetchRecommendSongs(),
//   fetchSongUrl()
//   picstab.value = true
//   innerAudioContext.src=songurl.value
//   fetchplaylist()
// }
// const prev= () => {
//   curindex.value--
//   fetchRecommendSongs(),
//   fetchSongUrl()
//   innerAudioContext.src=songurl.value
//   fetchplaylist()
// }


// const fetchRecommendSongs = async () => {
//   try {
//     const res = await recommendSongsApi();
//     console.log(res.data.data.dailySongs);
//     resource.value = res.data.data.dailySongs;
//     if (resource.value.length > 0) {
//       curid.value = resource.value[curindex.value].id;
//       console.log(curid.value);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
// const fetchSongUrl = async () => {
//   try {
//     if (curid.value) {
//       const res = await getSongsApi(curid.value);
//       console.log(res.data.data[0].url);
//       songurl.value = res.data.data[0].url;
//       console.log(songurl.value);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
// //歌曲评论
// const fetchplaylist = async () => {
//   try {
//     if (curid.value) {
//       const res = await getplaylistApi(1890530891);
//       console.log(res.data);
//       // songurl.value = res.data.data[0].url;
//       // console.log(songurl.value);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// onMounted(
//   fetchRecommendSongs(),
//   fetchSongUrl(),
  

// )

import { ref, onMounted, onUnmounted } from 'vue';
import { recommendSongsApi, getSongsApi, getplaylistApi } from '../../services/index';
import { useAudioStore } from '../../stores/music'; // 导入Pinia store

const open = ref("true");
const picstab = ref("false");
const resource = ref([]);
let curindex = ref(1);
const curid = ref(0);
const songurl = ref('');

const audioStore = useAudioStore(); // 使用Pinia store

const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = '';
innerAudioContext.onPlay(() => {
  console.log('开始播放');
  audioStore.updatePlayingStatus(true); // 更新Pinia store中的播放状态
});
innerAudioContext.onPause(() => {
  console.log('暂停播放');
  audioStore.updatePlayingStatus(false); // 更新Pinia store中的播放状态
});

// 修改部分：在播放和暂停函数中添加更新Pinia store的操作
const playing = () => {
  picstab.value = !picstab.value;
  innerAudioContext.src = '';
  audioStore.updateSongInfo(resource.value[curindex.value]?.al.name, resource.value[curindex.value]?.ar[0].name, resource.value[curindex.value]?.al.picUrl); // 更新Pinia store中的歌曲信息
};
const parsing = () => {
  picstab.value = !picstab.value;
  fetchRecommendSongs(), fetchSongUrl();
  innerAudioContext.src = songurl.value;
  audioStore.updateSongInfo(resource.value[curindex.value]?.al.name, resource.value[curindex.value]?.ar[0].name, resource.value[curindex.value]?.al.picUrl); // 更新Pinia store中的歌曲信息
};
const next = () => {
  curindex.value++;
  fetchRecommendSongs(), fetchSongUrl();
  picstab.value = true;
  innerAudioContext.src = songurl.value;
  audioStore.updateSongInfo(resource.value[curindex.value]?.al.name, resource.value[curindex.value]?.ar[0].name, resource.value[curindex.value]?.al.picUrl); // 更新Pinia store中的歌曲信息
  fetchplaylist();
};
const prev = () => {
  curindex.value--;
  fetchRecommendSongs(), fetchSongUrl();
  innerAudioContext.src = songurl.value;
  audioStore.updateSongInfo(resource.value[curindex.value]?.al.name, resource.value[curindex.value]?.ar[0].name, resource.value[curindex.value]?.al.picUrl); // 更新Pinia store中的歌曲信息
  fetchplaylist();
};


const fetchRecommendSongs = async () => {
  try {
    const res = await recommendSongsApi();
    console.log(res.data.data.dailySongs);
    resource.value = res.data.data.dailySongs;
    if (resource.value.length > 0) {
      curid.value = resource.value[curindex.value].id;
      console.log(curid.value);
    }
  } catch (error) {
    console.error(error);
  }
};
const fetchSongUrl = async () => {
  try {
    if (curid.value) {
      const res = await getSongsApi(curid.value);
      console.log(res.data.data[0].url);
      songurl.value = res.data.data[0].url;
      console.log(songurl.value);
    }
  } catch (error) {
    console.error(error);
  }
};
//歌曲评论
const fetchplaylist = async () => {
  try {
    if (curid.value) {
      const res = await getplaylistApi(1890530891);
      console.log(res.data);
      // songurl.value = res.data.data[0].url;
      // console.log(songurl.value);
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(
  fetchRecommendSongs(),
  fetchSongUrl(),
  

)

</script>

<style lang="scss" scoped>
.title{
  text-align: center;
}
  

.roam{
  box-sizing: border-box;
  width:100vw;
  height:calc(100vh - 94px);
  padding-top: 50px;
  background: url(../../static/603518648&fm=253&fmt=auto&app=138&f=JPEG.jpg);
  color: white;
  .big{
    box-sizing: border-box;
    width:600rpx;
    height:600rpx;
    padding: 100rpx;
    margin: 50rpx auto;
    background: red;
    background: url(../../static/disc.png) no-repeat;
    background-size: 600rpx 600rpx;
   
    .img{
      width: 400rpx;
      height: 400rpx;
      
      border-radius: 50%;
      background: red;
      overflow: hidden;
      image{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.list{
  padding: 0 40rpx;
 
}
.btn{
  margin-top: 30px;
  box-sizing: border-box;
  padding: 0 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  image{
    width: 60px;
    height: 60px;
  }
  text{
    font-size: 100rpx;
  }

}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.big .img image {
  animation: spin 0.00001s linear infinite; /* 10秒内完成一次旋转，线性速度，无限循环 */
}
</style>