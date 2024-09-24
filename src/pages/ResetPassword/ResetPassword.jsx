import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import   
 { FaLock } from 'react-icons/fa';
import { PiPasswordFill } from "react-icons/pi";
import './resetPassword.css';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');   
     const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
         
            toast.error('Vui lòng nhập lại mật khẩu chính xác.');
            return;
        }

        // Kiểm tra độ phức tạp của mật khẩu
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])/;
        if (!regex.test(password) || password.length < 8) {
           toast.error('Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ cái in hoa, chữ thường, số và ký tự đặc biệt.');
        
            return;
        }

        // Nếu mọi thứ ổn, tiến hành đặt lại mật khẩu (thực tế sẽ gọi API ở đây)
        console.log('Đặt lại mật khẩu thành công');
    };


  return (

        <div className="background-container">
       <img src='/img/background.jpg' alt="" />
    <div className="wrapper">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
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
             {error && <p className="error-message">{error}</p>}
      </div>
    </div>
          <ToastContainer />
    </div>
  );
};

export default ResetPassword;
