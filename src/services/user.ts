// services/user.ts
import request from './request'

// 用户详情
export const userDetailApi = (uid) => {
  return request({
    url: '/user/detail',
    data: {
      uid
    }
  })
}

// 用户歌单
export const userPlaylistApi = (uid) => {
  return request({
    url: '/user/playlist',
    data: {
      uid
    }
  })
}

// 获取登录用户信息
export const getLoginUserInfo = () => {
  return request({
    url: '/user/account',
    method: 'GET'
  })
}