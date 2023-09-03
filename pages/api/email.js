export default function (req, res) {
    require('dotenv').config()
  
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.kredict.com",
      auth: {
        user: 'mail@kredict.com',
        pass: process.env.password,
      },
      secure: true,
    });
  
    const mailData = {
      from: 'mail@kredict.com',
      to: 'support@kredict.com',
      subject: 'Presale Sample Contact Form',
      text: `Form Submitted \nFullname: ${req.body.name} \nEmail: ${req.body.email} \nTelegram: ${req.body.telegram} \n Message: ${req.body.message}`,
      html: ''
    }
  
    transporter.sendMail(mailData, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }