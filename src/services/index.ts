import request from './request'

export const getBannerApi = () => {
  return request({ url: '/dj/category/recommend' })
}