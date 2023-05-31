const mongoose = require("mongoose");

const product = new mongoose.Schema({
  productName: {
    required: true,
    type: String,
  },
  productDescription: {
    required: true,
    type: String,
  },
  productPrice: {
    required: true,
    type: String,
  },
  productImage: {
    required: true,
    type: String,
  },
  productId: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  companyId: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Product", product);
