import React, { useState } from 'react';
import axios from 'axios';

function BookingPage() {
  const [movie, setMovie] = useState('');
  const [seats, setSeats] = useState([]);
  const [showtime, setShowtime] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('userInfo'))._id;
    try {
      const { data } = await axios.post('/api/bookings', {
        user,
        movie,
        seats,
        showtime,
        totalPrice,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Movie" value={movie} onChange={(e) => setMovie(e.target.value)} required />
      <input type="text" placeholder="Seats" value={seats} onChange={(e) => setSeats(e.target.value)} required />
      <input type="datetime-local" placeholder="Showtime" value={showtime} onChange={(e) => setShowtime(e.target.value)} required />
      <input type="number" placeholder="Total Price" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} required />
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingPage;
