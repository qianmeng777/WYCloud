interface Params {
  url: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  header?: any
}

const request = ({
  url,
  method = "GET",
  data = {},
  header = {}
}: Params) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method,
      data,
      header,
      success: (res) => {
        resolve(res)
      },
      fail: reject
    })
  })

  
}
export default request