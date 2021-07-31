const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_name: {
      type: Number,
      ref: "Contact",
      required: true,
    },
    first_name: {
      type: Number,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Users = mongoose.model("User", userSchema);
module.exports = Users;
