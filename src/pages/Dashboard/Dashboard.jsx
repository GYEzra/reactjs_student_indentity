import Sidebar from "../../components/DashboardComponent/sidebar/Sidebar";
import Navbar from "../../components/DashboardComponent/navbar/Navbar";
import "./Dashboard.scss";
import Widget from "../../components/DashboardComponent/widget/Widget";
import Featured from "../../components/DashboardComponent/featured/Featured";
import Chart from "../../components/DashboardComponent/chart/Chart";
import TrendingList from "../../components/TrendingList/TrendingList.jsx";
import CardSlider from "../../components/CardSlider/CardSlider.jsx";
import WalletLogin from "../../components/WalletLogin/WalletLogin.jsx";
import SubscriptionPlans from "../../components/SubscriptionPlans/SubscriptionPlans.jsx";
import Service1 from "../../components/Service1/Service.jsx";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Sidebar />
      <div className="DashboardContainer">
      
        <Navbar /> 
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        
       
        
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <br/>
        <WalletLogin/>
        <br/> <br/> <br/> <br/>
        <SubscriptionPlans/>
        <br/> <br/> <br/>
          <TrendingList/>
      </div>
    </div>
  );
};

export default Dashboard;
