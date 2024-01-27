const nodemailer = require("nodemailer");

function sendEmail({ recipient_email, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bharatbhandari1024@gmail.com",
        pass: "kemh auno ekbl tzil",
      },
    });

    const mail_configs = {
      from: "bharatbhandari1024@gmail.com",
      to: recipient_email,
      subject: "Hello world",
      text: message,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

exports.postMail = (req, res) => {
  console.log("Somebody just hit me");
  console.log(req.body);
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
};
