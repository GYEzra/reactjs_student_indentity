import "./sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CollectionsIcon from "@mui/icons-material/Collections"; // For Create Collection
import ExploreIcon from "@mui/icons-material/Explore";
import DnsIcon from "@mui/icons-material/Dns";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ShareIcon from "@mui/icons-material/Share"; // For Share NFT
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ShareNFTModal from "../ShareNFTModal/ShareNFTModal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="sidebarlogo">FINTECH</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/Dashboard" style={{ textDecoration: "none" }}>
              <HomeIcon className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/BinanceChart" style={{ textDecoration: "none" }}>
              <ShowChartIcon className="icon" />
              <span>Live Pricing</span>
            </Link>
          </li>
          <li>
            <Link to="/NFTdetail" style={{ textDecoration: "none" }}>
              <ExploreIcon className="icon" />
              <span>NFT Detail</span>
            </Link>
          </li>
          <li>
            <Link to="/CreatePageDashboard" style={{ textDecoration: "none" }}>
              <CollectionsIcon className="icon" />
              <span>Create Collection</span>
            </Link>
          </li>
          <li>
            <Link to="/NFTsPage" style={{ textDecoration: "none" }}>
              <ExploreIcon className="icon" />
              <span>NFTs</span>
            </Link>
          </li>
          <li>
            <Link to="/PoolTable" style={{ textDecoration: "none" }}>
              <DnsIcon className="icon" />
              <span>Farm</span>
            </Link>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <Link to="/SwapComponent" style={{ textDecoration: "none" }}>
              <SwapHorizIcon className="icon" />
              <span>Swap</span>
            </Link>
          </li>
          <li onClick={openModal}>
            <ShareIcon className="icon" />
            <span>Share NFT</span>
          </li>
          <ShareNFTModal isOpen={isModalOpen} onClose={closeModal} />
          <p className="title">USER</p>
          <li>
            <Link to="/AccountDashboard" style={{ textDecoration: "none" }}>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <HowToVoteIcon className="icon" />
            <span>Vote</span>
          </li>
          <li>
            <LockIcon className="icon" />
            <span>Authentication</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick=''></div>
        <div className="colorOption" onClick=''></div>
      </div>
    </div>
  );
};

export default Sidebar;
