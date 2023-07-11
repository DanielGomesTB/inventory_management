const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = `
        SELECT products.*,
            JSON_ARRAYAGG(JSON_OBJECT(
                'material_id', materials.material_id,
                'material_name', materials.material_name,
                'stock', materials.stock,
                'cost_price', materials.cost_price
            )) AS materials
        FROM products
        JOIN products_materials ON products.product_id = products_materials.product_id
        JOIN materials ON materials.material_id = products_materials.material_id
        GROUP BY products.product_id;
    `;
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

async function update(payload, id) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).map((column) => `${column} = ?`).join(', ');
    const query = `UPDATE products SET ${columns} WHERE product_id = ${id}`;
    const [result] = await dbConnection.execute(query, values);
    
	return result;
}

async function deleteProduct(id) {
    const query = `UPDATE products SET is_active = NOT is_active WHERE product_id = ${id}`;
    const [result] = await dbConnection.execute(query);
    
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

async function deleteProductMaterial(id) {
    const query = `DELETE FROM products_materials WHERE product_id = ${id}`;
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
    deleteProductMaterial,
}