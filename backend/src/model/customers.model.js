const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = 'SELECT * FROM customers';
    const [result] = await dbConnection.execute(query);

	return result;
}

module.exports = {
    getAll,
}