const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Role", roleSchema);
