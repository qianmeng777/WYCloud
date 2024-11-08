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
          <uni-icons type="left" size="50" @click="prev"></uni-icons>
          <button @click="play">播放</button>
          <uni-icons type="right" size="50" @click="next"></uni-icons>
         </view>
  </view>

  


</template>

<script setup>
 import { ref,onMounted,onUnmounted } from 'vue'
 import { recommendSongsApi,getSongsApi} from '../../services/index'

 const open=ref("true")

 const resource = ref([])
 let curindex = ref(3)
 const curid=ref(0)
 const songurl= ref('')
 
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = '';
innerAudioContext.onPlay(() => {
  console.log('开始播放');
});


const play = () => {
  innerAudioContext.src=''
}
const next= () => {
  curindex.value++
  fetchRecommendSongs(),
  fetchSongUrl()
  innerAudioContext.src=songurl.value
  
}
const prev= () => {
  curindex.value--
  fetchRecommendSongs(),
  fetchSongUrl()
  innerAudioContext.src=songurl.value

}


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
onMounted(
  fetchRecommendSongs(),
  fetchSongUrl()
)

</script>

<style lang="scss" scoped>
.title{
  text-align: center;
  margin-bottom: 10px;
}
  

.roam{
  box-sizing: border-box;
  width:100vw;
  height:100vh;
 padding-top: 50px;
  background: rgb(104,77,56);
  .big{
    box-sizing: border-box;
    width:600rpx;
    height:600rpx;
    padding: 100rpx;
    margin: 100rpx auto;
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
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text{
    font-size: 100rpx;
  }

}

</style>