const express = require('express');
const router = express.Router();
const { orderToEmail, getOrder } = require('../controllers/order-controller.js');

router.get('/about/id', getOrder);
router.post('/about/id', orderToEmail);

module.exports = router;