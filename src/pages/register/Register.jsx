

import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { FaUserAlt, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const loginLink = () => {
    navigate('/login');
  };

  return (




  
       <div className="background-container">
       <img src='/img/background.jpg' alt="" />
    <div className="wrapper">
      <div className="form-box">
        <form>
          <h1>Đăng kí</h1>
          <div className="input-box">
            <input type="text" id="emailOrPhone"  value='' onChange='' placeholder="Email/Số điện thoại" required />
            <FaPhoneAlt className="icon" />
          </div>
         <div className="input-box">
            <input type="text"    id="lastName" placeholder="Họ"value='' onChange='' required />
            <FaUserAlt className="icon" />
          </div>
              <div className="input-box">
            <input type="text"  id="middleAndFirstName" placeholder="Tên đệm và tên" value='' onChange='' required />
            <FaUserAlt className="icon" />
          </div>
      
          <div className="input-box">
            <input type="password" id="password" placeholder="Mật khẩu" value='' onChange='' required />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input type="password" id="confirmPassword" placeholder="Nhập lại mật khẩu" value='' onChange='' required />
            <MdOutlinePassword className="icon" />
          </div>
        <div className="input-box">
            <input        type="text" id="referralCode" placeholder="Mã giới thiệu (nếu có)" value='' onChange='' />
            <MdOutlinePassword className="icon" />
          </div>
          
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Tôi đồng ý với các điều khoản ...
            </label>
          </div>
        
          <button className="submit">Đăng ký</button>
          <div className="register-link">
            <p>
              Bạn đã có tài khoản? <a href="#" onClick={loginLink}>Đăng nhập</a>
            </p>
          </div>
        </form>
      </div>
    </div>
      </div>
 
  );
};

export default Register;
