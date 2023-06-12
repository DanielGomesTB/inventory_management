const express = require('express');
const materialsController = require('../controller/materials.controller');

const materialsRouter = express.Router();

materialsRouter.get('/materials', materialsController.getAll);
materialsRouter.post('/materials', materialsController.insert);
materialsRouter.put('/materials/:id', materialsController.update);
materialsRouter.patch('/materials/:id', materialsController.deleteMaterial);

module.exports = materialsRouter;