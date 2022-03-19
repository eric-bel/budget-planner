const Router = require("express");
const controller = require("../controllers/authController");
// const passport = require("passport");

const router = new Router();

router.post("/registration", controller.registration);

router.post(
  "/login",
  // passport.authenticate("jwt", { session: false }),
  controller.login
);

module.exports = router;
