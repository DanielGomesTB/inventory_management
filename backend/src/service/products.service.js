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

async function update(body, id) {
    const {materials, ...product} = body;
    await productsModel.update(product, id);
    await productsModel.deleteProductMaterial(id);
    materials.forEach(async (material) => {
        await productsModel.insertProductMaterial({...material, product_id: id});
    })
    const updatedProduct = await productsModel.getById(id);

	return updatedProduct;
}

module.exports = {
    insert,
    update,
}