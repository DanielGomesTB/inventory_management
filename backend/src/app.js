const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

// iniciando nova branch


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;