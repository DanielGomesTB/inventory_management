require('dotenv').config();
const dbConnection = require('./mySqlConnection');

const colors = {
	green: '\x1b[32m',
	cyan: '\x1b[36m',
	red: '\x1b[31m',
	reset: '\x1b[0m'
};

const DATABASE = process.env.MYSQL_DATABASE;

async function dbSeedAndReset() {
	const query = `
    DROP DATABASE IF EXISTS ${DATABASE};

    CREATE DATABASE ${DATABASE};

    USE ${DATABASE};

    CREATE TABLE products
    (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        quantity decimal(5,2) NOT NULL
    );

    INSERT INTO products VALUES (1,'AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML',18.44);
    INSERT INTO products VALUES (2,'BEBIDA ENERGÉTICA VIBE 2L',8.09);
    INSERT INTO products VALUES (3,'ENERGÉTICO  RED BULL ENERGY DRINK 250ML',6.56);
  `;

	await dbConnection.query(query);

	dbConnection.end();
}

try {
	dbSeedAndReset()
		.then(() => console.info(`➜  MySQL: ${colors.green}seeds successfully created!${colors.reset}\n`));
} catch(error) {
	console.info(`➜  MySQL: ${colors.red}Error while trying to seed.${colors.reset}\n`);
}
