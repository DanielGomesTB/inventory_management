const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = 'SELECT * FROM products';
    const [result] = await dbConnection.execute(query);

	return result;
}

async function getById(id) {
    const query = 'SELECT * FROM products WHERE product_id=(?)';
    const [result] = await dbConnection.execute(query, [id]);

	return result;
}

async function insert(payload) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).join(', ');
    const placeholders = values.map((_value) => '?').join(', ');
    const query = `INSERT INTO products (${columns}) VALUES(${placeholders})`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

module.exports = {
    getAll,
    getById,
    insert,
}