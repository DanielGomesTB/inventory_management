const express = require('express');
const productsController = require('../controller/products.controller');

const productsRouter = express.Router();

productsRouter.get('/products', productsController.getAll)
productsRouter.post('/products', productsController.insert)
productsRouter.put('/products/:id', productsController.update)

module.exports = productsRouter;