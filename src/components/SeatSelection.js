import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SeatSelection({ screenId }) {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      const { data } = await axios.get(`/api/seats/${screenId}`);
      setSeats(data);
    };
    fetchSeats();
  }, [screenId]);

  const toggleSeat = async (seatId) => {
    const seat = seats.find((s) => s._id === seatId);
    const updatedSeat = { ...seat, isBooked: !seat.isBooked };

    await axios.put(`/api/seats/${seatId}`, { isBooked: updatedSeat.isBooked });
    setSeats(seats.map((s) => (s._id === seatId ? updatedSeat : s)));
  };

  return (
    <div>
      <h1>Select Seats</h1>
      <div>
        {seats.map((seat) => (
          <div key={seat._id}>
            <span>{seat.seatNumber}</span>
            <button onClick={() => toggleSeat(seat._id)}>
              {seat.isBooked ? 'Unbook' : 'Book'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSelection;
