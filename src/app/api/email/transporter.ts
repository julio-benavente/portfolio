import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "juliobenavente.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.HELLO_EMAIL,
    pass: process.env.HELLO_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
