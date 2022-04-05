const { Schema, model } = require("mongoose");

const userCategoriesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("UserCategories", userCategoriesSchema);
