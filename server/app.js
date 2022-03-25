require("dotenv").config();
const passport = require("passport");
require("../middleware/authJwtMiddleware")(passport);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/authRouter");
const users = require("./routes/usersRouter");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.use("/users", users);
app.use(passport.initialize());

const start = async () => {
  try {
    await mongoose.connect(process.env.DBURL);  
  } catch (e) {
    console.log(e);
  }
};
start();

module.exports = app;
