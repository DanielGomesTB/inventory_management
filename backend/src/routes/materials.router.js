const express = require('express');
const materialsController = require('../controller/materials.controller');

const router = express.Router();

router.get('/materials', materialsController.getAll);
router.post('/materials', materialsController.insert);

module.exports = router;