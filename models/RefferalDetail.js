const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  refferal_name: { type: String },
  refferal_email: { type: String, required: true },
  reffree_name: { type: String },
  reffree_email: { type: String, required: true },

  //   price: { type: Number, required: true },
  // Add more fields as per your product requirements
});

module.exports = mongoose.model("RefferalDetail", detailSchema);
