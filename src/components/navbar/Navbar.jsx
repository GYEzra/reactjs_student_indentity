import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'; 
import { IoMdSearch,IoMdArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle,FaLongArrowAltRight,FaSignInAlt } from "react-icons/fa";
import { MdWallet,MdOutlineContactPhone,MdSubscriptions,MdAccountCircle,MdCreateNewFolder } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);

const [isSearchActive, setIsSearchActive] = useState(false);

const handleSearchClick = () => {
  setIsSearchActive(true); 
};

const handleCloseSearch = () => {
  setIsSearchActive(false);
};
  const handleUserClick = () => setShowFullMenu(!showFullMenu);
 return (
  <nav className='navbar'>
    {!isSearchActive ? (
      <div className="nav-container">
        <div className="left_component">
          <div className="nav-icon" onClick={handleUserClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className="logo_nav">
            <a href="/Dashboard">
              <img src="./img/collection.png" alt="" />
              <p>FINTECH</p>
            </a>
          </div>
        </div>

        <div className="menu_nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/CreatePage" className="nav-links">Collection</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">Create Collection</a>
            </li>
            <li className="nav-item">
              <a href="/UploadNFTPage" className="nav-links">Upload NFT</a>
            </li>
          </ul>
        </div>

        <div className="right_component">
          <div className="search_nav" onClick={handleSearchClick}>
            <IoMdSearch className='icon_search' />
            <p>Search</p>
          </div>
       
          <div className="wallet1">
            <a href="/">
              <MdWallet className='icon_wallet' />
              <p>Login</p>
            </a>
         
          </div>
          <div className="user_nav">
            <a href="/">
             <FaRegUserCircle className='icon_user' />
            </a>
           
          </div>
        </div>
      </div>
    ) : (
      <div className="search-container">
          <button onClick={handleCloseSearch} className="close-search-btn">
            <IoMdArrowRoundBack />
          </button>
        <div className="search-input-wrapper">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </div>
    )}

    {showFullMenu && (
      <div className="full-menu">
        <ul>
            <li className="nav-item">
              <RiAccountCircleFill  className='nav-item_icon'/>
              <a href="/Account" className="nav-links1">Account</a>
              {/* <IoMdArrowDropright className='icon_arrow_item'/> */}
            </li>
            <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/Dashboard" className="nav-links1">DashBoard</a>
            </li>
            <li className="nav-item">
               <MdOutlineContactPhone  className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links1">Upload NFT</a>
            </li>
            <li className="nav-item">
               <FaSignInAlt className='nav-item_icon'/>
              <a href="/" className="nav-links1">Sign in</a>
            </li>
            <li className="nav-item">
               <MdSubscriptions className='nav-item_icon'/>
              <a href="/" className="nav-links1">Subscription</a>
            </li>
            
            <li className="nav-item">
               <MdCreateNewFolder  className='nav-item_icon'/>
              <a href="/" className="nav-links1">About</a>
            </li>
            <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/ContactUs" className="nav-links1">Contact Us</a>
            </li>
             <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/Changepassword" className="nav-links1">Change Password</a>
            </li>
              <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/Login" className="nav-links1">Login</a>
            </li>
              <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/Register" className="nav-links1">Register</a>
            </li>
          </ul>
      </div>
    )}
  </nav>
);

}

export default Navbar;
