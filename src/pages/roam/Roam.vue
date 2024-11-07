<template>
  <view class="roam">漫游
     <view class="big">
         <view class="img">
          <image :src="resource[curindex]?.al.picUrl"/>
         </view>
     </view>
    <view class="list">
         <view class="title">
          <h5>{{ resource[curindex]?.al.name }}</h5>
          <text>{{ resource[curindex]?.ar[0].name }}</text>
         </view>
        </view>
    <view class="btn">
          <!-- <text @click="curindex--">&lt;</text> -->
          <text @click="curindex++">&gt;</text>
         </view>
  </view>

  


</template>

<script setup>
 import { ref,onMounted } from 'vue'
 import { recommendSongsApi} from '../../services/index'

 const resource = ref([])
 const curindex = ref(3)
// const 
// const innerAudioContext = uni.createInnerAudioContext();
// innerAudioContext.autoplay = true;
// innerAudioContext.src = 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3';
// innerAudioContext.onPlay(() => {
//   console.log('开始播放');
// });
// innerAudioContext.onError((res) => {
//   console.log(res.errMsg);
//   console.log(res.errCode);
// });





onMounted(async () => {
try {
  const res = await recommendSongsApi()
  console.log(res.data.data.dailySongs  )
  resource.value = res.data.data.dailySongs
  console.log(resource.value)


} catch (error) {
  console.error(error)
}
})

</script>

<style lang="scss" scoped>

  

.roam{
  box-sizing: border-box;
  width:100vw;
  height:100vh;
 
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