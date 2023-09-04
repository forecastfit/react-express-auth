const express = require('express');
const bookmarksController = require('./controllers/bookmarks');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const bookmarksRouter = express.Router();
bookmarksRouter.use(addModelsToRequest);

bookmarksRouter.post('/createBookmark/:id',  bookmarksController.create);

bookmarksRouterRouter.get('/bookmarks', bookmarksController.list);

bookmarksRouter.delete('/removeBookmarks', bookmarksController.deleteBookmarks);


module.exports = bookmarksRouter;
