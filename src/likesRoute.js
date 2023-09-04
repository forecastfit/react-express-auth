const express = require('express');
const userController = require('./controllers/user');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const likesRouter = express.Router();
likesRouter.use(addModelsToRequest);

likesRouter.post('/',  likesController.create);

likesRouterRouter.get('/likes', likesController.list);

likesRouter.delete('/', likesController.deleteBookmarks);


module.exports = likesRouter;