const express = require("express");

const router = express.Router();

const mailControllers = require("../controllers/mailControllers");

router.get("mail", mailControllers.getMail);

module.exports = router;
