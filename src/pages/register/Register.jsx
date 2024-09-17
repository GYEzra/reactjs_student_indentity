import React from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const Register = () => {

  return (
    <div className="register-hongpiknuahihi">
      <div className="register-container">
      <ToastContainer />
      <div className="register-form">
        <h2>Đăng ký</h2>
        <form onSubmit=''>
          <div className="register_haa">
            <input
            type="text"
            id="emailOrPhone"
            placeholder="Email/Số điện thoại"
            value=''
            onChange=''
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Họ"
            value=''
            onChange=''
            required
          />
          <input
            type="text"
            id="middleAndFirstName"
            placeholder="Tên đệm và tên"
            value=''
            onChange=''
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Mật khẩu"
            value=''
            onChange=''
            required
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value=''
            onChange=''
            required
          />
          <input
            type="text"
            id="referralCode"
            placeholder="Mã giới thiệu (nếu có)"
            value=''
            onChange=''
          />
          </div>
          <button type="submit" disabled=''>
            Đăng ký
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;