import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import './ChangePassword.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the old password is correct
        const fakeOldPassword = 'NguyenVanA012345678@!';
        if (oldPassword !== fakeOldPassword) {
            toast.error('Mật khẩu cũ không chính xác.');
            return;
        }

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            toast.error('Vui lòng nhập lại mật khẩu chính xác.');
            return;
        }

        // Kiểm tra độ phức tạp của mật khẩu
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])/;
        if (!regex.test(newPassword) || newPassword.length < 8) {
            toast.error('Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ cái in hoa, chữ thường, số và ký tự đặc biệt.');
            return;
        }

        // If everything is fine, proceed with changing the password
        console.log('Đổi mật khẩu thành công');
        toast.success('Đổi mật khẩu thành công.');
    };

    return (
        <div className="background-container_changepass">
            <img src='/img/background.jpg' alt="Background" />
            <div className="wrapper_changepass">
                <div className="form-box_changepass">
                    <form onSubmit={handleSubmit}>
                        <h1>Đổi mật khẩu</h1>

                        <div className="input-box_changepass">
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu cũ"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                    
                        </div>

                        <div className="input-box_changepass">
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu mới"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                       
                        </div>

                        <div className="input-box_changepass">
                            <input
                                type="password"
                                placeholder="Nhập lại mật khẩu mới"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                          
                        </div>

                        <button type="submit" className="submit_changepass">
                            Đổi mật khẩu
                        </button>
                        <div className="register-link">
                            <p>
                                <a href="#">Trở về trang chủ</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChangePassword;
