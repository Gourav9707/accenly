// /pages/api/sendEmail.js

import nodemailer from "nodemailer";
// import multiparty from 'multiparty';
// import formidable from 'formidable';

export default async function handler(req, res) {
  // Create a Nodemailer transporter
  // const form = new multiparty.Form();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'admin@accenly.com',
      pass: 'nigf srfc ubcc kdqj',
    },
  });

  const { name, email, phone, company, purpose, doc, subject } = JSON.parse(req.body);

  let mailOptions = {
    to: "admin@accenly.com",
    from: '"Accenly" <admin@accenly.com>', // Your verified email
    subject,
    text: `
    Lead Name: ${name} \n
    Lead Email: ${email} \n
    Phone Number: ${phone} \n
    Company: ${company} \n
    Purpose of Contact: ${purpose}
    `,
  };

  // console.log("first")

  // await form.parse(req, async (err, fields, files) => {
  //   if (err) {
  //     return res.status(500).json({ error: 'Error parsing form data' });
  //   }
  //   console.log("2nd")

  //   // 'files' object contains the uploaded file information
  //   const uploadedFile = files.file; // Access uploaded file details
  //   console.log(uploadedFile, files)
  //   res.status(200).json({ success: true, message: "Email sent successfully!" });
  // });

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}
