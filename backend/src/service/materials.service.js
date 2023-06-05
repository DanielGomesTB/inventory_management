const materialsModel = require('../model/materials.model');


async function insert(body) {
    const result = await materialsModel.insert(body);
    const insertedMaterial = await materialsModel.getById(result.insertId);

	return insertedMaterial;
}

module.exports = {
    insert,
}