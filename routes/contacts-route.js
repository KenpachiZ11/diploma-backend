const express = require('express');
const router = express.Router();
const { getContacts, getContactInfoForm } = require('../controllers/contacts-controller.js');

router.get('/contacts', getContacts);
router.post('/contacts', getContactInfoForm)

module.exports = router;