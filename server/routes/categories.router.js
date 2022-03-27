const express = require("express");
const router = express.Router();
const controller = require("../controllers/categories.controller");

router.get("/", controller.getCategories);
router.get("/:id", controller.getCategoryById);
router.post("/", controller.createCategory);
router.put("/:id", controller.editCategory);
router.delete("/:id", controller.deleteCategory);

module.exports = router;