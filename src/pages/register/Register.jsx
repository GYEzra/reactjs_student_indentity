
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaUserAlt, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleAndFirstName, setMiddleAndFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (emailOrPhone.length !== 10 || isNaN(emailOrPhone)) {
      toast.error('Số điện thoại phải đủ 10 ký tự và là số.');
  
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
       toast.error('Mật khẩu và xác nhận mật khẩu không trùng khớp.');
   
      return;
    }
 
    try {
   
      setError(null);
      toast.success('Registration successful!');
      navigate('/login'); 
    } catch (error) {
      setError(error.message);
      toast.error('Registration failed. Please check your input.');
    }
  };

  const loginLink = () => {
    navigate('/login');
  };

  return (
    <div className="background-container_register">
      <img src='/img/background.jpg' alt="" />
      <div className="wrapper_register">
        <div className="form-box_register">
          <form onSubmit={handleSubmit}>
            <h1>Đăng kí</h1>
            <div className="input-box_register">
              <input
                type="text"
                id="emailOrPhone"
                placeholder="Email/Số điện thoại"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
              <FaPhoneAlt className="icon_register_page" />
            </div>
            <div className="input-box_register">
              <input
                type="text"
                id="lastName"
                placeholder="Họ"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <FaUserAlt className="icon_register_page" />
            </div>
            <div className="input-box_register">
              <input
                type="text"
                id="middleAndFirstName"
                placeholder="Tên đệm và tên"
                value={middleAndFirstName}
                onChange={(e) => setMiddleAndFirstName(e.target.value)}
                required
              />
              <FaUserAlt className="icon_register_page" />
            </div>
            <div className="input-box_register">
              <input
                type="password"
                id="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon_register_page" />
            </div>
            <div className="input-box_register">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}   

                required
              />
              <MdOutlinePassword className="icon_register_page" />
            </div>
    
            <button className="submit_register">Đăng ký</button>
            <div className="register-link">
              <p>
                Bạn đã có tài khoản? <a href="#" onClick={loginLink}>Đăng nhập</a>
              </p>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;