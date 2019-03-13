const request = require('request-promise-native')
const config = require("./config.json")

const options = {
  headers: {
    'Accept': 'application/vnd.github.mercy-preview+json',
    'Authorization': `Bearer ${config.token}`,
    'User-Agent': 'keithhchen',
  },
  json: true
}

module.exports = request.defaults(options)