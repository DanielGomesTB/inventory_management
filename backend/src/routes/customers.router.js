const express = require('express');
const customersController = require('../controller/customers.controller');

const customersRouter = express.Router();

customersRouter.get('/customers', customersController.getAll)
customersRouter.post('/customers', customersController.insert)
customersRouter.put('/customers/:id', customersController.update)
customersRouter.patch('/customers/:id', customersController.deleteCustomers)

module.exports = customersRouter;