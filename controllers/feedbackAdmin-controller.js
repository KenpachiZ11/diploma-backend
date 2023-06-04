const ContactInfoForm = require('../models/feedback-data-form.js');

const getContactInfoForm = (req, res) => {
    ContactInfoForm
        .find()
        .then((dataForm) => res.json(dataForm))
        .catch(err => console.error(err))
}

module.exports = {
    getContactInfoForm
};