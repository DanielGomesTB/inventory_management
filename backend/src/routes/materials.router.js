const express = require('express');
const materialsController = require('../controller/materials.controller');

const materialsRouter = express.Router();

materialsRouter.get('/materials', materialsController.getAll);
materialsRouter.post('/materials', materialsController.insert);
materialsRouter.put('/materials/:id', materialsController.update)

module.exports = materialsRouter;