const nodemailer = require('nodemailer');

const { MAILTRAP_PASSWORD } = process.env;

const nodeMailerConfig = {
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '63d27eb372b429',
    pass: MAILTRAP_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodeMailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: 'miniova95@gmail.com' };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
