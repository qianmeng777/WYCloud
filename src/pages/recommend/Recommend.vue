  <template>  
      <view class="top">
        <view class="tops">
          <view class="menu"></view>
          <input type="text" placeholder="搜索喜欢的音乐" @click="navigateToSearchPage">
           <view class="voice"></view>
        </view>
      </view>
      <view class="main">
        <view class="first">
          <view class="h3">
            {{greeting}}
          </view>
          <view class="dayRec">
            <scroll-view  scroll-x>
              <view class="firstlist">
                <view class="listItem" v-for="item in resource">
                  <image :src="item.creator.avatarUrl"></image>
                  <view class="names">{{ item.name}}</view class="names">
                  <view class="play"><image src="../../static/bofang.png"></image></view>
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
            <scroll-view enable-flex scroll-x type="list" >
              <view class="recommendlist">
                <view class="recListItem" v-for="(item, index) in topPlaylist" :key="index" :v-if="index < 10">
                  <image :src="item.coverImgUrl"></image>
                  <view class="name">{{ item.name}}</view>
                  <view class="palyCount">{{ formatPlayCount(item.playCount) }}</view>
                  <view class="play"><image src="../../static/bofang.png"></image></view>
                </view>
              </view>
            </scroll-view>
          </view>
          
        </view>
        <view class="RecommendSongs">
            <view class="h3">
              猜你喜欢
            </view>
            <scroll-view enable-flex scroll-x>
              <view class="Songslist">
                <view class="SongsItem" v-for="item in recommendSongs">
                  <image :src="item.al.picUrl"></image>
                  <view class="SongsItemR">
                    <view class="Songsname">{{ item.name}}</view>
                    <view class="songInfo">
                      <view class="peopleCount" v-show="item.reason">{{ item.reason }}</view>
                      <!-- <view class="peopleCount" v-else></view> -->
                      <view v-for="i in item.ar" class="Infosname">{{ i.name}}</view>
                    </view>
                  </view>
                  <view class="likePlay"><image src="../../static/播放5.png"></image></view>
                </view>
              </view>
            </scroll-view>
          </view>
      </view>
      <view class="footer">
        <view class="img" @click="goRoam">
            <image></image>图片
        </view>
        <view class="songInfo" @click="goRoam">
           <view class="songName">Dehors(外面)</view>
           <view class="songer"> - JORDANN</view>
        </view>
        <view class="image">
            <image src="../../static/播放.png"></image>
        </view>
        <view><uni-icons type="bars" size="30"></uni-icons></view>
    </view>
  </template>

  <script setup lang="ts">
    import { ref,onMounted,computed } from 'vue'
    import { getResourceApi,topPlaylistApi,recommendSongsApi} from '../../services/index'
    import { defineComponent } from 'vue';
    const resource = ref([])
    const topPlaylist = ref([])
    const recommendSongs = ref([])


    // getBannerApi().then(res => console.log(res)).catch(error => console.error(error))
   
    const greeting = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) return '上午好';
  if (hour < 18) return '下午好';
  return '晚上好';
});

    const navigateToSearchPage = () => {
      uni.navigateTo({
        url: '/pages/input/Input' 
      });
    };

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
      topPlaylist.value = res.data.playlists.slice(0,13)
      console.log(topPlaylist.value)
    } catch (error) {
      console.error(error)
    }
  };

  const getRecommendSongs = async () => {
    try {
      const res = await recommendSongsApi()
      recommendSongs.value = res.data.data.dailySongs.slice(0,12)
      console.log(recommendSongs.value)
    } catch (error) {
      console.error(error)
    }
  };
  onMounted(async () => {
      await getResource();
      await getTopPlaylist();
      await getRecommendSongs();
    });
    // await Promise.all([getResource(), getTopPlaylist(), getRecommendSongs()]);

    const formatPlayCount = (playCount) => {
    return (playCount / 10000).toFixed(1) + '万';
  };


  const goRoam = () => {
      uni.switchTab({
        url: '/pages/roam/Roam' 
      });
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
    height: 50rpx;
    // justify-content: center;
    align-items: center;
    justify-content: space-around;
    position: fixed; 
    // top: 50rpx; 
    // left: 0; 
    top: 20rpx;
    z-index: 1000;  
    position: relative;
    .tops{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100vw;
      height: 50rpx;
      position: absolute;
      top: 0;
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
    // height: 100vh;
    height: calc(100vh - 400rpx); // 减去头部的高度
    padding: 10rpx 30rpx;
    margin-top: 40rpx;
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
        // width: 100%;
        // justify-content: flex-start;
        // margin: 0;
        // padding: 0;
        // box-sizing: border-box;
      // overflow: hidden;
        .listItem{
          width: 300rpx;
          height: 400rpx;
          // background: #ccc;
          margin-top: 20rpx;
          margin-right: 40rpx;
          // white-space: nowrap;
          display: flex;
          flex-direction: column;
          text-align: center;
          background: #b19bb3;
          border-radius: 20rpx;
          color: white;
          position: relative;
          .names{
            height: 90rpx;
            line-height: 90rpx;
            font-size: 20rpx;
            // overflow: hidden;
            text-overflow: ellipsis;
            // white-space: nowrap;
          }
          .play{
            width: 40rpx;
            height: 40rpx;
            position: absolute;
            right: 20rpx;
            bottom: 120rpx;
            image{
              width: 40rpx;
              height: 40rpx;
            }
          }
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
    margin-top: 150rpx;
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
          .play{
            position: absolute;
            width: 30rpx;
            height: 30rpx;
            right: 20rpx;
            bottom: 120rpx;
            image{
              width: 40rpx;
              height: 40rpx;
            }
          }
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

  .RecommendSongs{
    height: 400rpx;
    // background: #712d2d;
    margin-top: 50rpx;
  }
  .Songslist{
    margin-right: 100rpx;
    display: flex;
    height: 100%;
    width: 2630rpx;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-top: 20rpx;
  // overflow: hidden;
    .SongsItem{
      width: 650rpx;
      height: 120rpx;
      display: flex;
      position: relative;
      .likePlay{
        width: 40rpx;
        height: 40rpx;
        position: absolute;
        right: 30rpx;
        top: 22rpx;
        image{
          width: 40rpx;
          height: 40rpx;
        }
      }
      image{
        width: 100rpx;
        height: 100rpx;
        border-radius: 20rpx;
      }
      .SongsItemR{
        padding: 5rpx 10px;
        .Songsname{
          margin-bottom: 10rpx;
        }
        .songInfo{
          display: flex;
          font-size: 24rpx ;

          .peopleCount{
            color: red;
            background: rgb(255, 224, 230);
            border-radius: 10rpx;
            padding: 2rpx 8rpx;
            font-size: 20rpx;
            
          }
          .Infosname{
            margin-left: 10rpx;
            color: #ccc;
          }
        }
      }
    }
  }

  .footer{
    height: 100rpx;
    // background: red;
    position: fixed;
    bottom: 95rpx;
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
  </style>