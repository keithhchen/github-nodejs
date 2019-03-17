const request = require('request-promise-native')
const { token, userAgent } = require("../config.json")

const options = {
  headers: {
    'Accept': 'application/vnd.github.mercy-preview+json',
    'Authorization': `Bearer ${token}`,
    'User-Agent': `${userAgent}`,
  },
  json: true
}

module.exports = request.defaults(options)