const express = require('express');
const routes = express.Router();
const StoreController = require('./controllers/StoreController')

routes.get("/stores", StoreController.Index);

module.exports = routes;