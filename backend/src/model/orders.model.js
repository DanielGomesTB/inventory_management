const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = 'SELECT * FROM orders';
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

module.exports = {
    getAll,
    getById,
    insert,
    insertOrderItem,
}