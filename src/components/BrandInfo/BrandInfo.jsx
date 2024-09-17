import React from 'react';
import './BrandInfo.css'; 

const BrandInfo = () => {
  return (
    <div className="brand-info-container">
      <div className="brand-image">
        <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/nhung-bo-phim-hoat-hinh-gan-lien-voi-tuoi-tho-1.jpg" alt="brand-chair" />
      </div>
      <div className="brand-content">
        <h1>More about our brand</h1>
        <p>
          Tell people about who you are, your origin, your process, or your inspirations. Tap into your creativity. You've got this.
          The way you tell your story online can make all the difference.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default BrandInfo;
