const express = require('express');
const passport = require('passport');

const { isAdmin } = require('./authentication/adminAuth');
const { validateSignup } = require('./validation/signup-validate');
const { existsInDb } = require('./validation/duplicates-validate');
const {
  cleanDb,
  addWord
} = require('./controllers/admin-controllers');
const {
  signup,
  signin,
  verifyUser,
  resendVerification,
  getUserData,
  updateGameInfo,
  updateGameHistory,
  getTopTenUsers,
  getWords
} = require('./controllers/user-controllers');

const router = express.Router();

// User collection endpoints:
router.post('/signup', validateSignup, existsInDb, signup);
router.post('/signin', signin);
router.post('/confirmverification', verifyUser);
router.post('/resendverification', resendVerification);
router.get('/getuserdata', passport.authenticate('jwt', { session: false }), getUserData);
router.get('/gettopten', passport.authenticate('jwt', { session: false }), getTopTenUsers);
router.put('/updategameinfo', passport.authenticate('jwt', { session: false }), updateGameInfo);
router.put('/updategamehistory', passport.authenticate('jwt', { session: false }), updateGameHistory);

// Word collection endpoints:
router.post('/getrandomwords/:lang', passport.authenticate('jwt', { session: false }), getWords);

// DB CRUD endpoints for admin only
router.delete('/cleandatabase', isAdmin, cleanDb);
router.post('/addword', isAdmin, addWord);

module.exports = router;
