import React from 'react';
import './CryptoCards.css'; // External CSS for styling

const CryptoCards = () => {
  const cryptoData = [
    { name: 'Bitcoin', icon: '🪙', change: 2.35, isUp: true },
    { name: 'Ethereum', icon: '💎', change: -0.95, isUp: false },
    { name: 'Dogecoin', icon: '🐕', change: 2.35, isUp: true },
  ];

  return (
    <div className="crypto-container">
      {cryptoData.map((crypto, index) => (
        <div key={index} className="crypto-card">
          <div className="crypto-icon">{crypto.icon}</div>
          <div className="crypto-info">
            <h4>{crypto.name}</h4>
            <p className={crypto.isUp ? 'percent-up' : 'percent-down'}>
              {crypto.isUp ? '↗' : '↘'} {crypto.change}%
            </p>
          </div>
        </div>
      ))}
      <div className="crypto-card add-card">
        <div className="add-icon">+</div>
      </div>
    </div>
  );
};

export default CryptoCards;
