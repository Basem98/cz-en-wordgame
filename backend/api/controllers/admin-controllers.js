const {
  deleteAll
} = require('../../database/logic/user-logic');
const {
  insertWord
} = require('../../database/logic/word-logic');

function cleanDb(req, res) {
  deleteAll().then((isDeleted) => {
    if (isDeleted) {
      res.json({
        success: true
      });
    }
  })
    .catch(() => {
      res.status(401).json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    });
}

function addWord(req, res) {
  const { word, meaning, lang } = req.body;
  insertWord(word, meaning, lang).then((isInserted) => {
    if (isInserted) {
      res.json({
        success: true
      });
    } else {
      res.status(401).json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    }
  })
    .catch(() => {
      res.status(401).json({
        success: false,
        msg: 'Something went wrong. Please try again'
      });
    });
}

module.exports = {
  cleanDb,
  addWord
};
