// stores/music.js
import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {
  state: () => ({
    songName: '', // 存储歌曲名称
    singer: '',  // 存储歌手名称
    songImg: '', // 存储歌曲图片
    playing: false, // 存储播放状态
    innerAudioContext: uni.createInnerAudioContext() // 创建音频上下文
  }),
  actions: {
    updateSongInfo(songName, singer, songImg) { // 更新歌曲信息
      this.songName = songName;
      this.singer = singer;
      this.songImg = songImg;
    },
    updatePlayingStatus(playing) { // 更新播放状态
      this.playing = playing;
    },
    play() {
        this.innerAudioContext.play();
        this.updatePlayingStatus(true);
      },
      pause() {
        this.innerAudioContext.pause();
        this.updatePlayingStatus(false);
      },
      togglePlayPause() {
        if (this.playing) {
          this.pause();
        } else {
          this.play();
        }
      }
  }
});