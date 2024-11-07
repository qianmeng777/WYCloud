import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAccountInfoApi } from '@/api'

interface UserInfo {
  userId: number
  nickname: string
  avatarUrl: string
  // 添加其他您需要的用户信息字段
}

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)
  const isLoggedIn = ref(false)

  const getAccount = async () => {
    try {
      const res = await getAccountInfoApi()
      if (res.code === 200) {
        userInfo.value = {
          userId: res.account.id,
          nickname: res.profile.nickname,
          avatarUrl: res.profile.avatarUrl,
          // 根据API返回的数据结构，添加其他需要的字段
        }
        isLoggedIn.value = true
      } else {
        throw new Error('Failed to get account info')
      }
    } catch (error) {
      console.error('获取用户信息失败:', error)
      uni.showToast({
        title: '获取用户信息失败',
        icon: 'none'
      })
    }
  }

  const logout = () => {
    userInfo.value = null
    isLoggedIn.value = false
    uni.removeStorageSync('curCookie')
    // 可能还需要清除其他与用户相关的存储
  }

  return {
    userInfo,
    isLoggedIn,
    getAccount,
    logout
  }
})