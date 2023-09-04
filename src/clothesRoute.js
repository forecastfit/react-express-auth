const express = require('express');
const clothesController = require('./controllers/clothes');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const clothesRouter = express.Router();
clothesRouter.use(addModelsToRequest);

clothesRouter.post('/uploadClothes', clothesController.create);

clothesRouter.get('/clothes', clothesController.list);

clothesRouter.patch('/updateClothes',clothesController.update);

clothesRouter.delete('/removeClothes',clothesController.deleteClothes);


module.exports = clothesRouter;
