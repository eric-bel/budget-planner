require("dotenv").config();
const passport = require("passport");
require("./middleware/authJwtMiddleware")(passport);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/authRouter");
const users = require("./routes/usersRouter");
const accountsRouter = require("./routes/accounts.router");
const categoriesRouter = require("./routes/categories.router");
const transactionsRouter = require("./routes/transactions.router");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.use("/users", users);
app.use("/api", (req, res, next) => {
  res.send("Hello");
});
app.use("/proxitest", (req, res, next) => {
  res.send("ProxiTest");
})
app.use("/accounts", accountsRouter);
app.use("/categories", categoriesRouter);
app.use("/transactions", transactionsRouter);
app.use(passport.initialize());

app.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`Listening port on ${PORT}`);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
  } catch (e) {
    console.log(e);
  }
};
start();

module.exports = app;
