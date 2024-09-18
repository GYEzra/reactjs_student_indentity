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
        <Route path="/CreatePage" element={<CreatePage/>} />
        <Route path="/SmartContractForm" element={<SmartContractForm/>} />
        
        <Route path="/Dashboard">
          <Route index element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
