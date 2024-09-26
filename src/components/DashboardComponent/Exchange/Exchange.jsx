import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import './Exchange.css';

const Exchange = () => {
  const [btcAmount, setBtcAmount] = useState("");
  const [ethAmount, setEthAmount] = useState("");

  const handleBtcChange = (e) => {
    setBtcAmount(e.target.value);
    setEthAmount((e.target.value * 22.22).toFixed(2)); 
  };

  const handleEthChange = (e) => {
    setEthAmount(e.target.value);
    setBtcAmount((e.target.value / 22.22).toFixed(2));
  };

  return (
    <div className="exchange-container">
      <div className="exchange-header">
        <h3>Exchange</h3>
        <span className="clear-btn">clear</span>
      </div>

      <div className="exchange-inputs">
        <div className="currency-input">
          <div className="currency">
            <img 
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" 
              alt="BTC" 
              className="currency-logo" 
            />
            BTC
          </div>
          <input
            type="number"
            value={btcAmount}
            onChange={handleBtcChange}
            placeholder="0.00"
          />
        </div>

        <FontAwesomeIcon icon={faExchangeAlt} className="exchange-icon" />

        <div className="currency-input">
          <div className="currency">
            <img 
              src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" 
              alt="ETH" 
              className="currency-logo" 
            />
            ETH
          </div>
          <input
            type="number"
            value={ethAmount}
            onChange={handleEthChange}
            placeholder="0.00"
          />
        </div>
      </div>

      <button className="exchange-button">Exchange currency</button>

      <p className="exchange-rate">1 BTC = 22.22 ETH</p>
    </div>
  );
};

export default Exchange;
