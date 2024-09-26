import Sidebar from "../../components/DashboardComponent/sidebar/Sidebar";
import Navbar from "../../components/DashboardComponent/navbar/Navbar";
import "./Dashboard.css";
import Widget from "../../components/DashboardComponent/widget/Widget";
import Featured from "../../components/DashboardComponent/featured/Featured";
import Chart from "../../components/DashboardComponent/chart/Chart";
import TrendingList from "../../components/TrendingList/TrendingList.jsx";
import CardSlider from "../../components/CardSlider/CardSlider.jsx";
import WalletLogin from "../../components/WalletLogin/WalletLogin.jsx";
import SubscriptionPlans from "../../components/SubscriptionPlans/SubscriptionPlans.jsx";
import Service1 from "../../components/Service1/Service.jsx";
import AssetNFTDisplay from "../AssetNFTDisplay/AssetNFTDisplay.jsx";
const Dashboard = () => {
  return (
    <div className="DashboardHome">
      <div className="DashboardHomeSideBar">
        <Sidebar />
      </div>   
      <div className="DashboardHomeContainer">
        <Navbar /> 
        <AssetNFTDisplay/>
      </div>
    </div>
  );
};

export default Dashboard;
