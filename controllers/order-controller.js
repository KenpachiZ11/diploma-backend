const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const orderToEmail = (req, res) => {
    const { to, subject, text } = req.body;

    if(!to || !subject || !text) {
        return res.status(400).send('Поля не заполнены');
    }

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        pool: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS_EMAIL
        }
    }));

    let mailOptions = {
        from: 'danek0011@gmail.ru',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    };
    console.log(mailOptions)

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


const getOrder = (req, res) => {
    res.json({ message: "Hello from server 'getOrder" });
}

module.exports = {
    orderToEmail,
    getOrder
};