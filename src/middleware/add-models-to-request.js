const User = require('../db/models/user');
const Clothes = require('../db/models/clothes')
const Bookmarks = require('../db/models/bookmarks')
const Likes = require('../db/models/likes')

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Clothes,
    Bookmarks,
    Likes
  };
  next();
};

module.exports = addModelsToRequest;
