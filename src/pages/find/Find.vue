<template>
   <view class="tabs">
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
      <component :is="currentTabComponent" />
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

const tabs = ['音乐', '博客', '听书', '直播'];
const currentTab = ref('音乐');

const currentTabComponent = computed(() => {
  switch (currentTab.value) {
    case '音乐':
      return 'musiccomponent';
    case '博客':
      return 'BlogComponent';
    case '听书':
      return 'AudiobookComponent';
    case '直播':
      return 'LiveComponent';
    default:
      return 'MusicComponent';
  }
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
}

.tab-list {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.tab-list button {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}

.tab-list button.active {
  border-bottom: 2px solid blue;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>