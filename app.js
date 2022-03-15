require("dotenv").config();
const passport = require("passport");
require("./middleware/authJwtMiddleware")(passport);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/authRouter");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.use(passport.initialize());

const start = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
