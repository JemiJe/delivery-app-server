const mongoose = require("mongoose");
// const productModel = require("./product");

const order = new mongoose.Schema({
  address: String,
  email: String,
  name: String,
  phone: String,
  total: Number,
  cart: [
    {
      productName: String,
      productDescription: String,
      productPrice: String,
      productImage: String,
      productId: String,
      id: String,
      companyId: String,
      amount: Number,
      priceSum: Number,
    },
  ],
});

module.exports = mongoose.model("Order", order);
