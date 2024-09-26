import React from 'react';
import './MyAssets.css'; // External CSS for styling
import { FaEye } from "react-icons/fa6";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";
const MyAssets = () => {
  return (
    <div className="balance-card">
      <div className="balance-header">
        <span>Total Balance</span>
        <div> <FaEye /></div>
      </div>
        <div className='assent_balance'>
            <div className="balance-amount">
                <h1>$26,126.20</h1>
            </div>
            <div className="percentage-changes">
                <div className="percent-item">
                    <span>1d %</span>
                    <p className="percent-up">↗ 2.35%</p>
                </div>
                <div className="percent-item">
                    <span>1w %</span>
                    <p className="percent-down">↘ 0.60%</p>
                </div>
                <div className="percent-item">
                    <span>1m %</span>
                    <p className="percent-up">↗ 1.49%</p>
                </div>
            </div>
        </div>
      <div className="action-buttons">
        <div className="buttons-container">
            <div className="deposit-btn">
                <IoArrowUpCircleOutline />
                <span>Deposit</span>
            </div>
            <div className="transfer-btn">
                <BiTransfer />
                <span>Transfer</span>
            </div>
            <div className="withdraw-btn">
                <IoArrowDownCircleOutline />
                <span>Withdraw</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssets;
