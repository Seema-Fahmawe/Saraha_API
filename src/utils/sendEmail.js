const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // true for port 465, false for other ports
    auth: {
      user: process.env.email,
      pass: process.env.password_email,
    },
  });
  const info = await transporter.sendMail({
    from: `"Saraha App👻" <${process.env.email}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
};

export default sendEmail;
