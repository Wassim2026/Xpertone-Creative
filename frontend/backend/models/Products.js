const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  category: String,
  imageUrl: String,
});

module.exports = mongoose.model('Product', ProductSchema);
