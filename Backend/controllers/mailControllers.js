const nodemailer = require("nodemailer");
const fs = require("fs");

function sendEmail({ recipient_email, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail_configs = {
      from: process.env.EMAIL_USER,
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

exports.postFormMail = async (req, res) => {
  try {
    // Access the uploaded files from req.files
    const file1 = req.files["file1"][0]; // Access the first file uploaded with field name 'file1'
    const file2 = req.files["file2"][0]; // Access the first file uploaded with field name 'file2'

    // Process file1
    const { originalname: originalname1, path: path1 } = file1;
    const parts1 = originalname1.split(".");
    const ext1 = parts1[parts1.length - 1];
    const newPath1 = path1 + "." + ext1;
    fs.renameSync(path1, newPath1);

    // Process file2
    const { originalname: originalname2, path: path2 } = file2;
    const parts2 = originalname2.split(".");
    const ext2 = parts2[parts2.length - 1];
    const newPath2 = path2 + "." + ext2;
    fs.renameSync(path2, newPath2);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "bharatbhandari0302@gmail.com", // Change this to the recipient's email address
      subject: "Email with Attachments",
      text: "Please find the attached files.",
      attachments: [
        {
          filename: originalname1,
          path: newPath1,
        },
        {
          filename: originalname2,
          path: newPath2,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    fs.unlinkSync(newPath1);
    fs.unlinkSync(newPath2);

    // Send response
    res.send("Uploads successful");
  } catch (error) {
    console.error("Error handling uploads:", error);
    res.status(500).send("Error handling uploads");
  }
};

exports.postCareerMail = (req, res) => {
  console.log(req.body);
  // console.log(req.files);

  res.send("geetinhs");
};
