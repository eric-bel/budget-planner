const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // role: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Role',
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Users", userSchema);
