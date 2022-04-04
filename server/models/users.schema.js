const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: String,
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
    gender: String,
    country: String,
    dateOfBirth: String,
    age: Number,
    role: String,
    categories: Array,
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
