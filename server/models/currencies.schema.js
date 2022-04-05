const { Schema, model } = require("mongoose");

const currenciesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Currency", currenciesSchema);
