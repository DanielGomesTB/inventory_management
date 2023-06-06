const express = require('express');
const customersController = require('../controller/customers.controller');

const customersRouter = express.Router();

customersRouter.get('/customers', customersController.getAll)
customersRouter.post('/customers', customersController.insert)

module.exports = customersRouter;