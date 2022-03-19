const Router = require("express");
const { getUsers, createUser } = require("../controllers/usersController");
const router = new Router();
const User = require("../models/User");


router.get("/getusers", getUsers);
router.post("/create", createUser);

module.exports = router;
