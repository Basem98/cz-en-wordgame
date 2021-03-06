const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../../config/envConfig');
const {
  getRandomWords
} = require('../../database/logic/word-logic');
const {
  createUser,
  getUserById,
  updateScoreAndTitle,
  getUserByUsername,
  getUserByEmail,
  updateCurrentUserHistory,
  sortUsersByScore
} = require('../../database/logic/user-logic');
const { sendConfirmationEmail } = require('../verification/verification-email');
const { isTokenVerified } = require('../../database/logic/token-logic');


// The controllers for the endpoints that are accessible to the users, on which the application as a whole depends

function signup(req, res) {
  const newUser = req.body;
  createUser(newUser).then(async (user) => {
    const confirmationSent = await sendConfirmationEmail(user.email, user._id, user.fullName);
    if (confirmationSent) {
      res.json({
        success: true,
        msg: `A verification email has been sent to ${user.email}`
      });
    }
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function signin(req, res) {
  const { username, password } = req.body;
  getUserByUsername(username).then(async (user) => {
    const userData = user;
    const matchedPass = await bcrypt.compare(password, userData.password);
    if (matchedPass) {
      userData.password = undefined;
      const jwtPayload = { id: userData._id };
      const token = jwt.sign(jwtPayload, config.APP.SECRET_KEY, {
        expiresIn: 8 * 3600
      });
      if (user.isVerified) {
        res.json({
          success: true,
          user: userData,
          token
        });
      } else {
        res.json({
          success: false,
          user: { isVerified: false },
          msg: 'Your email is not verified yet. You have to verify your email in order to sign in to your account.'
        });
      }
    } else {
      res.json({
        success: false,
        msg: 'You have entered a wrong password'
      });
    }
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: 'There is no user with the username you have entered'
      });
    });
}

async function verifyUser(req, res) {
  try {
    const { email, token } = req.body;
    const isVerificationConfirmed = await isTokenVerified(token);
    const currentUser = await getUserByEmail(email);
    if (isVerificationConfirmed && currentUser && !currentUser.isVerified) {
      currentUser.isVerified = true;
      currentUser.save();
      res.json({
        success: true,
        user: currentUser
      });
    } else {
      res.json({
        success: false,
        msg: 'The token you have entered is either wrong or expired. Try resending the verification token and repeating the process'
      });
    }
  } catch (error) {
    res.json({
      success: false,
      msg: 'The token you have entered is either wrong or expired. Try resending the verification token and repeating the process'
    });
  }
}

function resendVerification(req, res) {
  const { email } = req.body;
  getUserByEmail(email).then(async (currentUser) => {
    const confirmationSent = await sendConfirmationEmail(currentUser.email, currentUser._id, currentUser.fullName);
    if (confirmationSent) {
      res.json({
        success: true,
        msg: `A verification email has been sent to ${currentUser.email}`
      });
    } else {
      res.json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    }
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: 'The token you have entered is either wrong or expired. Try resending the verification token and repeating the process'
      });
    });
}

function getUserData(req, res) {
  const userID = req.user._id;
  getUserById(userID).then((user) => {
    const userData = user;
    userData.password = undefined;
    res.json({
      success: true,
      userData
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function updateGameInfo(req, res) {
  const { id, score } = req.body;
  updateScoreAndTitle(id, score).then((updatedData) => {
    const updatedUser = updatedData;
    updatedUser.password = undefined;
    res.json({
      success: true,
      currentUser: updatedUser
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

function getWords(req, res) {
  const lang = req.params.lang;
  const { userId } = req.body;
  getRandomWords(lang, userId).then((chosenWords) => {
    res.json({
      success: true,
      chosenWords
    });
  })
    .catch((error) => {
      console.error(error)
      res.json({
        success: false,
        msg: error
      });
    });
}

function updateGameHistory(req, res) {
  const { id, newWord } = req.body;
  updateCurrentUserHistory(id, newWord).then((updatedUser) => {
    res.json({
      success: true,
      currentUser: updatedUser
    });
  }).catch((error) => {
    res.json({
      success: false,
      msg: error
    });
  });
}

function getTopTenUsers(req, res) {
  sortUsersByScore().then((topTenUsers) => {
    res.json({
      success: true,
      topTenUsers
    });
  })
    .catch((error) => {
      res.json({
        success: false,
        msg: error
      });
    });
}

module.exports = {
  signup,
  signin,
  verifyUser,
  resendVerification,
  getUserData,
  updateGameInfo,
  updateGameHistory,
  getWords,
  getTopTenUsers
};
