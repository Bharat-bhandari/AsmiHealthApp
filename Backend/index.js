const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req, res, next) => {
//   User.findById("65a6831555e7a61b1f59d3cf")
//     .then((user) => {
//       req.currentUser = user;
//       console.log(user);
//       next();
//     })
//     .catch((err) => {
//       console.error("Error fetching user:", err);
//       next(err);
//     });
// });

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);

  // console.log("username and password", username, password);
  // res.json("okkk");
});

mongoose
  .connect(
    "mongodb+srv://Asmi:YXR5NKHGHscoQeOi@cluster0.0lnxe2m.mongodb.net/asmi?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
