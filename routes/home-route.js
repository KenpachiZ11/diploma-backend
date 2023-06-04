const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/home-controller.js');

router.get('/', getHome);

module.exports = router;