const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    login: String,
    name: String,
    description: String,
    content: [
        { type : mongoose.Schema.Types.ObjectId, ref : 'SendDataForm' }
    ],
    status: {
        type: String,
        default: "user"
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
