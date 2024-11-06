interface Params {
  url: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  header?: any
}

const base = 'https://zyxcl.xyz/music/api'

const request = ({
  url,
  method = "GET",
  data = {}
}: Params) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: base + url,
      method,
      data,
      success: (res) => {
        resolve(res)
      },
      fail: reject
    })
  })

  
}
export default request