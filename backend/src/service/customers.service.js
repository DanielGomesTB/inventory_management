const customersModel = require('../model/customers.model');


async function insert(body) {
    const result = await customersModel.insert(body);
    const insertedCustomer = await customersModel.getById(result.insertId);

	return insertedCustomer;
}

module.exports = {
    insert,
}