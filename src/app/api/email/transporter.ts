import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "juliobenavente.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "hello@juliobenavente.com",
    pass: "JeC@J1tGuAB*ir!7",
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
