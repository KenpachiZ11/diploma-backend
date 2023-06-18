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
            user: 'username',
            pass: 'password'
        }
    }));

    // const mailData = {
    //     from: 'youremail@gmail.com',  // sender address
    //     to: req.body.to,   // list of receivers
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!',
    //     html: '<b>Hey there! </b>',
    // };

    console.log(req.body);

    

    let mailOptions = {
        from: 'danek0011@gmail.ru',
        // to: 
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
        // html: 
        //     `
        //         <div style="padding:10px;border-style: ridge">
        //         <h3>Details Order</h3>
        //         <ul>
        //             <li>Email: ${req.body.to}</li>
        //             <li>Subject: ${req.body.subject}</li>
        //             <li>Message: ${req.body.text}</li>
        //         </ul>
        //     `
    };
            
            // <li>Message: ${req.body.info.title}</li>
            // <li>Message: ${req.body.info.description}</li>
            // <li>Message: ${req.body.info.author}</li>
            // <li>Message: ${req.body.info.linkImage}</li>

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