const express = require('express');
const router = express.Router();
const { getForm, getFormData } = require('../controllers/form-controller.js');

router.get('/form', getForm);
router.post('/form', getFormData);

module.exports = router;