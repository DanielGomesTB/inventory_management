const express = require('express');
const ordersController = require('../controller/orders.controller');

const router = express.Router();

router.get('/orders', ordersController.getAll)
router.post('/orders', ordersController.insert)

module.exports = router;