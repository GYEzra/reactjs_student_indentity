import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import InputCode from "./pages/InputCode/InputCode";
import UploadNFTPage from "./pages/UploadNFT/UploadNFT.jsx";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage.jsx";
import Account from "./pages/account/account.jsx";
import CreatePage from "./pages/CreatePage/CreatePage.jsx";
import SmartContractForm from "./pages/SmartContractForm/SmartContractForm.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import BinanceChart from "./pages/BinanceChart/BinanceChart.jsx";
import SwapComponent from "./pages/SwapComponent/SwapComponent.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import CreatePageDashboard from "./pages/CreatePageDashboard/CreatePageDashboard.jsx";
import AccountDashboard from "./pages/AccountDashboard/AccountDashboard.jsx";
import AssetNFTDisplay from "./components/DashboardComponent/AssetNFTDisplay/AssetNFTDisplay.jsx";
import AssetComponent from "./components/DashboardComponent/AssetComponent/AssetComponent.jsx";
import PoolTable from "./pages/PoolTable/PoolTable.jsx";
import NFTCreation from "./pages/NFTCreation/NFTCreation.jsx";
import NFTsPage from "./pages/NFTsPage/NFTsPage.jsx";
import NFTDetail from "./pages/NFTDetail/NFTDetail.jsx";
import ChangePassword from "./pages/ChangePassword/ChangePassword.jsx"
import TransferItem from "./pages/TransferItem/TransferItem.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword/>} />
        <Route path="/inputCode" element={<InputCode/>} />
        <Route path="/UploadNFTPage" element={<UploadNFTPage/>} />
        <Route path="/Subscription" element={<SubscriptionPage/>} />
        <Route path="/Account" element={<Account/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/CreatePage" element={<CreatePage/>} />
        <Route path="/CreatePageDashboard" element={<CreatePageDashboard/>} />
        <Route path="/SmartContractForm" element={<SmartContractForm/>} />
        <Route path="/BinanceChart" element={<BinanceChart/>}/>
        <Route path="/SwapComponent" element={<SwapComponent/>}/>
        <Route path="/AccountDashboard" element={<AccountDashboard />}/>
        <Route path="/AssetNFTDisplay" element={<AssetNFTDisplay/>}/>
        <Route path="/AssetComponent " element={<AssetComponent />}/>
        <Route path="/PoolTable" element={<PoolTable/>}/>
        <Route path="/NFTCreation" element={<NFTCreation/>}/>
        <Route path="/NFTsPage" element={<NFTsPage/>}/>
        <Route path="/NFTDetail" element={<NFTDetail/>}/>
        <Route path="/ChangePassword" element={<ChangePassword/>}/>
        <Route path="/TransferItem" element={<TransferItem/>}/>
        <Route path="/Dashboard">
          <Route index element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
