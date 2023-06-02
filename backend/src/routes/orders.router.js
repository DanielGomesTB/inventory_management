const express = require('express');
const ordersController = require('../controller/orders.controller');

const router = express.Router();

router.get('/orders', ordersController.getAll)

module.exports = router;