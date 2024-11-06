import request from './request'

export const getBannerApi = () => {
  return request({ url: '/top/artists' })
}