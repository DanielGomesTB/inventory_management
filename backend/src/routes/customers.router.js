const express = require('express');
const customersController = require('../controller/customers.controller');

const router = express.Router();

router.get('/customers', customersController.getAll)

module.exports = router;