const Token = require('../models/Token');
const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');


// The part of the database logic that is responsible for generating a verification token and verifying it

async function genVerificationToken(userId) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(uuid(), salt);
    if (salt && hash) {
      const hashedToken = hash;
      const savedToken = await Token.create({
        userId: userId,
        token: hashedToken
      });
      if (savedToken) {
        return hashedToken;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

async function isTokenVerified(sentToken) {
  try {
    const tokenExists = await Token.findOne({ token: sentToken });
    if (tokenExists) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  genVerificationToken,
  isTokenVerified
};
