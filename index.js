const cors = require('cors');

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
//Setup serving front-end code
app.use('/', express.static('client'));
//Parse data in body as JSON
app.use(express.json());
app.use(cors());
const router = express.Router();
async function isEmailValid(email) {
    return emailValidator.validate(email)
  }

  let mailTransporter = nodemailer.createTransport({
    service: "gmail" ,
    auth: {
        user: "emailverify3316@gmail.com",
        pass: "hvdaetpavlsjelsh"
    }
 })
   
                     
                 
              
             // Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;
  
    // Construct the email message
    const subject = `New message from ${name}`;
    const body = `Name: ${name}\n\nEmail: ${email}\n\nPhone: ${phone}\n\nMessage: ${message}`;
  
    // Send the email
    mailTransporter.sendMail({
      from: `${email}`, // Replace with your own email address
      to: 'piranaminullah@hotmail.com', // Replace with your own email address
      subject: subject,
      text: body
    }, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('There was an error sending your message. Please try again later.');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Thank you for your message!');
      }
    });
  });
         
    
    



//Install the router at /api/parts
app.use('/api/playlist', router);

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});