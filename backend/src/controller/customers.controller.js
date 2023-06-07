const customersModel = require('../model/customers.model');
const customersService = require('../service/customers.service');

async function getAll(req, res) {
    const result = await customersModel.getAll();

    return res.status(200).json(result);
}

async function insert(req, res) {
    const result = await customersService.insert(req.body);

	return res.status(201).json(result);
}

async function update(req, res) {
    const { id } = req.params;
    const result = await customersModel.update(req.body, id);

    return res.status(200).json(result);
}

async function deleteCustomers(req, res) {
    const { id } = req.params;
    const result = await customersModel.deleteCustomers(req.body, id);

    return res.status(200).json(result);
}

module.exports = {
    getAll,
    insert,
    update,
    deleteCustomers,
}