import React,{useState} from 'react'
import './SwapComponent.css'
import { CiSettings } from "react-icons/ci";
import {IoSettingsOutline,IoWalletOutline} from "react-icons/io5";
import { RxSymbol } from "react-icons/rx";
import Sidebar from '../../components/DashboardComponent/sidebar/Sidebar';
import Navbar from '../../components/DashboardComponent/navbar/Navbar';
const SwapComponent = () => {
  const [amount,setAmount]=useState('');
  const [convertedAmount,setConvertedAmount]=useState('');
  const [coinType,setCoinType]=useState('USDC');
  return (
    <div className='swap'>
      
      <div className='swap-sidebar'>
      <Sidebar/>
      <div className='swap_full'>
        <Navbar/>
        <div className='swap-container'>
            <div className='swapBox'>
              <div className='swap_text'>
                <h3>Swap</h3>
                <div className='swap_slippage'>
                  <h6>Slippage 0.5%</h6>
                  <CiSettings />
                </div>
              </div> 
          <div className='swapInput'>
            <div className='swapInput_cointainer'>
              <input
                type="number"
                placeholder='0'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                className='swapInput_input'
              />
              <h4>~$3.00 USD</h4>
                <div className='swapInput_icon'>
                  <IoWalletOutline />
                  <h6> 0  Max</h6>
                </div>
              </div>
              <select 
                value={coinType} 
                onChange={(e)=>setCoinType(e.target.value)}
                className='select_swap'
                >
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
              </select>
          </div>
          <div className='swapInput'>
            <div className='swapInput_cointainer'>
              <input
                type="number"
                placeholder='0'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                className='swapInput_input'
              />
              <h4>~$3.00 USD</h4>
                <div className='swapInput_icon'>
                  <IoWalletOutline />
                  <h6> 0  Max</h6>
                </div>
              </div>
              <select 
                value={coinType} 
                onChange={(e)=>setCoinType(e.target.value)}
                className='select_swap'
                >
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
              </select>
          </div>
          <div className='swapInput'>
            <h4 className='swapInput_Price'>Price:</h4>
          <div className='swapInput_Total'>
            <h4>
              ~ 2,573.22 WETH/USDC
            </h4>
            <RxSymbol />
          </div> 
          </div>
            </div>
            <div className="routesBox">
              <input
                type='number'
                placeholder='9999'
              />
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SwapComponent