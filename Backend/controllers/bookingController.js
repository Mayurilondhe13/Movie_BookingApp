const Booking = require('../models/Booking');

const bookTicket = async (req, res) => {
  const { user, movie, seats, showtime, totalPrice } = req.body;

  const booking = new Booking({
    user,
    movie,
    seats,
    showtime,
    totalPrice,
  });

  await booking.save();
  res.status(201).json(booking);
};

module.exports = { bookTicket };
