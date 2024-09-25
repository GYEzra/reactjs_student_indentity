import React from 'react';
import './LogoCarousel.css'; // Nơi chứa CSS

const LogoCarousel = () => {
  const imageUrls = [
    './img/cty_DTS.png',
    './img/cty_fada.png',
    './img/cty_TSS.png'
    
  ];

  return (
    <div className="logo-carousel">
      <div className="carousel-track">
        {imageUrls.concat(imageUrls).map((url, index) => (
          <img key={index} src={url} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
