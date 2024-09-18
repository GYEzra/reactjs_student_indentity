import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { AuthContext } from "../../../context/AuthContext";      
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const fakeUser = {
  username: "Nguyễn Văn A",
  img: "https://static.tuoitre.vn/tto/i/s626/2017/03/21/2-1-1490080249.jpg" 
};

const Navbar = () => {

  const [user, setUser] = useState(fakeUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null); 
  };

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbarproject">
        <div className="navContainerproject">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">FINTECH</span>
          </Link>

          {user ? (
            <div className="navItems">
              <div className="userInfo">
                {user.img && <img src={user.img} alt="User" className="userImg" />}
                <span className="username">{user.username}</span>
              </div>
              <button className="navButton" onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          ) : null}
        </div>
        {user ? null : (
          <div className="navItems">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="navButton">Đăng ký</button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="navButton">Đăng nhập</button>
            </Link>
          </div>
        )}
      </div>
      <div className="navbarBottom">
        <ul className="headernavbar">
          <li onClick={toggleMenu} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faBars} />
          </li>
            <li><Link to="/CreatePage" className="navbarLink">Collection</Link></li>
            <li><Link to="/Dashboard" className="navbarLink">Dashboard</Link></li>
            <li><Link to="/Account" className="navbarLink">AccountSetting</Link></li>
            <li><Link to="/" className="navbarLink">Create Collection</Link></li>
            <li><Link to="/UploadNFTPage" className="navbarLink">Upload NFT</Link></li>
        </ul>
        {isMenuOpen && (
          <div className="dropdownMenu">
            <h4>Menu</h4>
            <ul>
              <li><Link to="/" className="navbar11">About</Link></li>
              <li><Link to="/" className="navbar11">Contact Us</Link></li>
              <li><Link to="/" className="navbar11">Sign in</Link></li>
              <li><Link to="/" className="navbar11">Subsription</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
