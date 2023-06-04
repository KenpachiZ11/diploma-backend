const express = require('express');
const router = express.Router();
const { getContactInfoForm } = require('../controllers/feedbackAdmin-controller.js');

router.get('/feedback-admin', getContactInfoForm);

module.exports = router;