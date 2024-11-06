<template>
  <view class="tabs">
    <text v-for="(item, index) in tabs" @click="curIndex=index" :class="{ 'active': curIndex===index }">{{item}}</text>
  </view>
  <view>
    <Music v-if="curIndex===0" />
    <Podcast v-if="curIndex===1" />
    <Live v-if="curIndex===2" />
    <ListeningBooks v-if="curIndex===3" />
  </view>
  <!-- <view class="tabs">
    <view class="tab-list">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </view>
    <view class="tab-content">
      <navigator :is="currentTabComponent" />
    </view>
  </view> -->

  
</template>

<script setup>
import { ref } from 'vue'
import Music from './components/Music.vue'
import Podcast from './components/Podcast.vue'
import Live from './components/Live.vue'
import ListeningBooks from './components/ListeningBooks.vue'

const curIndex = ref(0)

const tabs = ['音乐', '博客', '听书', '直播']

</script>

<style lang="scss" scoped>
  .active{
    color: green;
  }
  .tabs{
    width: 200px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
</style>