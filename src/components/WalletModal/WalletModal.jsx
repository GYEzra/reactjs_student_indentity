import React from "react";
import "./WalletModal.css";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { BsFingerprint } from "react-icons/bs";

const WalletModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="wallet-login1" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✕</button>
                    <div className="wallet-options1">
                        <div className="wallet-option1">
                        <img src='https://cdn-icons-png.flaticon.com/256/5969/5969358.png' alt="Social Login" className="icon1" />
                        <span>Social Login</span>
                    </div>
                    <div className="wallet-option1">
                        <img src='https://forum.zeroqode.com/uploads/default/original/2X/4/401498d7adfbb383fea695394f4f653ea4e7c9a7.png' alt="MetaMask" className="icon1" />
                        <span>MetaMask</span>
                    </div>
                    <div className="wallet-option1">
                        <img src='https://static-00.iconduck.com/assets.00/coinbase-icon-2048x2048-oq45l9cy.png' alt="Coinbase" className="icon1" />
                        <span>Coinbase Wallet</span>
                    </div>
                    <div className="wallet-option1">
                        <img src='https://cdn-icons-png.flaticon.com/512/458/458842.png' alt="Rainbow" className="icon1" />
                        <span>Rainbow</span>
                    </div>
                    <div className="wallet-option1">
                        <img src='https://img.cryptorank.io/coins/rabby_wallet1682490223501.png' alt="Rabby" className="icon1" />
                        <span>Rabby</span>
                    </div>
                    <div className="wallet-option1">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4uXNDSmA5YH_E-amhR-kWYjxL4TZqzvn-g&s' alt="Zerion" className="icon1" />
                        <span>Zerion</span>
                    </div>
                    <div className="wallet-option1">
                    <img src='https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Wallet-icon.png' alt="MetaMask" className="icon1" />
                        <span>All Wallets</span>
                    </div>
                </div>
                <div className="login-options">
                    <div className="social-icons1">
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
                        
                        <button className="login-btn1">
                            <MdPhone className="icon1" /> Phone number
                        </button>
                        <button className="login-btn1">
                            <BsFingerprint className="icon1" /> Passkey
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default WalletModal;
