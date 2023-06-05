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
// {
// order_type: 'atacado',
// customer_id: 1,
// products: [
//     {product_id: 1, quantity: 1},
//     {product_id: 2, quantity: 2},
//   ]
// } 

module.exports = {
    insert,
}