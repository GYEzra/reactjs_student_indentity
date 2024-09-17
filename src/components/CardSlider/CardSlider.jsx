import React, { useState } from "react";
import "./CardSlider.css";

const cardData = [
  {
    name: "Geoffroy de Crecy Editions",
    floorPrice: "0.01 ETH",
    imageUrl: "https://png.pngtree.com/png-clipart/20220404/original/pngtree-cartoon-cute-godzilla-character-girl-drinking-milk-tea-head-png-image_7498312.png",
  },
  {
    name: "Factura by Mathias",
    floorPrice: "0.11 ETH",
    imageUrl: "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
  {
    name: "SALT V4",
    floorPrice: "1.23 ETH",
    imageUrl: "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg", 
  },
  {
    name: "Maschine",
    floorPrice: "0.14 ETH",
    imageUrl: "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg", 
  },
  {
    name: "Another Artwork",
    floorPrice: "0.22 ETH",
    imageUrl: "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg", 
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 4; 

  const prevSlide = () => {
    const newIndex = currentIndex === 0 
      ? Math.max(cardData.length - numVisibleCards, 0)
      : Math.max(currentIndex - numVisibleCards, 0);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex + numVisibleCards >= cardData.length
      ? 0  
      : currentIndex + numVisibleCards;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider-wrapper" style={{ transform: `translateX(-${(currentIndex / cardData.length) * 100}%)` }}>
        {cardData.map((item, index) => (
          <div key={index} className="slider-card">
            <img src={item.imageUrl} alt={item.name} className="slider-image" />
            <div className="card-details">
              <h3>{item.name}</h3>
              <p>Floor: {item.floorPrice}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default CardSlider;