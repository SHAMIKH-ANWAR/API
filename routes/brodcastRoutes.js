const express = require('express');
const { BrodcastOrder } = require('../controllers/orderController');
const brodcastRoutes = express.Router();

brodcastRoutes.post('/order', BrodcastOrder);

module.exports = brodcastRoutes;