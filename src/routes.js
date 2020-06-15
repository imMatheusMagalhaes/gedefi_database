const express = require('express');
const routes = express.Router();
const StoreController = require('./controllers/StoreController')

routes.get("/stores", StoreController.index);
routes.post("/stores", StoreController.create);
routes.put("/stores/:id", StoreController.update);
routes.delete("/stores/:id", StoreController.delete);

module.exports = routes;