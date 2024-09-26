import React from 'react'
import NFTs from '../../components/DashboardComponent/NFTs/NFTs'
import Sidebar from '../../components/DashboardComponent/sidebar/Sidebar'
import './NFTsPage.css'
import Navbar from '../../components/DashboardComponent/navbar/Navbar'
const NFTsPage = () => {
  return (
    <div className='NFTs-Container'>
        <div className='NFTs-Container-Sidebar'>
            <Sidebar/>
        </div>
        <div className='NFTs-Container-NFT'>
            <Navbar/>
            <NFTs/>
        </div>
    </div>
  )
}

export default NFTsPage