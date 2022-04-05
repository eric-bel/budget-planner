const express = require("express");
const router = express.Router();
const controller = require("../controllers/transactions.controller");

router.get("/", controller.getTransactions);
router.get("/:categoryId/category", controller.getTransactionByCategory);
router.get("/:id", controller.getTransactionById);
router.post("/", controller.createTransaction);
router.put("/:id", controller.editTransaction);
router.delete("/:id", controller.deleteTransaction);

module.exports = router;
