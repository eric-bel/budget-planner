const Router = require("express");
const controller = require("../controllers/authController");
const passport = require("passport");

const router = new Router();

router.post("/registration", controller.registration);

router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  controller.login
);

module.exports = router;
