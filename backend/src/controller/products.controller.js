const productsModel = require('../model/products.model');
const productsService = require('../service/products.service');

async function getAll(req, res) {
    const result = await productsModel.getAll();

    return res.status(200).json(result);
}

async function insert(req, res) {
    const result = await productsService.insert(req.body);

	return res.status(201).json(result);
}

module.exports = {
    getAll,
    insert,
}