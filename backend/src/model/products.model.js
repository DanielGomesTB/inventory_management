const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = 'SELECT * FROM products WHERE is_active = true';
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

async function insertProductMaterial(payload) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).join(', ');
    const placeholders = values.map((_value) => '?').join(', ');
    const query = `INSERT INTO products_materials (${columns}) VALUES(${placeholders})`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

async function update(payload, id) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).map((column) => `${column} = ?`).join(', ');
    const query = `UPDATE products SET ${columns} WHERE product_id = ${id}`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

// async function updateProductMaterial(payload, id) {
//     const values = Object.values(payload);
//     const columns = Object.keys(payload).map((column) => `${column} = ?`).join(', ');
//     const query = `UPDATE products_materials SET ${columns} 
//         WHERE product_id = ${id} AND material_id = ${payload.material_id}`;
//     const [result] = await dbConnection.execute(query, values);

// 	return result;
// }

// async function updateProductMaterial(payload, id) {
//     const query = `UPDATE products_materials SET quantity = ${payload.quantity} 
//         WHERE product_id = ${id} AND material_id = ${payload.material_id}`;
//     const [result] = await dbConnection.execute(query);

// 	return result;
// }

async function deleteProduct(id) {
    const query = `UPDATE products SET is_active = NOT is_active WHERE product_id = ${id}`;
    const [result] = await dbConnection.execute(query);

	return result;
}

module.exports = {
    getAll,
    getById,
    insert,
    insertProductMaterial,
    update,
    deleteProduct,
    // updateProductMaterial,
}