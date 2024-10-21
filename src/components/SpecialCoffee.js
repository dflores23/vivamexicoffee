import React, { useState } from 'react';
import './SpecialCoffee.css';
import Coffee from '../assets/cafe-de-olla.jpg';

const coffeeDetails = {
  es: {
    title: "Café De Olla",
    description: "Café de Olla es un café tradicional mexicano condimentado con canela, clavo, anís estrellado y endulzado con piloncillo. Hecho en una olla de barro mexicana o vasija de barro.",
    languageToggle: "Click for English",
  },
  en: {
    title: "Café De Olla",
    description: "Café de Olla is a traditional Mexican coffee spiced with cinnamon, cloves, star anise, and sweetened with piloncillo. Made in a Mexican olla de barro, or clay pot.",
    languageToggle: "Presiona para Español",
  },
  price: "$ 4.50",
};

const SpecialCoffee = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);
  const language = isFlipped ? 'en' : 'es';

  return (
    <>
      <h1 className="special-coffee-title">Special Mexican Coffee</h1>
      <img src={Coffee} alt="Café de Olla" className="coffee-image" />
      <div className="special-coffee-container">
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
          <div className="card-content">
            <h2>{coffeeDetails[language].title}</h2>
            <p>{coffeeDetails[language].description}</p>
            <br />
            <p className='price'>{coffeeDetails.price}</p>
            <p>{coffeeDetails[language].languageToggle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialCoffee;
