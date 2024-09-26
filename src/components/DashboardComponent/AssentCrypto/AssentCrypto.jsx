import React from 'react'
import CryptoCards from '../CryptoCards/CryptoCards';
import MyAssets from '../MyAssets/MyAssets';
import './AssentCrypto.css'
const AssentCrypto = () => {
  return (
    <div className='assentCrypto'>
        <div className='assentCryptoCards'>
        <MyAssets/>
        </div>
        <div className='assentMyAssets'>
            <CryptoCards/>
        </div>
    </div>
  )
}

export default AssentCrypto