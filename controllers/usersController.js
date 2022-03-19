const mongoose = require("mongoose");
const User = require("../models/User");

async function getUsers(req, res) {
  const users = await User.find({});
  console.log(users);
  res.send(users);
}

module.exports = {getUsers};
