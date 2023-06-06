const ordersModel = require('../model/orders.model');
const ordersService = require('../service/orders.service');

async function getAll(req, res) {
    const result = await ordersModel.getAll();

    return res.status(200).json(result);
}

async function insert(req, res) {
    const result = await ordersService.insert(req.body);

	return res.status(201).json(result);
}

async function update(req, res) {
    const { id } = req.params;
    const result = await ordersModel.update(req.body, id);

    return res.status(200).json(result);
}

module.exports = {
    getAll,
    insert,
    update,
}