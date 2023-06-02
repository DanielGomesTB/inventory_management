const customersModel = require('../model/customers.model');

async function getAll(req, res) {
    const result = await customersModel.getAll();

    return res.status(200).json(result);
}

module.exports = {
    getAll,
}