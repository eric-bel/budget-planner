const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
  {
    userId: {
      type: "String",
      ref: "User",
      required: true,
    },
    accountId: {
      type: "String",
      ref: "Account",
      required: true,
    },
    categoryId: {
      type: "String",
      ref: "Category",
      required: true,
    },
    description: String,
    date: {
      type: String,
      required: true,
    },
    isIncome: {
      type: Boolean,
      required: true,
    },
    person: String,
    check: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Transaction", transactionSchema);
