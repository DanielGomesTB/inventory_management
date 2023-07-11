const ordersModel = require('../model/orders.model');

async function insert(body) {
    const {products, ...order} = body;
    const result = await ordersModel.insert(order);
    products.forEach(async (product) => {
        await ordersModel.insertOrderItems({...product, order_id: result.insertId});
    })
    const insertedOrder = await ordersModel.getById(result.insertId);

	return insertedOrder;
}

async function update(body, id) {
    const {products, ...order} = body;
    await ordersModel.update(order, id);
    await ordersModel.deleteOrderItems(id);
    products.forEach(async (product) => {
        await ordersModel.insertOrderItems({...product, order_id: id});
    })
    const updatedProduct = await ordersModel.getById(id);

	return updatedProduct;
}

module.exports = {
    insert,
    update,
}