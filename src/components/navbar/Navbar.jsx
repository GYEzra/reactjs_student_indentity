import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import "./navbar.css";

const fakeUser = {
  username: "Nguyễn Văn A",
  img: "https://static.tuoitre.vn/tto/i/s626/2017/03/21/2-1-1490080249.jpg"
};

const Navbar = () => {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(fakeUser);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <header>
      <h3>FINTECH</h3>
      <nav ref={navRef}>
        <a href="/#">Collection</a>
        <a href="/#">Search</a>
        <a href="/Account">Account Setting</a>
        <a href="/#">Create Collection</a>
        <a href="/#">Upload NFT</a>
        <a href="#" onClick={toggleDropdown} className="has-dropdown">
          Menu
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>


      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>


      {showDropdown && (
        <div className="dropdown-menu">
          <a href="/#">About</a>
          <a href="/#">Contact</a>
          <a href="/#">Sign in</a>
          <a href="/#">Subscribe</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
