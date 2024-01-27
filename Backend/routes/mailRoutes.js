const express = require("express");

const router = express.Router();

const mailControllers = require("../controllers/mailControllers");

router.post("/send-email", mailControllers.postMail);

module.exports = router;
