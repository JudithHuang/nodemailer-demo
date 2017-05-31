'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'judithhuang0229@gmail.com',
        pass: 'yourpassword'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Judith Huang 👻" <judithhuang0229@gmail.com>', // sender address
    to: 'HJ_CXM@163.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<h1 style="color: red">Hello world ?</h1>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});