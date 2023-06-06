const materialsModel = require('../model/materials.model');
const materialsService = require('../service/materials.service');

async function getAll(req, res) {
    const result = await materialsModel.getAll();

    return res.status(200).json(result);
}

async function insert(req, res) {
    const result = await materialsService.insert(req.body);

	return res.status(201).json(result);
}

async function update(req, res) {
    const { id } = req.params;
    const result = await materialsModel.update(req.body, id);

    return res.status(200).json(result);
}

module.exports = {
    getAll,
    insert,
    update,
}