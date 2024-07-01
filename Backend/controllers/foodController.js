const FoodItem = require('../models/FoodItem');

const getFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find({});
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFoodItem = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    const foodItem = new FoodItem({ name, price, description, imageUrl });
    await foodItem.save();
    res.status(201).json(foodItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFoodItems, addFoodItem };
