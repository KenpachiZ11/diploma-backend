const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sendDataForm = new Schema({
    author: String,
    userEmail: String,
    title: {
        type: String,
        required: true
    },
    description: String,
    linkImage: {
        type: String,
    },
    uploadTime: {
        type: Date,
        default: Date.now,
    }
});

const DataForm = mongoose.model('SendDataForm', sendDataForm);
module.exports = DataForm;