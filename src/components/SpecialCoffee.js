import React, { useState } from 'react';
import './SpecialCoffee.css';
import Coffee1 from '../assets/cafedeolla.jpg';
import Coffee2 from '../assets/cafedeolla.jpg';
import Coffee3 from '../assets/cafelechero.jpg';
import Coffee4 from '../assets/lattedeolla.jpg';
import Coffee5 from '../assets/cafe-de-olla.jpg';
import Coffee6 from '../assets/cafe-de-olla.jpg';
import Coffee7 from '../assets/cafe-de-olla.jpg';
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
    price: "$ 3.64 / $ 3.90",
  },
  {
    id: 2,
    image: Coffee2,
    es: {
      title: "Café de Olla Con Leche",
      description: "Café de Olla es un café tradicional mexicano condimentado con canela, clavo, anís estrellado y endulzado con piloncillo. Hecho en una olla de barro mexicana o vasija de barro.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Café De Olla With Milk",
      description: "Café de Olla is a traditional Mexican coffee spiced with cinnamon, cloves, star anise, and sweetened with piloncillo. Made in a Mexican olla de barro, or clay pot.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 4.94",
  },
  {
    id: 3,
    image: Coffee3,
    es: {
      title: "Café Lechero",
      description: "Una deliciosa mezcla de café fuerte y cremoso con leche caliente, el Café Lechero ofrece una bebida suave y reconfortante perfecta para cualquier momento del día. Endulzado al gusto y a menudo decorado con un toque de canela, es una elección deliciosa para comenzar la mañana o disfrutar como un capricho por la tarde.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Café Lechero",
      description: "A delightful blend of rich, strong coffee and creamy hot milk, Café Lechero offers a smooth and comforting beverage perfect for any time of day. Sweetened to taste and often garnished with a hint of cinnamon, it’s a delicious choice to start your morning or enjoy as an afternoon treat.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 4.16 / $ 4.42",
  },
  {
    id: 4,
    image: Coffee4,
    es: {
      title: "Latte De Olla",
      description: "Disfruta de un giro cálido y aromático en el café tradicional con nuestro Latte de Olla. Infundido con especias como canela y piloncillo, este reconfortante bebida combina un rico espresso y leche vaporizada para lograr un equilibrio perfecto de sabor. Decorado con un toque de canela, es un capricho ideal para cualquier momento del día, capturando la esencia de las tradicionales costumbres cafeteras.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Latte Coffee",
      description: "Experience a warm and aromatic twist on traditional coffee with our Latte de Olla. Infused with spices like cinnamon and piloncillo (unrefined cane sugar), this comforting beverage combines rich espresso and steamed milk for a perfect balance of flavor. Topped with a sprinkle of cinnamon, it's an ideal treat for any time of day, capturing the essence of cozy coffee traditions.",
      languageToggle: "Presiona para Español",
    },
    price: "$ 5.20 / $5.46 / $5.72",
  },
  {
    id: 5,
    image: Coffee5,
    es: {
      title: "Mocha Mexicano",
      description: "Deléitate con nuestra Moca Mexicana, una rica y sabrosa variación del clásico favorito. Esta decadente bebida combina un espresso intenso con leche vaporizada y un delicioso jarabe de chocolate, realzada con un toque de canela y un poco de chile en polvo para un agradable sabor picante. Endulzada a la perfección, es el capricho ideal para satisfacer tus antojos de chocolate mientras abrazas los vibrantes sabores de México. ¡Disfrútala caliente o helada para una deliciosa experiencia cafetera!",
      languageToggle: "Click for English",
    },
    en: {
      title: "Mexican Mocha",
      description: "ndulge in our Mexican Mocha, a rich and flavorful twist on the classic favorite. This decadent beverage features bold espresso combined with velvety steamed milk and luscious chocolate syrup, enhanced by a hint of cinnamon and a touch of chili powder for a warm, spicy kick. Sweetened to perfection, it’s the ideal treat to satisfy your chocolate cravings while embracing the vibrant flavors of Mexico. Enjoy it hot or iced for a delightful coffee experience!",
      languageToggle: "Presiona para Español",
    },
    price: "$ 5.46 / $ 5.73 / $5.98",
  },
  {
    id: 6,
    image: Coffee6,
    es: {
      title: "Raspadito",
      description: "Refresca tu día con nuestro Raspadito, una bebida de café helado que combina los sabores intensos del café con una deliciosa mezcla de jarabes dulces. El hielo raspado crea una textura esponjosa perfecta, mientras que el jarabe de chocolate o vainilla añade un toque de indulgencia. Decorado con crema batida y un toque de chocolate o canela, este dulce capricho es ideal para los días cálidos o cada vez que anheles una deliciosa experiencia cafetera congelada.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Raspadito",
      description: "Cool down with our Raspadito, a refreshing frozen coffee drink that combines the bold flavors of brewed coffee with a delightful blend of sweet syrups. Shaved ice creates a perfect, fluffy texture, while rich chocolate or vanilla syrup adds a touch of indulgence. Topped with whipped cream and a sprinkle of chocolate or cinnamon, this sweet treat is perfect for warm days or anytime you crave a deliciously icy coffee experience!",
      languageToggle: "Presiona para Español",
    },
    price: "$ 6.24",
  },
  {
    id: 7,
    image: Coffee7,
    es: {
      title: "Affogado",
      description: "Disfruta de un delicioso capricho con nuestro Affogato, un clásico postre italiano que combina a la perfección dos de los mayores placeres de la vida: el espresso y el helado. Una bola de cremoso helado de vainilla es generosamente ahogada en un chorro de espresso caliente y rico, creando un contraste perfecto de temperaturas y sabores. El resultado es un exquisito manjar que se derrite en la boca, ideal como postre o para un momento especial de café.",
      languageToggle: "Click for English",
    },
    en: {
      title: "Affogado",
      description: "Experience a delightful indulgence with our Affogato, a classic Italian dessert that beautifully combines two of life's greatest pleasures: espresso and ice cream. A scoop of creamy vanilla ice cream is generously drowned in a shot of hot, rich espresso, creating a perfect contrast of temperatures and flavors. The result is a luscious, melt-in-your-mouth treat that’s both refreshing and satisfying. Enjoy it as a dessert or a special coffee break!",
      languageToggle: "Presiona para Español",
    },
    price: "$ 4.84",
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
