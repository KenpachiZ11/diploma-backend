const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const orderToEmail = (req, res) => {
    const { to, subject, text } = req.body;

    if(!to || !subject || !text) {
        return res.status(400).send('Поля не заполнены');
    }

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        // pool: true,
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            pass: process.env.PASS_EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN,
        }
    }));

    let mailOptions = {
        from: 'danek0011@gmail.com',
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