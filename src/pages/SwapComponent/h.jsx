import React, { useState } from 'react';
import './SwapComponent.css'; // Import the CSS file

const CryptoSwap = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [coinType, setCoinType] = useState('USDC');
  const [routes] = useState([
    { provider: 'ParaSwap', amount: '0.001166 WETH', fee: '$3.26', best: true },
    { provider: 'Uniswap', amount: '0.001136 WETH', fee: '$4.20', percentage: '-15.21%' },
    { provider: '1inch', amount: '0.001135 WETH', fee: '$5.75', percentage: '-30.34%' },
    { provider: 'KyberSwap', amount: '0.001141 WETH', fee: '$6.07', percentage: '-32.43%' },
    { provider: 'Odos', amount: '0.001181 WETH', fee: '$7.81', percentage: '-41.33%' },
  ]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    
    setAmount(value);
    const conversionRate = 0.00116585; // Example rate
    setConvertedAmount((value * conversionRate).toFixed(8));
  };

  return (
    <div className="container">
      <div className="swapBox">
        <h3>Swap</h3>
        <input
          type="number"
          placeholder="0"
          value={amount}
          onChange={handleAmountChange}
          className="input"
        />
        <select value={coinType} onChange={(e) => setCoinType(e.target.value)} className="select">
          <option value="USDC">USDC</option>
          <option value="ETH">ETH</option>
          <option value="BTC">BTC</option>
        </select>
        <div className="converted">
          <input
            type="text"
            value={`${convertedAmount} WETH`}
            disabled
            className="convertedInput"
          />
        </div>
        <p>Price: ≈ 2,573.22 WETH / USDC</p>
        <button className="connectButton">Connect Wallet</button>
      </div>

      <div className="routesBox">
        <h3>Routes</h3>
        {routes.map((route, index) => (
          <div key={index} className="routeItem">
            <span>{route.amount}</span>
            <span>via {route.provider}</span>
            <span className={route.best ? 'best' : 'percentage'}>
              {route.best ? 'Best' : route.percentage}
            </span>
            <span>{route.fee}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoSwap;
