const mongoose = require("mongoose");

const company = new mongoose.Schema({
  companyName: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Company", company);
