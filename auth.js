const utility = require('utility')
const config = require('./config');

const isAuthorized = function (req) {
  let timestamp = req.get('x-timestamp');
  let sign = req.get('x-sign');

  let hash = utility.md5(config.salt + timestamp);

  if (hash === sign) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAuthorized