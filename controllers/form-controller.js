const DataForm = require('../models/send-data-form.js');

const getForm = (req, res) => {
    res.json({ message: "Hello from server 'getForm" });
};

const getFormData = async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const postFormDate = new DataForm({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        linkImage: req.body.linkImage
    });

    console.log(postFormDate, 'postFormDate/form-route.js');

    await postFormDate.save();
}

module.exports = {
    getForm,
    getFormData
};