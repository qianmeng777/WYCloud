import request from './request'

export const getBannerApi = () => {
  return request({ url: 'https://zyxcl.xyz/music/api/banner' })
}