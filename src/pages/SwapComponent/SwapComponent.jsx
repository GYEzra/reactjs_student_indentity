import React,{useState} from 'react'
import './SwapComponent.css'
import { CiSettings } from "react-icons/ci";
import {IoSettingsOutline,IoWalletOutline} from "react-icons/io5";
import { RxSymbol } from "react-icons/rx";
import Sidebar from '../../components/DashboardComponent/sidebar/Sidebar';
import Navbar from '../../components/DashboardComponent/navbar/Navbar';
import { FaGasPump } from "react-icons/fa6";
const SwapComponent = () => {
  const [amount,setAmount]=useState('');
  const [convertedAmount,setConvertedAmount]=useState('');
  const [coinType,setCoinType]=useState('USDC');
  const [routes] = useState([
    { provider: 'ParaSwap', amount: '0.001166 WETH', fee: '$3.26', percentage: '-10.21%'  },
    { provider: 'Uniswap', amount: '0.001136 WETH', fee: '$4.20', percentage: '-15.21%' },
    { provider: '1inch', amount: '0.001135 WETH', fee: '$5.75', percentage: '-30.34%' },
    { provider: 'KyberSwap', amount: '0.001141 WETH', fee: '$6.07', percentage: '-32.43%' },

  ]);
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    const conversionRate = 0.00116585; 
    setConvertedAmount((value * conversionRate).toFixed(8));
  };
  return (
    <div className='swap'> 
      <div className='swap-sidebar'>
        <div className='swap-sidebar-Sidebar'>
        <Sidebar/>
        </div>
      
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
                      placeholder="0"
                      value={amount}
                      onChange={handleAmountChange}
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
                     type="text"
                     value={`${convertedAmount} WETH`}
                     disabled
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
                <div className='swap_button'>
                  <button className='swap_button1'>
                    Swap
                  </button>
                  <button className='swap_button2'>
                  <RxSymbol />
                  </button>
                </div>
              </div>
              <div className="routesBox">
                <h3>Routes</h3>
                <br/>
                {routes.map((route, index) => (
                <div className='routeBox_box'>
                  <div className='routeBox_box_fullheader'>
                    <div className='routeBox_box_icon'>
                      <img
                        src='https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg'
                        alt='icon1'
                        className='route_icon'
                      />
                      <h5>{route.amount}</h5>
                    </div>
                    <div className='routeBox_box_best'>
                      <h6>{route.percentage}</h6>
                    </div>
                  </div>
                 <div className='routeBox_box_fullfooter'>
                    <div className='routeBox_box_nameSwap'>
                        <h6>via</h6>
                        <img
                          src='https://media.istockphoto.com/id/1345681613/vi/vec-to/creative-people-logo-vector-thi%E1%BA%BFt-k%E1%BA%BF-c%C3%B3-th%E1%BB%83-thay-%C4%91%E1%BB%95i-eps-10.jpg?s=612x612&w=0&k=20&c=Tfj-b_0b8crwl6ewj3DVUHsNWjEKSchD3n3pknIOH4s='
                          alt='icon2'
                          className='route_icon2'
                        />
                        <h6>{route.provider}</h6>
                        
                    </div>
                   <div className='routeBox_box_icongas_full'>
                      <div className='routeBox_box_icongas'>
                        <FaGasPump />
                      </div>
                      <h6>{route.fee}</h6>
                   </div>
                 </div>
                </div>    
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapComponent