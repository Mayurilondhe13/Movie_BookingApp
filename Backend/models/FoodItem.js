const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
}, { timestamps: true });

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
