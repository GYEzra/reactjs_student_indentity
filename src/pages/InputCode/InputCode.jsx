// src/components/Login/Login.js

import 'react-toastify/dist/ReactToastify.css';




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoMdBarcode } from "react-icons/io";



import 'react-toastify/dist/ReactToastify.css';

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

       <div className="background-container">
       <img src='/img/background.jpg' alt="" />
    <div className="wrapper">
      <div className="form-box">
        <form>
          <h1>Nhập mã code</h1>
          <div className="input-box">
            <input type="text" placeholder="Mã code"  value={Code}
          onChange={(e) => setCode(e.target.value)} />
            <IoMdBarcode className="icon" />
          </div>
        
                 <button onClick={handleSendVerificationCode} className="submit">
          Gửi mã xác minh
        </button>
          <div className="register-link">
            <p>
              <a href="#">Trở về trang chủ</a>
            </p>
          </div>
           <ToastContainer />
        </form>
      </div>
    </div>
    </div>
  );
};

export default InputCode;
