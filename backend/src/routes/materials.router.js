const express = require('express');
const materialsController = require('../controller/materials.controller');

const router = express.Router();

router.get('/materials', materialsController.getAll)

module.exports = router;