const express = require('express');
const {
  getScreens,
  createScreen,
  updateScreen,
  deleteScreen,
  getBookings,
  deleteBooking,
  getFoodItems,
  createFoodItem,
  updateFoodItem,
  deleteFoodItem
} = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Screen management
router.route('/screens')
  .get(protect, admin, getScreens)
  .post(protect, admin, createScreen);

router.route('/screens/:id')
  .put(protect, admin, updateScreen)
  .delete(protect, admin, deleteScreen);

// Booking management
router.route('/bookings')
  .get(protect, admin, getBookings);

router.route('/bookings/:id')
  .delete(protect, admin, deleteBooking);

// Food menu management
router.route('/food')
  .get(protect, admin, getFoodItems)
  .post(protect, admin, createFoodItem);

router.route('/food/:id')
  .put(protect, admin, updateFoodItem)
  .delete(protect, admin, deleteFoodItem);

module.exports = router;
