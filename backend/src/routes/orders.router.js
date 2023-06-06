const express = require('express');
const ordersController = require('../controller/orders.controller');

const ordersRouter = express.Router();

ordersRouter.get('/orders', ordersController.getAll)
ordersRouter.post('/orders', ordersController.insert)
ordersRouter.put('/orders/:id', ordersController.update)

module.exports = ordersRouter;