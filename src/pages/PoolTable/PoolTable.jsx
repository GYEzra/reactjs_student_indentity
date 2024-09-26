import React, { useState } from "react";
import "./PoolTable.css"; 
import { Slide } from "react-toastify";
import Sidebar from "../../components/DashboardComponent/sidebar/Sidebar";
import Navbar from "../../components/DashboardComponent/navbar/Navbar";

const farms = [
  { pool: "BTC-ETH", earned: 0, apr: "29.72%", liquidity: "$232,941,720", multiplier: "40X" },
  { pool: "USDT-BNB", earned: 0, apr: "25.20%", liquidity: "$132,941,720", multiplier: "10X" },
  { pool: "USDC-DOGE", earned: 0, apr: "33.73%", liquidity: "$332,941,720", multiplier: "22X" },
  { pool: "BTC-ADA", earned: 0, apr: "10.73%", liquidity: "$232,941,720", multiplier: "20X" },
  { pool: "BNB-USDC", earned: 0, apr: "20.73%", liquidity: "$132,941,720", multiplier: "34X" },
  { pool: "ETH-ADA", earned: 0, apr: "20.73%", liquidity: "$132,941,720", multiplier: "34X" }
];

const PoolTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (index) => {
    if (expandedRow === index) {
      setExpandedRow(null);  
    } else {
      setExpandedRow(index);  
    }
  };

  return (
    <div className="farm-table-cointainer">
        <div className="farm-table-sideBar">
            <Sidebar/>
        </div>
        <div className="farm-table">
            <Navbar/>
            <br/>
            <div className="farm-table-header">
                <span>Pool</span>
                <span>Earned</span>
                <span>APR</span>
                <span>Liquidity</span>
                <span>Multiplier</span>
            </div>
            {farms.map((farm, index) => (
                <FarmRow
                key={index}
                farm={farm}
                isExpanded={expandedRow === index}
                onClick={() => toggleExpand(index)}
                />
            ))}
        </div>
    </div>
  );
};

const FarmRow = ({ farm, isExpanded, onClick }) => {
  return (
    <>
      <div className="farm-row" onClick={onClick}>
        <div className="pool">
          <span className="pool-icon"></span> 
          <span>{farm.pool}</span>
        </div>
        <div>{farm.earned}</div>
        <div>{farm.apr} <span className="annualized">ANNUALIZED</span></div>
        <div>{farm.liquidity}</div>
        <div>{farm.multiplier}</div>
      </div>

      {isExpanded && (
        <div className="farm-details">
          <div className="staking-info">GET {farm.pool} LP TOKENS FOR STAKING</div>
          <div className="input-section">
            <input type="number" value="0.0" />
            <input type="number" value="0.0" />
          </div>
          <button className="approve-btn">APPROVE</button>
        </div>
      )}
    </>
  );
};

export default PoolTable;