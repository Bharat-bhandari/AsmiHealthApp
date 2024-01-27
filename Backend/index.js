const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const mailRoutes = require("./routes/mailRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

const PORT = process.env.PORT;
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
app.use(paymentRoutes);

mongoose
  .connect(mongoURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
