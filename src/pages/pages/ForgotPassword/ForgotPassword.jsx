import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendVerificationCode = () => {
    const validEmail = "example@example.com";

    if (email === validEmail) {
      navigate("/inputCode");
    } else {
      toast.error("Bạn đã nhập sai email. Vui lòng thử lại!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div className="forgotPassword">
      <div className="navbar"></div>
      <div className="fpContainer">
        <h1>Quên Mật Khẩu</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="fpInput"
        />
        <button onClick={handleSendVerificationCode} className="fpButton">
          Gửi mã xác minh
        </button>
        <div>
          <Link to="/">Trở lại trang chủ</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
