const mongoose = require("mongoose");
const User = require("../models/User");

async function getUsers(req, res) {
  const users = await User.find({});
  res.send(users);
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateUserData(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.deleteOne(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { getUsers, createUser, updateUserData, deleteUser };
