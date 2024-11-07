<template>
 <view class="inputPages"> 
    <view class="top">
        <view class="search">
            <view class="menu"></view>
            <input class="inp" type="text" placeholder="搜索喜欢的音乐" @click="navigateToSearchPage">
            <view class="voice">搜索</view>
        </view>
        <scroll-view  scroll-x>
                <view class="tag">
                    <view>
                        <image src="../../static/bingqilin-01.png"></image>歌手
                    </view>|
                    <view>
                        <image src="../../static/hongjiu-01.png"></image>曲风
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
                </view>
                <view class="SearchHistory-title-right">
                    <text>清空</text>
                </view>
            </view>
            <view class="SearchHistory-content"></view>
        </view>  
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
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.inputPages{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
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
       margin-top: 10rpx;
       display: flex;
       width: 100%;
       align-items: center;
       justify-content: space-around;
    }
    .tag{
    display: flex;
    // width: 100%;
    // align-items: center;
    justify-content: space-around;
    margin-top: 20rpx;
    font-weight: 900;
    font-size: 30rpx;
    height: 60rpx;
    line-height: 60rpx;
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
} 
</style>