const express = require('express');
const router = express.Router();
const { orderToEmail, getOrder } = require('../controllers/order-controller.js');

router.get('/id', getOrder);
router.post('/id', orderToEmail);

module.exports = router;