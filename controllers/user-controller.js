const User = require("../models/user.js");

const getAllUsers = (req, res) => {
    User
        .find({}).select("-password -__v")
        .then((users) => res.json(users))
        .catch(err => console.error(err))
}
const getSingleUser = (req, res) => {
    let id = req.params.id
    User
        .findOne({"_id": id}).select("-password -__v")
        .then((user) => res.json(user))
        .catch(err => console.error(err))
}
const auth = (req, res) => {
    if (!req.body.email && !req.body.login) {
        res.json({"message": "Пожалуйста заполните адрес электронной почты или логин"});
    }
    if (!req.body.password) {
        res.json({"message": "Пожалуйста заполните пароль"});
    }
    User
        .findOne({"password": req.body.password, $or: [{ "email": req.body.email }, { "login": req.body.login }]}).select("-password -__v")
        .then((user) => res.json(user))
        .catch(err => console.error(err))
}
const addUser = async (req, res) => {
    if (!req.body) {
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
                    let u = {...user};
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
        let user = await User.updateOne({"_id": req.params.id}, req.body)
        if (user?.matchedCount) {
            User
                .findOne({"_id": req.params.id}).select("-password -__v")
                .then((u) => res.json(u))
                .catch(err => console.error(err))
        }
    } catch(err) {
        console.error(err)
    }
}
const delUser = (req, res) => {
    User.deleteOne({"_id": req.params.id})
        .then((msg) => res.json({"message": "Пользователь успешно удален"}))
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
