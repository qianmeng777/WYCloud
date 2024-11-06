import request from './request'

export const getBannerApi = () => {
  return request({ url: '/banner' })
}

export const getPageApi = () => {
  return request({ url: '/homepage/block/page' })
}