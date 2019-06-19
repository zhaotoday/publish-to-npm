const axios = require('axios')

module.exports = config => {
  return {
    async getWXACodeUnLimit ({ code }) {
      const oauth2 = require('../sns/oauth2')(config)
      const { access_token, openid } = await oauth2.getAccessToken({ code })

      const { data } = await axios.request({
        method: 'GET',
        url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',
        params: { access_token, openid, lang: 'zh_CN' }
      })

      return data
    }
  }
}
