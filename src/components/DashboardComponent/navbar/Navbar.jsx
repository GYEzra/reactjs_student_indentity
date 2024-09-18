import React, { useState } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import WalletLogin from "../../WalletModal/WalletModal"; 

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true); 
  };

  const handleClose = () => {
    setOpenModal(false);  
  };

  return (
    <div className="navbarDashboard">
      <div className="wrapper1">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://cdn.24h.com.vn/upload/4-2019/images/2019-10-31/1572488402-287-hot-girl-tu-linh-mu-song-ra-sao-sau-2-nam-ket-hon-voi-doanh-nhan-dien-trai-tulinh-0-1572432546-width660height470.jpg"
              alt=""
              className="avatar"
            />
          </div>
          <div className="item">
            <button className="connect-button" onClick={handleClick}>
              CONNECT
            </button>
          </div>
        </div>
      </div>
      
      {openModal && <WalletLogin onClose={handleClose} />}
    </div>
  );
};

export default Navbar;
