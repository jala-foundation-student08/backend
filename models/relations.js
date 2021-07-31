const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relationSchema = new Schema(
  {
    contact_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
      required: true,
    },
    acquaintance_date: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Relations = mongoose.model("Relation", relationSchema);
module.exports = Relations;
