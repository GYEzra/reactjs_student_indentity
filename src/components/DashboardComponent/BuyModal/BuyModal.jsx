import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BuyModal.css';

const BuyModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("20:06"); 

  if (!isOpen) return null;

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Make an offer</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        <div className="modal-body">
          <div className="nft-info">
            <img src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&dpr=1&s=none" alt="NFT" className="nft-modal-image" />
            <div>
              <h3>LEONARD</h3>
              <p>Shooting Zombie</p>
            </div>
          </div>

          <div className="modal-balance">
            <div className="balance-row">
              <span>Balance</span>
              <strong>0 ETH</strong>
            </div>
            <div className="balance-row">
              <span>Floor price</span>
              <strong>--</strong>
            </div>
            <div className="balance-row">
              <span>Best offer</span>
              <strong>--</strong>
            </div>
          </div>

          <div className="modal-inputs">
            <label htmlFor="price">Price</label>
            <div className="price-input-container">
              <input type="text" id="price" placeholder="ETH" />
            </div>

            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" min="1" defaultValue="1" />

            <label htmlFor="duration">Duration</label>
            <div className="duration-container">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMM d, yyyy"
                className="date-picker-input"
              />
              <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="time-picker-input"
              />
            </div>
          </div>

          <button className="make-offer-btn">Make offer</button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
