const ordersModel = require('../model/orders.model');

async function insert(body) {
    const result = await ordersModel.insert(body);
    const insertedOrder = await ordersModel.getById(result.insertId);

	return insertedOrder;
}

module.exports = {
    insert,
}