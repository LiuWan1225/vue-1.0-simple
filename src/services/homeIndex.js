import request from '@/utils/request.js'
import API from '@/config/api.js'

// 获取手机号国家前缀
export async function axiosPhoneEx (params) {
  return request(API.AXIOS_PHONE_EX, params)
}
