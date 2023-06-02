const dbConnection = require('../database/mySqlConnection');

async function getAll() {
    const query = 'SELECT * FROM orders';
    const [result] = await dbConnection.execute(query);

	return result;
}

module.exports = {
    getAll,
}