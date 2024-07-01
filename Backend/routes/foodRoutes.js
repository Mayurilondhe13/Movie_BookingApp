const express = require('express');
const { getFoodItems, addFoodItem } = require('../controllers/foodController');
const router = express.Router();

router.get('/', getFoodItems);
router.post('/', addFoodItem);

module.exports = router;
