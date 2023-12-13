'use server';

import nodemailer from 'nodemailer';

export default async function sendEmail(formData) {
  const email = formData.get('email');
  const title = formData.get('title');
  const message = formData.get('message');

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    secure: false,
    port: 587,
    auth: {
      user: 'bernardo1411@hotmail.com',
      pass: 'dcyrvevqiovaudxy',
    },
  });

  const mailOptions = {
    from: 'bernardo1411@hotmail.com',
    to: 'bernardo1411@hotmail.com',
    replyTo: email,
    subject: title,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
