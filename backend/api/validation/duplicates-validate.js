const {
  getUserByUsername,
  getUserByEmail
} = require('../../database/logic/user-logic');

async function existsInDb(req, res, next) {
  const { email, username } = req.body;
  const emailExists = await getUserByEmail(email);
  const usernameExists = await getUserByUsername(username);
  if (emailExists || usernameExists) {
    res.json({
      success: false,
      msg: 'The email or the username you have entered already exists',
    });
  } else {
    next();
  }
}

module.exports = { existsInDb };
