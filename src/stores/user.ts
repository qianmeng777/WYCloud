import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginUserInfo, userDetailApi, userPlaylistApi } from '../services/user' // 引入接口

export const useUserStore = defineStore('user',() => {
  const profile = ref(null)
  const account = ref({})
  const cookie = uni.getStorageSync('curCookie')


  const getUserDetail = async () => {
    const res = await userDetailApi(account.value.id)
    // console.log(res.data.profile)
    profile.value = {
      ...res.data.profile,
      level: res.data.level,
      listenSongs: res.data.listenSongs,
      createDays: res.data.createDays,
    }
    console.log(profile.value)
  }
  
  // 登录状态
  const getAccount = async () => {
    const res = await getLoginUserInfo(cookie)
    // console.log(res.data)
    account.value = res.data.account
    if( res.data.account ) {
      getUserDetail()
    }
  }
  
  return {
    account,
    getAccount,
    profile,
    getUserDetail
  }
})