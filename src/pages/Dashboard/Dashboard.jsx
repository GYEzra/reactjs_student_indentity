import Sidebar from "../../components/DashboardComponent/sidebar/Sidebar";
import Navbar from "../../components/DashboardComponent/navbar/Navbar";
import "./Dashboard.css";
import AssetNFTDisplay from "../../components/DashboardComponent/AssetNFTDisplay/AssetNFTDisplay.jsx";
import AssetComponent from "../../components/DashboardComponent/AssetComponent/AssetComponent.jsx";
import History from "../../components/DashboardComponent/History/History.jsx";
import Statistic from "../../components/DashboardComponent/Statistic/Statistic.jsx";
import Exchange from "../../components/DashboardComponent/Exchange/Exchange.jsx";
import AssentCrypto from "../../components/DashboardComponent/AssentCrypto/AssentCrypto.jsx";
const Dashboard = () => {
  return (
    <div className="DashboardHome">
      <div className="DashboardHomeSideBar">
        <Sidebar />
      </div>   
      <div className="DashboardHomeContainer">
        <Navbar /> 
        <AssentCrypto/>
        <div className='DashboardHomeStatisticExchange'>
          <div className="DashboardHomeStatistic">
            <Statistic />
          </div>
          <div className="ashboardHomeExchange">
            <Exchange />
          </div>
      </div>
        <AssetNFTDisplay/>
        <AssetComponent/>
        <History/>
       
      </div>
    </div>
  );
};

export default Dashboard;
