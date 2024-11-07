<script setup>
import {ref ,onMounted} from 'vue'
import {getListsonger} from '../../../services/index'

const titlelist=ref([])
onMounted(async () => {
  try {
    const res = await getListsonger()
    console.log(res.data.artists)
    titlelist.value = res.data.artists
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
    
    <view class="com-title">
        <view class="com-title-left">
            <image :src="titlelist[15]?.img1v1Url"/>
            <text>乐迷团</text>
        </view>    
        <scroll-view class="con" scroll-x>
          <view class="qwe">
            <view class="con-item" v-for="(item,index) in titlelist">
            <image :src="item.img1v1Url"/>
            <text>{{item.name}}</text>
          </view>
        </view>
        </scroll-view>
    </view>

</template>

<style scoped lang='scss'>
.com-title{
    width: 100vw;
    height:150rpx;
   
    display: flex;
   .com-title-left{
        width: 100rpx;
        height: 150rpx;
        margin-left: 20rpx;
        image{
            width: 100rpx;
            height: 100rpx;
            border-radius: 50%;

        }
        }
    .qwe{
        flex: 1;
        display: flex;

       
        .con-item{
            width: 100rpx;
            height: 150rpx;
            margin-left: 20rpx; 
            image{
                width: 100rpx;
                height: 100rpx;
                border-radius: 50%;

                 }
                }
         }
}
</style>