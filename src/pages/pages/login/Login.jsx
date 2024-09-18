import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
import { Link } from 'react-router-dom';
const Login = () => {

  return (
    <div className="login">
      <div className="loginText">
        <h1>Kết nối giá trị - Trải nghiệm tinh hoa </h1>
        <span>
          Đặc quyền ưu việt dành riêng cho thành viên khi trải nghiệm sản phẩm và<br />
          dịch vụ trong hệ sinh thái toàn diện 
        </span>
      </div>

      <div className="lContainer">
        <h1>Đăng Nhập</h1>
        <input
          type="text"
          placeholder="Người dùng"
          id="username"
          value=''
          onChange=''
          className="lInput"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          id="password"
          value=''
          onChange=''
          className="lInput"
        />
        <div className="forget">
          <label>
            <input type="checkbox" />Nhớ mật khẩu
          </label>
        </div>
        <button disabled='' onClick='' className="lButton">
          Đăng Nhập
        </button>
        <div className="forgetPassword">
          <Link to="/forgotpassword" className="forgotPasswordLink">Quên mật khẩu?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;