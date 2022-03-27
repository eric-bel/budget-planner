const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
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
