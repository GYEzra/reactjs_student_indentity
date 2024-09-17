// src/components/Login/Login.js

import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./login.css";




const Login = () => {
  const navigate = useNavigate();

  const registerLink = () => {
    navigate('/register');
  };

  return (
    <div className="background-container">
       <img src='/img/background.jpg' alt="" />
      <div className="wrapper">
        <div className="form-box">
          <form>
            <h1>Login kakakakak</h1>
            <div className="input-box">
             
              <input type="text" placeholder="Người dùng" id='username' required />
              <FaUserAlt className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Mật khẩu" id='password' required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Nhớ mật khẩu
              </label>
              <a href="/forgotpassword">Quên mật khẩu?</a>
            </div>
            <button className="submit">Đăng nhập</button>
            <div className="register-link">
              <p>
                Bạn chưa có tài khoản? <a href="#" onClick={registerLink}>Đăng ký</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
