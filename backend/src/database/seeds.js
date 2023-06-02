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
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      product_name VARCHAR(100) NOT NULL,
      selling_price DECIMAL(10,2) NOT NULL,
      is_active BOOLEAN NOT NULL DEFAULT true,
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
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS orders (
      order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      order_status ENUM('pendente', 'iniciado', 'concluído', 'cancelado'),
      order_type ENUM('atacado', 'varejo'),
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
      PRIMARY KEY (material_id, product_id),
      FOREIGN KEY (material_id) REFERENCES inventory.materials (material_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      FOREIGN KEY (product_id) REFERENCES inventory.products (product_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    );

    INSERT INTO materials (material_name, color, cost_price, stock) VALUES
      ('Tecido de Seda Branco', 'Branco', 10.50, 30),
      ('Botão Vermelho', 'Vermelho', 0.50, 57),
      ('Elástico', NULL, 1.00, 3),
      ('Velcro Dupla Face', NULL, 2.50, 1);

    INSERT INTO products (product_name, selling_price) VALUES
      ('Camisa', 25.99),
      ('Calça', 39.99),
      ('Vestido', 49.99),
      ('Saia', 24.99);

    INSERT INTO customers (customer_name, cpf, address, email, phone) VALUES
      ('João Silva', '123456789', 'Rua Principal 123', 'joao@example.com', '123-456-7890'),
      ('Ana Oliveira', '987654321', 'Rua das Flores 123', 'ana@example.com', '987-654-3210'),
      ('Pedro Santos', '123456789', 'Avenida Principal 456', 'pedro@example.com', '123-456-7890'),
      ('Maria Santos', '987654321', 'Rua Secundária 456', 'maria@example.com', '987-654-3210');

    INSERT INTO orders (order_status, order_type, customer_id) VALUES
      ('pendente', 'varejo', 1),
      ('concluído', 'varejo', 2),
      ('iniciado', 'atacado', 3),
      ('iniciado', 'varejo', 4),
      ('pendente', 'varejo', 2);

    INSERT INTO order_items (product_id, order_id, quantity) VALUES
      (1, 1, 2),
      (2, 1, 1),
      (3, 2, 1),
      (1, 3, 1),
      (3, 3, 2),
      (2, 5, 3),
      (4, 4, 2);

    INSERT INTO products_materials (material_id, product_id, quantity) VALUES
      (1, 1, 2.50),
      (2, 1, 4.00),
      (3, 2, 1.75),
      (4, 3, 0.50),
      (1, 4, 3.75),
      (3, 4, 2.00);
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
