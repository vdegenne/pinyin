const { request } = require('https')

const options = {
  hostname: 'dictionary.writtenchinese.com',
  port: 443,
  path: '/ajaxsearch/simsearch.action',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}

module.exports = word =>
  new Promise(resolve => {
    const req = request(options, response => {
      let data = ''
      response.on('data', chunk => (data += chunk))
      response.on('end', () => {
        try {
          data = JSON.parse(data)
          resolve(data.bothChShort[0].tone)
        } catch (e) {
          resolve(null)
        }
      })
    })

    req.on('error', e => {
      resolve(null)
    })

    req.write(`searchKey=${encodeURIComponent(word)}`)
    req.end()
  })
