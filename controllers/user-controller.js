<<<<<<< HEAD
const User = require("../models/user.js");

const getAllUsers = (req, res) => {
    User
        .find({}).select("-password -__v")
=======
const User = require('../models/user.js');

const getAllUsers = (req, res) => {
    User
        .find({}).select('-password -__v')
>>>>>>> 1b9f474d82b64b081d06ce03bf1de0e6679f4243
        .then((users) => res.json(users))
        .catch(err => console.error(err))
}
const getSingleUser = (req, res) => {
    let id = req.params.id
    User
<<<<<<< HEAD
        .findOne({"_id": id}).select("-password -__v")
=======
        .findOne({'_id': id}).select('-password -__v')
>>>>>>> 1b9f474d82b64b081d06ce03bf1de0e6679f4243
        .then((user) => res.json(user))
        .catch(err => console.error(err))
}
const auth = (req, res) => {
    if (!req.body.email && !req.body.login) {
<<<<<<< HEAD
        res.json({"message": "Пожалуйста заполните адрес электронной почты или логин"});
    }
    if (!req.body.password) {
        res.json({"message": "Пожалуйста заполните пароль"});
    }
    User
        .findOne({"password": req.body.password, $or: [{ "email": req.body.email }, { "login": req.body.login }]}).select("-password -__v")
=======
        res.json({'message': 'Пожалуйста заполните адрес электронной почты или логин'});
    }
    if (!req.body.password) {
        res.json({'message': 'Пожалуйста заполните пароль'});
    }
    User
        .findOne({'password': req.body.password, $or: [{ 'email': req.body.email }, { 'login': req.body.login }]}).select('-password -__v')
>>>>>>> 1b9f474d82b64b081d06ce03bf1de0e6679f4243
        .then((user) => res.json(user))
        .catch(err => console.error(err))
}
const addUser = async (req, res) => {
    if (!req.body) {
<<<<<<< HEAD
        res.json({"message": "Данные не отправлены на сервер"});
    }
    if (!req.body.email && !req.body.login) {
        res.json({"message": "Пожалуйста заполните адрес электронной почты или логин"});
    }
    if (!req.body.password) {
        res.json({"message": "Пожалуйста заполните пароль"});
    }
    try {
        let user = await User.findOne({"email": req.body.email})
        if (user) {
            res.json({"message": "Такой пользователь уже существует"});
        } else {
            new User(req.body).save()
                .then(user => {
                    let u = {...user._doc};
=======
        res.json({'message': 'Данные не отправлены на сервер'});
    }
    if (!req.body.email && !req.body.login) {
        res.json({'message': 'Пожалуйста заполните адрес электронной почты или логин'});
    }
    if (!req.body.password) {
        res.json({'message': 'Пожалуйста заполните пароль'});
    }
    try {
        let user = await User.findOne({'email': req.body.email})
        if (user) {
            res.json({'message': 'Такой пользователь уже существует'});
        } else {
            new User(req.body).save()
                .then(user => {
                    let u = {...user};
>>>>>>> 1b9f474d82b64b081d06ce03bf1de0e6679f4243
                    delete u.password;
                    delete u.__v;
                    res.json(u);
                })
                .catch(err => console.error(err))
        }
    } catch(err) {
        console.error(err)
    }
}
const updUser = async (req, res) => {
    try {
<<<<<<< HEAD
        let user = await User.updateOne({"_id": req.params.id}, req.body)
        if (user?.matchedCount) {
            User
                .findOne({"_id": req.params.id}).select("-password -__v")
=======
        let user = await User.updateOne({'_id': req.params.id}, req.body)
        if (user?.matchedCount) {
            User
                .findOne({'_id': req.params.id}).select('-password -__v')
>>>>>>> 1b9f474d82b64b081d06ce03bf1de0e6679f4243
                .then((u) => res.json(u))
                .catch(err => console.error(err))
        }
    } catch(err) {
        console.error(err)
    }
}
const delUser = (req, res) => {
<<<<<<< HEAD
    User.deleteOne({"_id": req.params.id})
        .then((msg) => res.json({"message": "Пользователь успешно удален"}))
=======
    User.deleteOne({'_id': req.params.id})
        .then((msg) => res.json({'message': 'Пользователь успешно удален'}))
>>>>>>> 1b9f474d82b64b081d06ce03bf1de0e6679f4243
        .catch(err => console.error(err))
}

module.exports = {
    getAllUsers, 
    getSingleUser, 
    auth, 
    addUser, 
    updUser, 
    delUser
}
