// src/components/SpecialCoffee.js
import React, { useState } from 'react';
import './SpecialCoffee.css'; // Import the CSS for flipping effect
import Coffee from '../assets/cafe-de-olla.jpg'; // Import the coffee image

const SpecialCoffee = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle the flip state when clicked
  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <>
    <h1 className='special-coffee'>Special Mexican Coffee</h1>
    <div className="special-coffee-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      
        {/* Front side with the coffee image */}
        <div className="card-front">
          <img src={Coffee} alt="Special Coffee" className="coffee-image" />
        </div>
        {/* Back side with the description */}
        <div className="card-back">
          <h2>Café De Olla</h2>
          <p>Café de Olla is a traditional Mexican coffee spiced with cinnamon, cloves, star anise and sweetened with piloncillo. Made in a Mexican olla de barro, or clay pot.</p>
        </div>
      </div>
    </div>
    <p class='title'>Café de olla $ 4.50</p>
    </>
  );
};

export default SpecialCoffee;
