// src/store/song.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { recommendSongsApi } from '../services/index'; 

export const useSongStore = defineStore('song', {
  state: () => ({
    songs: ref([]),
  }),
  actions: {
    async fetchRecommendedSongs() {
      try {
        // 调用recommendSongsApi函数获取推荐歌曲
        const res = await recommendSongsApi();
        // 假设后端返回的数据中推荐歌曲列表在res.data.songs路径下
        this.songs = res.data // 使用空数组作为默认值以防万一
        console.log(this.songs); // 打印获取到的推荐歌曲数据
      } catch (error) {
        console.error(error);
        // 这里可以处理错误，例如设置一个错误状态
      }
    },
  },
  persist: true, // 启用持久化
});