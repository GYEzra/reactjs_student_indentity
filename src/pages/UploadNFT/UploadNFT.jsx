import React from 'react';
import UploadNFTComponent from '../../components/UploadNFT/UploadNFT'; 
import './UploadNFT.css';
import Navbar from "../../components/navbar/Navbar";

const UploadNFTPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="upload-nft">
      <div className="upload-nft-box">
        <div className="upload-nft-box-heading">
          <h1>Create New NFT</h1>
          <p>
            You can set a preferred display name, create your profile URL, and manage other personal settings.
          </p>
        </div>
        <div className="upload-nft-box-title">
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB.
          </p>
        </div>
        <div className="upload-nft-box-form">
          <UploadNFTComponent /> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default UploadNFTPage;
