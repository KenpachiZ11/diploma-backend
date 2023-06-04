const express = require('express');
const router = express.Router();
const { getFormData, getFormDataById } = require('../controllers/about-controller.js');

router.get('/about', getFormData);
router.get('/about/:id', getFormDataById);

module.exports = router;
