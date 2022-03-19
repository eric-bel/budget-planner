const Router = require("express");
const {
  getUsers,
  createUser,
  updateUserData,
  deleteUser,
} = require("../controllers/usersController");
const router = new Router();
const User = require("../models/User");

router.get("/getusers", getUsers);
router.post("/create", createUser);
router.put("/update", updateUserData);
router.delete("/delete", deleteUser);

module.exports = router;
