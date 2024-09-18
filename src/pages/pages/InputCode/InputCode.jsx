import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import "./InputCode.css";

const InputCode = () => {
  const [Code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSendVerificationCode = () => {
    const validCode = "123";

    if (Code === validCode) {
      navigate("/resetPassword");
    } else {
      toast.error("Bạn đã nhập sai mã code. Vui lòng thử lại!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div className="InputCode">
      <div className="navbar"></div>
      <div className="fpContainer">
        <h1>Nhập mã code</h1>
        <input
          type="email"
          placeholder="Email"
          value={Code}
          onChange={(e) => setCode(e.target.value)}
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

export default InputCode;
