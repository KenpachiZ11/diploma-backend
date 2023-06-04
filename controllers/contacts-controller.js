const ContactInfoForm = require('../models/feedback-data-form.js');

const getContacts = (req, res) => {
    res.json({ message: "Hello from server 'getContacts" });
}

const getContactInfoForm = async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const contactInfoForm = new ContactInfoForm({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        sms: req.body.sms
    });

    console.log(contactInfoForm, 'contactInfoForm/contacts-controller.js');

    await contactInfoForm.save();
}

module.exports = {
    getContacts,
    getContactInfoForm
};