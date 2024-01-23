const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const mailRoutes = require("./routes/mailRoutes");

const app = express();

const mongoURI = process.env.MONGO_URI;

// middlewares
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
// end of middlewares

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.use(authRoutes);
app.use(postRoutes);
app.use(mailRoutes);

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
