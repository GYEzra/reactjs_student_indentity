
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import   
 { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword]   
 = useState('');
  const [error, setError] = useState(null);   


  // Simulated login data (replace with actual API call)
  const fakeLoginData = {
    username: 'abc',
    password: '123',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate username and password
    if (username !== fakeLoginData.username || password !== fakeLoginData.password) {
 
      toast.error('Invalid username or password. Please try again.');
      return;
    }

    // Simulate successful login (replace with actual logic)
    setError(null);
    toast.success('Login successful!');
    navigate('/Dashboard'); // Replace with your desired dashboard route
  };

  const registerLink = () => {
    navigate('/register');
  };

  return (
    <div className="background-container">
      <img src='/img/background.jpg' alt="" />
      <div className="wrapper">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Người dùng"
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUserAlt className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Mật khẩu"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;