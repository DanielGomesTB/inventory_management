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
      cpf VARCHAR(11) NOT NULL,
      address VARCHAR(45) NOT NULL,
      email VARCHAR(45) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      is_active BOOLEAN NOT NULL DEFAULT true,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS orders (
      order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      order_status ENUM('pendente', 'iniciado', 'concluído', 'cancelado') DEFAULT 'pendente',
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
      ('Tecido de Seda Branco', 'Branco', 12.50, 30),
      ('Malha Azul Estampada', 'Azul', 18.90, 20),
      ('Botão Vermelho', 'Vermelho', 0.75, 57),
      ('Elástico', NULL, 3.00, 3),
      ('Velcro Dupla Face', NULL, 4.50, 10),
      ('Linha de costura - Retrós 10m', 'Preto', 3.75, 8);

    INSERT INTO products (product_name, selling_price) VALUES
      ('Camisa', 39.90),
      ('Calça', 109.79),
      ('Conjunto Pijama', 89.99),
      ('Saia', 54.50);

    INSERT INTO customers (customer_name, cpf, address, email, phone) VALUES
      ('João Silva', '11122233344', 'Rua Principal 123', 'joao@example.com', '31945678931'),
      ('Ana Oliveira', '44455566677', 'Rua das Flores 123', 'ana@example.com', '41976543211'),
      ('Pedro Santos', '77788899900', 'Avenida Principal 456', 'pedro@example.com', '55923456789'),
      ('Maria Santos', '00011122233', 'Rua Secundária 456', 'maria@example.com', '11987654321');

    INSERT INTO orders (order_status, order_type, customer_id) VALUES
      ('pendente', 'varejo', 1),
      ('concluído', 'varejo', 2),
      ('iniciado', 'atacado', 3),
      ('iniciado', 'varejo', 4),
      ('pendente', 'varejo', 2),
      ('cancelado', 'varejo', 3);

    INSERT INTO order_items (product_id, order_id, quantity) VALUES
      (1, 1, 2),
      (2, 1, 1),
      (3, 2, 1),
      (1, 3, 2),
      (3, 3, 2),
      (2, 4, 3),
      (4, 5, 2),
      (4, 6, 5);

    INSERT INTO products_materials (material_id, product_id, quantity) VALUES
      (1, 1, 1.15),
      (3, 1, 4),
      (4, 1, 0.5),
      (6, 1, 1),
      (2, 2, 2.50),
      (3, 2, 1),
      (4, 2, 0.70),
      (5, 2, 0.50),
      (6, 2, 2),
      (1, 3, 1.80),
      (2, 3, 1.20),
      (4, 3, 1.5),
      (6, 3, 3),
      (1, 4, 1.50),
      (4, 4, 1),
      (6, 4, 1);
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
