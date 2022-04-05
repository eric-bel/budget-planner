const { Schema, model } = require("mongoose");

const accountSchema = new Schema(
  {
    UserId: {
      type: "String",
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    currencyId: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Account", accountSchema);
