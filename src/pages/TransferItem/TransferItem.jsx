import React from 'react';
import './TransferItem.css'; 

const TransferItem = () => {
  return (
    <div className="transfer-container">
      <h1 className="transfer-title">Transfer</h1>
      
      <div className="transfer-image">
        <img src="https://vcdn1-sohoa.vnecdn.net/2021/12/20/bored-ape-nft-accidental-0-728-7234-6530-1639974498.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=C624CYTwi01i3bZb6oNBEg" alt="Leonard" />
      </div>
      <div className="transfer-form">
        <label htmlFor="quantity" className="transfer-label">Quantity</label>
        <input type="number" id="quantity" className="transfer-input" defaultValue="1" />
        
        <label htmlFor="address" className="transfer-label">
          Transfer "LEONARD" to:
        </label>
        <input type="text" id="address" className="transfer-input" placeholder="e.g. 0x1ed3... or destination.eth, destination.lens" />
        <button className="transfer-button1">Transfer 1 item</button>
      </div>
    </div>
  );
};

export default TransferItem;
