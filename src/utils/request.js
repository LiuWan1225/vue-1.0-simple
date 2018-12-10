import axios from 'axios'

const axiosOptions = axios.create({
  baseURL: '/',
  mode: 'cors',
  method: 'POST',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer auth'
  },
  checkToken: false
})

/**
 * 请求一个 URL，返回一个 Promise
 *
 * @param {string} url 请求地址
 * @param {object} [params] 请求参数，可配置项参数参考
 * @return {object} 返回响应参数 response 或异常信息 err
 */
export default function request (url, params) {
  return new Promise((resolve, reject) => {
    axiosOptions({
      url: url,
      data: JSON.stringify(params)
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}
