import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FoodOrder() {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      const { data } = await axios.get('/api/food');
      setFoodItems(data);
    };
    fetchFoodItems();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Food Menu</h1>
      <div>
        {foodItems.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodOrder;
