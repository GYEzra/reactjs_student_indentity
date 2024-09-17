import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    { id: 1, imageUrl: 'https://bazaarvietnam.vn/wp-content/uploads/2021/09/phim-hoat-hinh-my-hay-nhat-moi-thoi-dai-10-scaled-e1631514639108.jpeg', name: 'Product Name', price: '$25' },
    { id: 2, imageUrl: 'https://bazaarvietnam.vn/wp-content/uploads/2021/09/phim-hoat-hinh-my-hay-nhat-moi-thoi-dai-10-scaled-e1631514639108.jpeg', name: 'Product Name', price: '$25' },
    { id: 3, imageUrl: 'https://bazaarvietnam.vn/wp-content/uploads/2021/09/phim-hoat-hinh-my-hay-nhat-moi-thoi-dai-10-scaled-e1631514639108.jpeg', name: 'Product Name', price: '$25' },
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <div className="image-container">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className="shop-all">Shop All</button>
    </div>
  );
};

export default FeaturedProducts;
