const ordersModel = require('../model/orders.model');

async function getAll(req, res) {
    const result = await ordersModel.getAll();

    return res.status(200).json(result);
}

module.exports = {
    getAll,
}