// src/components/Login/Login.js

import 'react-toastify/dist/ReactToastify.css';

import { MdEmail } from "react-icons/md";


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

        <div className="background-container">
       <img src='/img/background.jpg' alt="" />
    <div className="wrapper">
      <div className="form-box">
        <form>
          <h1>Quên mật khẩu</h1>
          <p>example@example.com</p>
          <div className="input-box">
            <input type="text" placeholder="Email"  value={email}
          onChange={(e) => setEmail(e.target.value)} />
            <MdEmail className="icon" />
          </div>
        
                 <button onClick={handleSendVerificationCode} className="submit">
          Gửi mã xác minh
        </button>
          <div className="register-link">
            <p>
              <a href="#" >Trở về trang chủ</a>
            </p>
          </div>
           <ToastContainer />
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
