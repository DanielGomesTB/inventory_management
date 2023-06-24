const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = 'SELECT * FROM materials WHERE is_active = true';
    const [result] = await dbConnection.execute(query);

	return result;
}

async function getById(id) {
    const query = 'SELECT * FROM materials WHERE material_id=(?)';
    const [result] = await dbConnection.execute(query, [id]);

	return result;
}

async function insert(payload) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).join(', ');
    const placeholders = values.map((_value) => '?').join(', ');
    const query = `INSERT INTO materials (${columns}) VALUES(${placeholders})`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

async function update(payload, id) {
    const values = Object.values(payload);
    const columns = Object.keys(payload).map((column) => `${column} = ?`).join(', ');
    const query = `UPDATE materials SET ${columns} WHERE material_id = ${id}`;
    const [result] = await dbConnection.execute(query, values);

	return result;
}

async function deleteMaterial(id) {
    const query = `UPDATE materials SET is_active = NOT is_active WHERE material_id = ${id}`;
    const [result] = await dbConnection.execute(query);

	return result;
}

module.exports = {
    getAll,
    getById,
    insert,
    update,
    deleteMaterial,
}