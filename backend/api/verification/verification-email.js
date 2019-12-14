const nodemailer = require('nodemailer');
const { genVerificationToken } = require('../../database/logic/token-logic');
const config = require('../../config/envConfig');

async function sendConfirmationEmail(userEmail, userId, userFullname) {
  try {
    const token = await genVerificationToken(userId);
    const transporter = nodemailer.createTransport(
      {
        service: 'Gmail',
        auth: {
          user: config.APP.GMAIL_ID,
          pass: config.APP.GMAIL_PASS
        }
      }
    );
    const mailOptions = {
      to: userEmail,
      from: 'basem@czWordgame.com',
      subject: 'Verification Mail',
      text: '\n Hello, ' + userFullname
      + '\n Please copy the token below and paste it in the verification form, to which you will be redirected when you try to sign in'
      + '\n\n Token: ' + token
    };

    const emailSent = await transporter.sendMail(mailOptions);
    if (emailSent) {
      return true;
    }
  } catch (error) {
    console.error(error);

  }
}

module.exports = {
  sendConfirmationEmail
};