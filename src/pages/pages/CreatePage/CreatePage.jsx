import React from 'react';
import './CreatePage.css';
import { Link } from 'react-router-dom';
const CreatePage = () => {
  return (
    <div className='CreatePage'>  
        
        <div className="create-page">
   
      <div className="left-section">
        
        <div className="options1">
        <h1>Create</h1>
          <div className="option1">
          
          <Link to="/SmartContractForm">
            <h2>Drop</h2>
            <p>A drop is the release of a new project. This usually happens on a specified date and time. Items will be revealed after they have been purchased.</p>
            <span className="arrow">→</span>
            </Link>
          </div>
          <div className="option">
          <Link to="/UploadNFTPage">
            <h2>Collection or item</h2>
            <p>Create a new NFT collection or add an NFT to an existing one. Your items will display immediately. List for sale when you're ready.</p>
            <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <a href="/learn-more" className="learn-more">Learn more</a>
      </div>

      <div className="right-section-h3">
        <img
          src="https://blog.redbrick.vn/wp-content/uploads/2021/05/buc-tranh-noi-tieng-the-gioi-doart-4-1.jpg"
          alt="Featured Crowd"
        />
        <span className="featured-text">Featured - Crowd</span>
      </div>
    </div>
    </div>
  );
};

export default CreatePage;
