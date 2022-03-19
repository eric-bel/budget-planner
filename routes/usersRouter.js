const Router = require("express");
const { getUsers } = require("../controllers/usersController");
const router = new Router();

router.get("/getusers", getUsers);

module.exports = router;
