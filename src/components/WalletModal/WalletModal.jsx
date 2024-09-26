import React from "react";
import "./WalletModal.css";
import { MdPhone } from "react-icons/md";
import { BsFingerprint } from "react-icons/bs";

const WalletModal = ({ onClose }) => {
    return (
        <div className="modal-overlay_modal" onClick={onClose}>
            <div className="wallet-login_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close_modal">
                    <h2>Sign in</h2>
                    <button className="close-btn_modal" onClick={onClose}>✕</button>
                </div>
                
                <div className="login-options_modal">
                    <div className="wallet-option_modal">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' alt="Facebook" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://cdn-icons-png.flaticon.com/512/2875/2875331.png' alt="Google" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://cdn-icons-png.flaticon.com/256/5969/5969358.png' alt="Social Login" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://forum.zeroqode.com/uploads/default/original/2X/4/401498d7adfbb383fea695394f4f653ea4e7c9a7.png' alt="MetaMask" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://static-00.iconduck.com/assets.00/coinbase-icon-2048x2048-oq45l9cy.png' alt="Coinbase" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://cdn-icons-png.flaticon.com/512/458/458842.png' alt="Rainbow" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://img.cryptorank.io/coins/rabby_wallet1682490223501.png' alt="Rabby" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4uXNDSmA5YH_E-amhR-kWYjxL4TZqzvn-g&s' alt="Zerion" className="icon_modal" />
                    </div>
                </div>

                <input
                    type="email"
                    placeholder="Email address"
                    className="login-input_modal"
                />
                
                <button className="login-btn_modal">
                    Phone number
                </button>
                <button className="login-btn_modal">
                   Passkey
                </button>
                
                <span className="divider">or</span>

                <button className="connect-wallet-btn_modal">
                    Connect a Wallet
                </button>
            </div>
        </div>
    );
};

export default WalletModal;
