const config = require('../../config/envConfig');

function isAdmin(req, res, next) {
  const adminPass = req.body.pass;
  if (adminPass === config.APP.ADMIN_PASS) {
    next();
  } else {
    res.status(400).json({
      success: 'false',
      msg: 'You have to have admin privliges in order to access this endpoint'
    });
  }
}

module.exports = { isAdmin };
