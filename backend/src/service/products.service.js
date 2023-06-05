const productsModel = require('../model/products.model');


async function insert(body) {
    const result = await productsModel.insert(body);
    const insertedProduct = await productsModel.getById(result.insertId);

	return insertedProduct;
}

module.exports = {
    insert,
}