'use server';

import nodemailer from 'nodemailer';

const { USER_EMAIL, USER_PASSWORD } = process.env;

export default async function sendEmail(formData) {
  const email = formData.get('email');
  const title = formData.get('title');
  const message = formData.get('message');

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    secure: false,
    port: 587,
    auth: {
      user: USER_EMAIL,
      pass: USER_PASSWORD,
    },
  });

  const mailOptions = {
    from: USER_EMAIL,
    to: USER_EMAIL,
    replyTo: email,
    subject: title,
    text: `${email}:
    
    ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
