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
        .findOne({"_id": id}).select("-__v")
        .then((user) => res.json(user))
        .catch(err => console.error(err))
}
const auth = (req, res) => {
    if (!req.body.email || !req.body.login) {
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
const addUser = (req, res) => {
    if (!req.body) {
        res.json({"message": "Данные не отправлены на сервер"});
    }
    if (!req.body.email || !req.body.login) {
        res.json({"message": "Пожалуйста заполните адрес электронной почты или логин"});
    }
    if (!req.body.password) {
        res.json({"message": "Пожалуйста заполните пароль"});
    }
    User.findOne({"email": req.body.email})
        .then((user) => {
            if (user) {
                res.json({"message": "Такой пользователь уже существует"});
            }
            User(req.body).save()
                .then(user => {
                    console.log("omnomnom", user); 
                    res.send("ok")
                })
        })
        .catch(err => console.error(err))
        
}
const updUser = (req, res) => {
    User.updateOne({"_id": req.params.id}, req.body)
    .then(user => {
        console.log("tratata", user); 
        res.send("ok")
    })
    .catch(err => console.error(err))
}
const delUser = (req, res) => {
    User.deleteOne({"_id": req.params.id})
        .then((msg) => s.json({"message": "Пользователь успешно удален"}))
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
