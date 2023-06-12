const ordersModel = require('../model/orders.model');

async function insert(body) {
    const {products, ...order} = body;
    const result = await ordersModel.insert(order);
    products.forEach(async (product) => {
        await ordersModel.insertOrderItem({...product, order_id: result.insertId});
    })
    const insertedOrder = await ordersModel.getById(result.insertId);

	return insertedOrder;
}

module.exports = {
    insert,
}