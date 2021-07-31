const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      ref: "Dish",
    },
    date_of_birth: {
      type: Date,
      ref: "Dish",
    },
    seed: {
      type: String,
      ref: "Dish",
    },
  },
  {
    timestamps: true,
  }
);

var Contacts = mongoose.model("Contact", contactSchema);
module.exports = Contacts;
