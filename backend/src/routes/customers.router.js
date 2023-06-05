const express = require('express');
const customersController = require('../controller/customers.controller');

const router = express.Router();

router.get('/customers', customersController.getAll)
router.post('/customers', customersController.insert)

module.exports = router;