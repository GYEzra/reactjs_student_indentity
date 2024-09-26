import React from 'react';
import './MyAssets.css';

const MyAssets = () => {
  return (
    <div className="assets-container">
      <div className="balance-section">
        <div className="balance-header">
          <h3>Total Balance</h3>
          <span className="balance-amount">$26,126.20</span>
        </div>
        <div className="balance-percentages">
          <div className="percentage">1d % <span className="green">2.35%</span></div>
          <div className="percentage">1w % <span className="red">-0.60%</span></div>
          <div className="percentage">1m % <span className="green">1.49%</span></div>
        </div>
        <div className="balance-actions">
          <button className="action-btn">Deposit</button>
          <button className="action-btn">Transfer</button>
          <button className="action-btn">Withdraw</button>
        </div>
      </div>

      <div className="crypto-assets">
        <div className="crypto-item">
          <img src="/bitcoin.png" alt="Bitcoin" />
          <span className="crypto-name">Bitcoin</span>
          <span className="crypto-change green">2.35%</span>
        </div>
        <div className="crypto-item">
          <img src="/ethereum.png" alt="Ethereum" />
          <span className="crypto-name">Ethereum</span>
          <span className="crypto-change red">-0.95%</span>
        </div>
        <div className="crypto-item">
          <img src="/dogecoin.png" alt="Dogecoin" />
          <span className="crypto-name">Dogecoin</span>
          <span className="crypto-change green">2.35%</span>
        </div>
      </div>
    </div>
  );
};

export default MyAssets;
