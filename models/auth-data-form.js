const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auth = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    uploadTime: {
        type: Date,
        default: Date.now,
    }
});

const DataForm = mongoose.model('auth', auth);
module.exports = DataForm;