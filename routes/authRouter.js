const Router = require("express");
const controller = require("../controllers/authController");

const router = new Router();

router.post("/registration", controller.registration);

router.post("/login", controller.login);

module.exports = router;

// can be used
// const passport = require("passport");
// passport.authenticate("jwt", { session: false }),
