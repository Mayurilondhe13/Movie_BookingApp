const Screen = require('../models/Screen');
const Booking = require('../models/Booking');
const FoodItem = require('../models/FoodItem');

const manageScreens = async (req, res) => {
  try {
    const screens = await Screen.find({});
    res.json(screens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const manageBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate('user', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const manageFoodMenu = async (req, res) => {
  try {
    const foodItems = await FoodItem.find({});
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { manageScreens, manageBookings, manageFoodMenu };
