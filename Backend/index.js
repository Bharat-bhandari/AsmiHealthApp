const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
require("dotenv").config();

const app = express();

const mongoURI = process.env.MONGO_URI;
const secretKey = process.env.SECRET_KEY;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.findOne({ username });

    if (!userDoc) {
      return res.status(400).json("User not found");
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      // logged in
      const token = jwt.sign({ username, id: userDoc._id }, secretKey, {});
      res.cookie("token", token, { httpOnly: true }).json("ok");
    } else {
      res.status(400).json("Wrong credentials");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json("Internal Server Error");
  }
});

app.get("/profile", (req, res) => {
  // Assuming you have a middleware to verify the JWT token here
  res.json(req.cookies);
});

mongoose
  .connect(mongoURI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
