require('dotenv').config();
const dbConnection = require('./mySqlConnection');

const colors = {
	green: '\x1b[32m',
	cyan: '\x1b[36m',
	red: '\x1b[31m',
	reset: '\x1b[0m'
};

const DATABASE = process.env.MYSQL_DATABASE;

async function dbCreateDatabase() {
	const query = `
    SET time_zone = 'America/Sao_Paulo';
    DROP DATABASE IF EXISTS ${DATABASE};
    CREATE SCHEMA IF NOT EXISTS ${DATABASE} DEFAULT CHARACTER SET utf8;
    USE ${DATABASE};
    
    CREATE TABLE IF NOT EXISTS materials (
      material_id INT AUTO_INCREMENT PRIMARY KEY,
      material_name VARCHAR(100) NOT NULL,
      color VARCHAR(45) NULL,
      cost_price DECIMAL(10,2) NOT NULL,
      stock DECIMAL(10,2) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS products (
      product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      product_name VARCHAR(100) NOT NULL,
      selling_price DECIMAL(10,2) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS customers (
      customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      customer_name VARCHAR(45) NOT NULL,
      cpf VARCHAR(20) NOT NULL,
      address VARCHAR(45) NOT NULL,
      email VARCHAR(45) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS orders (
      order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      status VARCHAR(45) NOT NULL,
      customer_id INT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (customer_id) REFERENCES inventory.customers (customer_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    );
    
    CREATE TABLE IF NOT EXISTS order_items (
      product_id INT NOT NULL,
      order_id INT NOT NULL,
      quantity INT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (product_id, order_id),
      FOREIGN KEY (product_id) REFERENCES inventory.products (product_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      FOREIGN KEY (order_id) REFERENCES inventory.orders (order_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    );
    
    CREATE TABLE IF NOT EXISTS products_materials (
      material_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity DECIMAL(10,2) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (material_id, product_id),
      FOREIGN KEY (material_id) REFERENCES inventory.materials (material_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      FOREIGN KEY (product_id) REFERENCES inventory.products (product_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    );
  `;

	await dbConnection.query(query);

	dbConnection.end();
}

try {
	dbCreateDatabase()
		.then(() => console.info(`➜  MySQL: ${colors.green}database and tables successfully created!${colors.reset}\n`));
} catch(error) {
	console.info(`➜  MySQL: ${colors.red}Error while trying to create database.${colors.reset}\n`);
}
