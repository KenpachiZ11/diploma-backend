const express = require('express');
const router = express.Router();
const { auth } = require('../controllers/auth-controller.js');

router.get('/auth', auth);


module.exports = router;