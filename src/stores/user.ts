import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginStatusApi } from '../services/index'
import { userDetailApi, userPlaylistApi } from '../services/user'

export const useUserStore = defineStore('user', () => {
  const profile = ref(null)
  const account = ref(null)
  const userPlaylists = ref([])

  const getUserDetail = async () => {
    try {
      const res = await userDetailApi(account.value.id)
      profile.value = {
        ...res.profile,
        level: res.level,
        listenSongs: res.listenSongs,
        createDays: res.createDays,
      }
    } catch (error) {
      console.error('Failed to fetch user details:', error)
    }
  }

  const getUserPlaylists = async () => {
    try {
      const res = await userPlaylistApi(account.value.id)
      userPlaylists.value = res.playlist
    } catch (error) {
      console.error('Failed to fetch user playlists:', error)
    }
  }

  const getAccount = async () => {
    try {
      const res = await loginStatusApi()
      account.value = res.data.account
      if (res.data.account) {
        await getUserDetail()
        await getUserPlaylists()
      }
    } catch (error) {
      console.error('Failed to fetch account status:', error)
    }
  }

  const logout = () => {
    profile.value = null
    account.value = null
    userPlaylists.value = []
  }

  return {
    profile,
    account,
    userPlaylists,
    getAccount,
    getUserDetail,
    getUserPlaylists,
    logout
  }
})