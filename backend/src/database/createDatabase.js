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
  DROP DATABASE IF EXISTS ${DATABASE};
  CREATE SCHEMA IF NOT EXISTS ${DATABASE} DEFAULT CHARACTER SET utf8;
  USE ${DATABASE};
  
  CREATE TABLE IF NOT EXISTS materials (
    id_material INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    color VARCHAR(45) NULL,
    metriage DECIMAL(5,2) NULL,
    cost_price DECIMAL(5,2) NOT NULL,
    receipt_date DATETIME NOT NULL,
    amount INT NULL
  );
  
  CREATE TABLE IF NOT EXISTS products (
    id_product INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    sales_price DECIMAL(5,2) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS clients (
    id_client INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    address VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phone VARCHAR(45) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS orders (
    id_order INT NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(45) NOT NULL,
    id_client INT NOT NULL,
    PRIMARY KEY (id_order),
    INDEX fk_orders_clients_idx (id_client ASC) VISIBLE,
    CONSTRAINT fk_orders_clients
      FOREIGN KEY (id_client)
      REFERENCES inventory.clients (id_client)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
  );
  
  CREATE TABLE IF NOT EXISTS ordered_products (
    id_product INT NOT NULL,
    id_order INT NOT NULL,
    PRIMARY KEY (id_product, id_order),
    INDEX fk_produtos_has_pedidos_pedidos1_idx (id_order ASC) VISIBLE,
    INDEX fk_produtos_has_pedidos_produtos1_idx (id_product ASC) VISIBLE,
    CONSTRAINT fk_produtos_has_pedidos_produtos1
      FOREIGN KEY (id_product)
      REFERENCES inventory.products (id_product)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT fk_produtos_has_pedidos_pedidos1
      FOREIGN KEY (id_order)
      REFERENCES inventory.orders (id_order)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
  );
  
  CREATE TABLE IF NOT EXISTS materials_products (
    id_materials INT NOT NULL,
    id_products INT NOT NULL,
    PRIMARY KEY (id_materials, id_products),
    INDEX fk_mercadorias_has_produtos_produtos1_idx (id_products ASC) VISIBLE,
    INDEX fk_mercadorias_has_produtos_mercadorias1_idx (id_materials ASC) VISIBLE,
    CONSTRAINT fk_mercadorias_has_produtos_mercadorias1
      FOREIGN KEY (id_materials)
      REFERENCES inventory.materials (id_material)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT fk_mercadorias_has_produtos_produtos1
      FOREIGN KEY (id_products)
      REFERENCES inventory.products (id_product)
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
