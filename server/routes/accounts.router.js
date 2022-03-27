const express = require("express");
const router = express.Router();
const controller = require("../controllers/accounts.controller");

router.get("/", controller.getAccounts);
router.get("/:id", controller.getAccountById);
router.post("/", controller.createAccount);
router.put("/:id", controller.editAccount);
router.delete("/:id", controller.deleteAccount);

module.exports = router;
