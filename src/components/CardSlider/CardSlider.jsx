import React, { useState } from "react";
import "./CardSlider.css";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { RiPoliceBadgeFill } from "react-icons/ri";

const cardData = [
  {
    name: "Geoffroy de Crecy Editions",
    floorPrice: "0.01 ETH",
    totalVolume: "0.47 ETH",
    imageUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
  {
    name: "Facturasa by Mathias",
    floorPrice: "0.11 ETH",
    totalVolume: "0.47 ETH",
    imageUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
   {
    name: "Facturasa by Mathias",
    floorPrice: "0.11 ETH",
    totalVolume: "0.47 ETH",
    imageUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
   {
    name: "Facturasa by Mathias",
    floorPrice: "0.11 ETH",
    totalVolume: "0.47 ETH",
    imageUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
  {
    name: "Geoffroy de Crecy Editions",
    floorPrice: "0.14 ETH",
    totalVolume: "0.47 ETH",
    imageUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
  {
    name: "Geoffroy de Crecy Editions",
    floorPrice: "0.22 ETH",
    totalVolume: "0.47 ETH",
    imageUrl:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 4;

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0
        ? Math.max(cardData.length - numVisibleCards, 0)
        : currentIndex - 1; // Move by one card
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex + numVisibleCards >= cardData.length
        ? Math.max(cardData.length - numVisibleCards, 0)
        : currentIndex + 1; // Move by one card
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="pre">
        <IoMdArrowDropleft className="icon_slider" onClick={prevSlide} />
      </div>
      <div className="slider-wrap">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${(currentIndex / numVisibleCards) * 100}%)`,
          }}
        >
          {cardData.map((item, index) => (
            <div key={index} className="slider-card">
              <img src={item.imageUrl} alt="" className="slider-image" />
              <div className="card-details">
                <div className="name_card">
                  <h3>{item.name}</h3>
                  <RiPoliceBadgeFill className="huyhieu" />
                </div>
                <div className="detail_card">
                  <div className="floor_card">
                    <p>Floor</p>
                    <h3>{item.floorPrice}</h3>
                  </div>
                  <div className="total_volume">
                    <p>Total volume</p>
                    <h3>{item.totalVolume}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="next">
        <IoMdArrowDropright className="icon_slider" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default CardSlider;
