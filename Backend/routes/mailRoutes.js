const express = require("express");
const multer = require("multer");

const mailControllers = require("../controllers/mailControllers");

const uploads = multer({ dest: "uploads/mail" });

const router = express.Router();

router.post(
  "/testmail",
  uploads.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
  ]),
  mailControllers.postFormMail
);

router.post("/send-career", mailControllers.postCareerMail);

router.post("/send-email", mailControllers.postMail);

module.exports = router;
