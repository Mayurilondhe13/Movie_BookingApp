const express = require('express');
const { getSeats, updateSeat } = require('../controllers/seatController');
const router = express.Router();

router.get('/:screenId', getSeats);
router.put('/:seatId', updateSeat);

module.exports = router;
