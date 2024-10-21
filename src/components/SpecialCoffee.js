import React, { useState } from 'react';
import './SpecialCoffee.css';
import Coffee1 from '../assets/cafe-de-olla.jpg';
import Coffee2 from '../assets/cafe-de-olla.jpg';
import Coffee3 from '../assets/cafe-de-olla.jpg';
import Coffee4 from '../assets/cafe-de-olla.jpg';
import Coffee5 from '../assets/cafe-de-olla.jpg';
import Coffee6 from '../assets/cafe-de-olla.jpg';

// Data for all coffee items
const coffeeItems = [
  {
    id: 1,
    image: Coffee1,
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
  },
  {
    id: 2,
    image: Coffee2,
    es: {
      title: "Café Espresso",
      description: "Un espresso fuerte y concentrado, el favorito de los amantes del café.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Espresso Coffee",
      description: "A strong, concentrated espresso, the favorite of coffee lovers.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 3.00",
  },
  {
    id: 3,
    image: Coffee3,
    es: {
      title: "Café Americano",
      description: "Un café negro suave hecho con espresso y agua caliente.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Americano Coffee",
      description: "A smooth black coffee made with espresso and hot water.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 3.50",
  },
  {
    id: 4,
    image: Coffee4,
    es: {
      title: "Café Latte",
      description: "Un espresso mezclado con leche al vapor y una fina capa de espuma.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Latte Coffee",
      description: "An espresso mixed with steamed milk and a thin layer of foam.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 4.00",
  },
  {
    id: 5,
    image: Coffee5,
    es: {
      title: "Café Cappuccino",
      description: "Una deliciosa combinación de espresso, leche al vapor y mucha espuma.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Cappuccino Coffee",
      description: "A delicious combination of espresso, steamed milk, and lots of foam.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 4.50",
  },
  {
    id: 6,
    image: Coffee6,
    es: {
      title: "Café Mocha",
      description: "Una mezcla de espresso, chocolate y leche al vapor.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Mocha Coffee",
      description: "A blend of espresso, chocolate, and steamed milk.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 5.00",
  },
];

const SpecialCoffee = () => {
  const [flippedIds, setFlippedIds] = useState([]);

  // Toggle the flip state for each card
  const handleClick = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((flippedId) => flippedId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <h1 className="special-coffee-title">Special Mexican Coffee</h1>
      <div className="special-coffee-container">
        {coffeeItems.map((coffee) => {
          const isFlipped = flippedIds.includes(coffee.id);
          const language = isFlipped ? 'en' : 'es';

          return (
            <div key={coffee.id} className="coffee-item">
              <img src={coffee.image} alt={coffee[language].title} className="coffee-image" />
              <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => handleClick(coffee.id)}>
                <div className="card-content">
                  <h2>{coffee[language].title}</h2>
                  <p>{coffee[language].description}</p>
                  <br />
                  <p className='price'>{coffee.price}</p>
                  <p>{coffee[language].languageToggle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SpecialCoffee;
