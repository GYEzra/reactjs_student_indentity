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
    <div className="reset-password-wrapper">
      <div className="reset-password-container">
        <h2>Đặt lại mật khẩu</h2>
        <p>* Sử dụng 8 ký tự trở lên bao gồm chữ thường, chữ in hoa, số và ký tự đặc biệt.</p>
        <form onSubmit={handleSubmit}>
          <label>Tài khoản: <span>username@example.com</span></label>
          <div className="input-group">
            <label>Mật khẩu mới</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Xác nhận mật khẩu mới</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">ĐẶT MẬT KHẨU</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
