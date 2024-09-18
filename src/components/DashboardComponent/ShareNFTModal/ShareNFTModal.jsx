import React from "react";
import "./ShareNFTModal.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ShareNFTModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ensure modal is only rendered when open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>SHARE THIS NFT</h3>
        <div className="icons-container">
          <div className="icon-item">
            <TwitterIcon className="share-icon" />
            <p>Twitter</p>
          </div>
          <div className="icon-item">
            <FacebookIcon className="share-icon" />
            <p>Facebook</p>
          </div>
          <div className="icon-item">
            <TelegramIcon className="share-icon" />
            <p>Telegram</p>
          </div>
          <div className="icon-item">
            <LinkedInIcon className="share-icon" />
            <p>LinkedIn</p>
          </div>
          <div className="icon-item">
            <ContentCopyIcon className="share-icon" />
            <p>Copy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareNFTModal;
