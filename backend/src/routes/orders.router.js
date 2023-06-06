const express = require('express');
const ordersController = require('../controller/orders.controller');

const ordersRouter = express.Router();

ordersRouter.get('/orders', ordersController.getAll)
ordersRouter.post('/orders', ordersController.insert)

module.exports = ordersRouter;