const dbCategories = require("../models/categories.schema");

class categoriesController {
  async getCategories(req, res) {
    try {
      const categories = await dbCategories.find({});
      if (!categories.length) {
        res.status(400).json({ message: "Could not find categories" });
        return;
      }
      res.status(200).json(categories);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCategoryById(req, res) {
    try {
      const category = await dbCategories.findById(req.params.id);
      if (!category) {
        res.status(400).json({ message: "Could not find the category" });
        return;
      }
      res.status(200).json(category);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createCategory(req, res) {
    const { title, isIncome } = req.body;
    try {
      const newCategory = await dbCategories.create({ title, isIncome });
      if (!newCategory) {
        res.status(400).json({ message: "Could not create the category" });
        return;
      }
      res.status(201).json(newCategory);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async editCategory(req, res) {
    try {
      const category = await dbCategories.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!category) {
        res.status(400).json({ message: "Could not find the category" });
        return;
      }
      res.status(200).json(category);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteCategory(req, res) {
    try {
      const category = await dbCategories.findByIdAndDelete(req.params.id);
      if (!category) {
        res.status(400).json({ message: "Could not delete category" });
        return;
      }
      res.status(200).json(`DELETE category ${category.title}`);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new categoriesController();
