const DataForm = require('../models/send-data-form.js');

const getFormData = (req, res) => {
    DataForm
        .find()
        .then((dataForm) => res.json(dataForm))
        .catch(err => console.error(err))
};

const getFormDataById = (req, res) => {
    DataForm
        .findById(req.params.id)
        .then((dataForm) => res.json(dataForm))
        .catch(err => console.error(err))
};

module.exports = {
    getFormData,
    getFormDataById
};