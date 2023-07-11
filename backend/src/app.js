const express = require('express');
const cors = require('cors');
//criando release-backend-2
const productsRouter = require('./routes/products.router');
const ordersRouter = require('./routes/orders.router');
const materialsRouter = require('./routes/materials.router');
const customersRouter = require('./routes/customers.router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(productsRouter);
app.use(ordersRouter);
app.use(materialsRouter);
app.use(customersRouter);

module.exports = app;