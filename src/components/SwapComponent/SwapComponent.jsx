import React from 'react'
import './SwapComponent.css'
import {IoSettingsOutline} from "react-icons/io5";
const SwapComponent = () => {
  return (
    <div className='container'>
          <div className='containerSwap_One'>
          <div className='containerSwap_One_1'>
              <h1>Swap</h1>
                <div className='containerSwap_One_One'>
                  <div className='containerSwap_One_One_One'>
                  <h4>Slippage 0.5%</h4>
                  </div>
                  <div className='containerSwap_One_One_Two'>
                  <IoSettingsOutline/>
                  </div>
                </div>
            </div>
            <div className='containerSwap_One_2'>

            </div>
            <div className='containerSwap_One_3'>

            </div>
            <div className='containerSwap_One_4'>

            </div>
            <div className='containerSwap_One_5'>

            </div>
            <div className='containerSwap_One_6'>

            </div>
          </div>
        <div className='containerSwap_Two'>
        <h1>Routes</h1>
        </div>
    </div>
  )
}

export default SwapComponent