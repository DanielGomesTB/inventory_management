const productsModel = require('../model/products.model');

async function getAll(req, res) {
    const result = await productsModel.getAll();

    return res.status(200).json(result);
}

module.exports = {
    getAll,
}