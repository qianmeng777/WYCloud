import request from './request'

export const getBannerApi = () => {
  return request({ url: '/banner' })
}

export const getResourceApi = () => {
  return request({ url: '/recommend/resource' })
}

export const getListApi = () => {
  return request({ url: '/playlist/highquality/tags' })
}


