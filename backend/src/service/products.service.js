const productsModel = require('../model/products.model');


async function insert(body) {
    const {materials, ...product} = body;
    const result = await productsModel.insert(product);
    materials.forEach(async (material) => {
        await productsModel.insertProductMaterial({...material, product_id: result.insertId})
    })
    const insertedProduct = await productsModel.getById(result.insertId);

	return insertedProduct;
}

module.exports = {
    insert,
}