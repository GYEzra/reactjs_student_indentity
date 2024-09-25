import React from "react";
import "./WalletLogin.css";
import { FaApple } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { BsFingerprint } from "react-icons/bs";

const WalletLogin = () => {
    return (
    <div className="wallet">
        {/* <h4>Kết nối ví</h4> */}
        <div className="wallet-login">
          <div className="wallet-options">
                <div className="wallet-option">
                <img src='https://cdn-icons-png.flaticon.com/256/5969/5969358.png' alt="MetaMask" className="icon" />
                    <span>Social Login</span>
                </div>
                <div className="wallet-option">
                    <img src='https://forum.zeroqode.com/uploads/default/original/2X/4/401498d7adfbb383fea695394f4f653ea4e7c9a7.png' alt="MetaMask" className="icon" />
                    <span>MetaMask</span>
                </div>
                <div className="wallet-option">
                    <img src='https://static-00.iconduck.com/assets.00/coinbase-icon-2048x2048-oq45l9cy.png' alt="Coinbase" className="icon" />
                    <span>Coinbase Wallet</span>
                </div>
                <div className="wallet-option">
                <img src='https://cdn-icons-png.flaticon.com/512/458/458842.png' alt="MetaMask" className="icon" />
                    <span>Rainbow</span>
                </div>
                <div className="wallet-option">
                <img src='https://img.cryptorank.io/coins/rabby_wallet1682490223501.png' alt="MetaMask" className="icon" />
                    <span>Rabby</span>
                </div>
                <div className="wallet-option">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4uXNDSmA5YH_E-amhR-kWYjxL4TZqzvn-g&s' alt="Zerion" className="icon" />
                    <span>Zerion</span>
                </div>
                <div className="wallet-option">
                <img src='https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Wallet-icon.png' alt="MetaMask" className="icon" />
                    <span>All Wallets</span>
                </div>
            </div>
            <div className="login-options">
                <div className="social-icons">
                    <div className="gg-icon">
                        <img src='https://cdn-icons-png.flaticon.com/512/2875/2875331.png' alt="GG" className="icon" />
                    </div>
                    <div className="apple-icon">
                        <FaApple className="icon" />
                    </div>
                    <div className="fb-icon">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' alt="FB" className="icon" />
                    </div>
                </div>
                <span className="divider">or</span>
                <input
                    type="email"
                    placeholder="Email address"
                    className="login-input"
                />
                <div className="btn">
                    <button className="login-btn">
                    <MdPhone className="icon" /> Phone number
                </button>
                <button className="login-btn">
                    <BsFingerprint className="icon" /> Passkey
                </button> 
                </div>
               
            </div>

             
        </div>
    </div>
        
    );
};

export default WalletLogin;
