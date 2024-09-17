// src/components/Login/Login.js

import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import { PiPasswordFill } from "react-icons/pi";
import { FaLock } from "react-icons/fa";
import React, { useState } from 'react';
import './resetPassword.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Password reset successful');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (

        <div className="background-container">
       <img src='/img/background.jpg' alt="" />
    <div className="wrapper">
      <div className="form-box">
        <form>
          <h1>Đặt lại mật khẩu</h1>
           {/* <p>* Sử dụng 8 ký tự trở lên bao gồm chữ thường, chữ in hoa, số và ký tự đặc biệt.</p>
         <label>Tài khoản: <span>username@example.com</span></label> */}

          <div className="input-box">
          
            <input type="text" placeholder="Nhập mật khẩu mới"   value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
            <FaLock className="icon" />
          </div>
        

          <div className="input-box">
         
            <input type="text" placeholder="Nhập lại mật khẩu mới" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required/>
            <PiPasswordFill className="icon" />
          </div>
          
        
           <button className="submit">
         Đặt mật khẩu
        </button>
          <div className="register-link">
            <p>
              <a href="#">Trở về trang chủ</a>
            </p>
          </div>
    
        </form>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
