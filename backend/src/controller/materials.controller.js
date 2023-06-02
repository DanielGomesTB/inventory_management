const materialsModel = require('../model/materials.model');

async function getAll(req, res) {
    const result = await materialsModel.getAll();

    return res.status(200).json(result);
}

module.exports = {
    getAll,
}