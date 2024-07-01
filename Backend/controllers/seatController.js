const Seat = require('../models/Seat');

const getSeats = async (req, res) => {
  try {
    const seats = await Seat.find({ screen: req.params.screenId });
    res.json(seats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSeat = async (req, res) => {
  try {
    const seat = await Seat.findById(req.params.seatId);
    if (seat) {
      seat.isBooked = req.body.isBooked;
      await seat.save();
      res.json(seat);
    } else {
      res.status(404).json({ message: 'Seat not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSeats, updateSeat };
