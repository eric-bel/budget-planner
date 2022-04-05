const Router = require("express");
const {
  getUsers,
  createUser,
  updateUserData,
  deleteUser,
} = require("../controllers/users.controller");
const router = new Router();

router.get("/getusers", getUsers);
router.post("/create", createUser);
router.put("/update", updateUserData);
router.delete("/delete", deleteUser);
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = router;
