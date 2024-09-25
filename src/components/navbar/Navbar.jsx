import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'; // File CSS cho styling
import { IoMdSearch,IoMdArrowDropright } from "react-icons/io";
import { FaRegUserCircle,FaLongArrowAltRight,FaSignInAlt } from "react-icons/fa";
import { MdWallet,MdOutlineContactPhone,MdSubscriptions,MdAccountCircle,MdCreateNewFolder } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const handleUserClick = () => setShowFullMenu(!showFullMenu);

  // Function to handle scroll event and change navbar background
  const handleScroll = () => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    if (window.scrollY > headerHeight) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container_nav_header">
      <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
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
              <div className="search_nav">
                <IoMdSearch className='icon_search' />
                <input type="text" placeholder='Search' className='input_search' />
              </div>
              <div className="wallet1">
                <MdWallet className='icon_wallet' />
                <p>Login</p>
              </div>
              <div className="user_nav" onClick={handleUserClick}>
                <FaRegUserCircle className='icon_user' />
              </div>
          </div>
        </div>

        {showFullMenu && (
          <div className="full-menu">
             <ul>
            <li className="nav-item">
              <RiAccountCircleFill  className='nav-item_icon'/>
              <a href="/Account" className="nav-links">Account</a>
              {/* <IoMdArrowDropright className='icon_arrow_item'/> */}
            </li>
            <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/Dashboard" className="nav-links">About</a>
            </li>
            <li className="nav-item">
               <MdOutlineContactPhone  className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links">Contact Us</a>
            </li>
            <li className="nav-item">
               <FaSignInAlt className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links">Sign in</a>
            </li>
            <li className="nav-item">
               <MdSubscriptions className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links">Subscription</a>
            </li>
              <li className="nav-item">
                 <MdAccountCircle  className='nav-item_icon'/>
              <a href="/Account" className="nav-links">Account</a>
            </li>
            <li className="nav-item">
               <MdCreateNewFolder  className='nav-item_icon'/>
              <a href="/Dashboard" className="nav-links">About</a>
            </li>
            <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links">Contact Us</a>
            </li>
            <li className="nav-item">
               <RiAccountCircleFill className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links">Sign in</a>
            </li>
            <li className="nav-item">
               <RiAccountCircleFill  className='nav-item_icon'/>
              <a href="/UploadNFTPage" className="nav-links">Subscription</a>
            </li>
          </ul>
          </div>
        )}

      </nav>
      <div className="header">
        <div className="header-overlay">
          <h1>BLOCKCHAIN</h1>
          <p>This is a simple header with background image and overlay text</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
