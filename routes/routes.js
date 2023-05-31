const express = require("express");

const Company = require("../models/company");
const Product = require("../models/product");
const Order = require("../models/order");

const router = express.Router();

// post new order
router.post("/order", async (req, res) => {
  const data = new Order({
    address: req.body.address,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    total: req.body.total,
    cart: req.body.cart,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get companies
router.get("/company", async (req, res) => {
  try {
    const data = await Company.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/company/:id", async (req, res) => {
  try {
    const data = await Company.findOne({ id: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get products
router.get("/product", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// find all products belonging to a specific company (companyId)
router.get("/product/:id", async (req, res) => {
  try {
    const data = await Product.find({ companyId: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
