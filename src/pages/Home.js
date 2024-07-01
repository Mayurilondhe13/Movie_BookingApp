// frontend/src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Optional: If you want to add custom styles

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Movie Booking</h1>
          <p>Book your favorite movies with ease and convenience.</p>
          <Link to="/movies" className="btn btn-primary">Browse Movies</Link>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Easy Booking</h2>
          <p>Quickly find and book tickets for the latest movies.</p>
        </div>
        <div className="feature">
          <h2>Comfortable Seats</h2>
          <p>Select the best seats in the house for an optimal viewing experience.</p>
        </div>
        <div className="feature">
          <h2>Delicious Snacks</h2>
          <p>Order your favorite snacks and drinks from our menu.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
