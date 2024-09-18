import "./sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ExploreIcon from "@mui/icons-material/Explore";
import DnsIcon from "@mui/icons-material/Dns";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
            <HomeIcon className="icon" />
            <span>Home</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <ShowChartIcon className="icon" />
            <span>Live Pricing</span>
          </li>
          <li>
            <SmartToyIcon className="icon" />
            <span>Trading Bot</span>
          </li>
          <li>
            <ExploreIcon className="icon" />
            <span>NFTs</span>
          </li>
          <li>
            <DnsIcon className="icon" />
            <span>Farm</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SwapHorizIcon className="icon" />
            <span>Swap</span>
          </li>
          <li>
            <HourglassEmptyIcon className="icon" />
            <span>Liquidity</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
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
        <div
          className="colorOption"
          onClick=''
        ></div>
        <div
          className="colorOption"
          onClick=''
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
