<template>
  <view class="main">

  <view class="title">
    <text @click="curindex=0" :class="{ 'active': curindex===0 }">关注</text>|
    <text @click="curindex=1" :class="{ 'active': curindex===1 }">推荐</text>
  </view>
  <view class="content">
    <content1 v-if="curindex==0"/>
    <content2 v-else/>

  </view>

  </view>
</template>

<script setup>
import { ref } from 'vue'
import content1 from './component/content1.vue'
import content2 from './component/content2.vue'
const curindex = ref(0)
</script>

<style lang="scss" scoped>
.active{
  color: red;
}
.main{
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  .title{
  width: 100px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.content{
 flex: 1;

}

}


</style>