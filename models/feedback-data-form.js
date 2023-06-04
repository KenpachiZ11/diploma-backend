const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactInfoForm = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    sms: {
        type: String,
        required: true
    },
    uploadTime: {
        type: Date,
        default: Date.now,
    }
});

const ContactInfoForm = mongoose.model('ContactInfoForm', contactInfoForm);
module.exports = ContactInfoForm;