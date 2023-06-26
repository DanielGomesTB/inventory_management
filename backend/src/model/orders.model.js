const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = `
        SELECT orders.*,
            customers.customer_name,
            JSON_ARRAYAGG(JSON_OBJECT(
                'product_id', products.product_id,
                'product_name', products.product_name,
                'quantity', order_items.quantity,
                'price', products.selling_price
            )) AS products
        FROM orders
        JOIN customers ON orders.customer_id = customers.customer_id
        JOIN order_items ON orders.order_id = order_items.order_id
        JOIN products ON order_items.product_id = products.product_id
        GROUP BY orders.order_id;
    `;
    const [result] = await dbConnection.execute(query);

	return result;
}

async function getById(id) {
    const query = 'SELECT * FROM orders WHERE order_id=(?)';
    const [result] = await dbConnection.execute(query, [id]);

	return result;
}

async function insert(payload) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).join(', ');
    const placeholders = values.map((_value) => '?').join(', ');
    const query = `INSERT INTO orders (${columns}) VALUES(${placeholders})`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

async function insertOrderItem(payload) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).join(', ');
    const placeholders = values.map((_value) => '?').join(', ');
    const query = `INSERT INTO order_items (${columns}) VALUES(${placeholders})`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

async function update(payload, id) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).map((column) => `${column} = ?`).join(', ');
    const query = `UPDATE orders SET ${columns} WHERE order_id = ${id}`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

module.exports = {
    getAll,
    getById,
    insert,
    insertOrderItem,
    update,
}