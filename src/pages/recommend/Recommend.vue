<template>
    <view class="top">
      <view class="menu"></view>
        <input type="text" placeholder="搜索喜欢的音乐">
      <view class="voice"></view>
    </view>
    <view class="main">
      <view class="first">
        <h3>
          晚上好
        </h3>
        <view class="dayRec">
          <scroll-view scroll-x>
            <ul >
              <li v-for="item in resource">
                <image :src="item.creator.avatarUrl"></image>
                <p>{{ item.name}}</p>
              </li>
            </ul>
          </scroll-view>
        </view>
    </view>
    </view>
</template>

<script setup lang="ts">
  import { ref,onMounted } from 'vue'
  import { getBannerApi } from '../../services/index'
  import { getResourceApi} from '../../services/index'

  const resource = ref([])

  // getBannerApi().then(res => console.log(res)).catch(error => console.error(error))
  onMounted(async () => {
  try {
    const res = await getResourceApi()
    // console.log(res.data.recommend)
    resource.value = res.data.recommend
    console.log(resource.value)
  

  } catch (error) {
    console.error(error)
  }
})
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
  overflow: hidden;
  height: calc(100vh - 320rpx); // 减去头部的高度
  padding: 10rpx 30rpx;
  margin-top: 100rpx;
}

.first{
  height: 400rpx;
  // background: #712d2d;
  .dayRec{
    ul{
      margin-right: 50px;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    // overflow: hidden;
      li{
        width: 300rpx;
        height: 400rpx;
        background: #ccc;
        margin-top: 20rpx;
        margin-right: 20px;
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
</style>