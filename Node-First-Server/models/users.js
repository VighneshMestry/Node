const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);


module.exports = User;