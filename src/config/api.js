/**
 * 接口统一域名
 * 做mock数据时可忽略
 * @type {string}
 */
const DOMAIN = 'http://back.hibex.com.cn'

/**
 * 接口统一前缀
 * @type {string}
 */
const PREFIX = '/v1'

export default {
  // 手机号国家前缀
  AXIOS_PHONE_EX: `${DOMAIN}${PREFIX}/phone-ex`
}
