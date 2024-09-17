import React, { useState } from 'react';
import './SmartContractForm.css'
const SmartContractForm = () => {
    const [contractName, setContractName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
  
    return (
      <div className="contract-form">
        <h1 className="form-header">Let's create a smart contract for your drop.</h1>
        <p className="form-description">
          You'll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.{' '}
          <a href="#" className="link">What is a contract?</a>
        </p>
  
        <div className="form-container">
          <div className="left-section">
            <div className="logo-upload">
              <p className="upload-label">Logo image</p>
              <div className="upload-box">
                <p>Drag and drop or click to upload</p>
                <small>Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</small>
              </div>
            </div>
  
            <div className="contract-details">
              <div className="input-group">
                <label>Contract name</label>
                <input
                  type="text"
                  value={contractName}
                  onChange={(e) => setContractName(e.target.value)}
                  placeholder="My Collection Name"
                />
              </div>
  
              <div className="input-group">
                <label>Token symbol</label>
                <input
                  type="text"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  placeholder="MCN"
                />
              </div>
            </div>
  
            <div className="blockchain-options">
              <h3 className="options-header">Blockchain</h3>
              <div className="options3">
                <div className="option3 ethereum selected">
                  <p>Ethereum</p>
                  <span className="tag">Most popular</span>
                  <small>Estimated cost to deploy contract: $13.53</small>
                </div>
                <div className="option3 base">
                  <p>Base</p>
                  <small>Estimated cost to deploy contract: $0.01</small>
                </div>
                <div className="option3 more">
                  <p>See more options</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="right-section">
            <h3 className="section-header">After you deploy your contract you'll be able to:</h3>
            <ul className="list">
              <li className="list-item">Manage collection settings</li>
              <li className="list-item">Set up your drop</li>
              <li className="list-item">Prepare designs</li>
            </ul>
            <h4 className="section-header">Your community:</h4>
            <p className="section-description">Can't view your drop page or items until you publish them.</p>
            <p className="section-description">Can view that you've deployed a contract onto the blockchain.</p>
          </div>
        </div>
        <div className="advanced-settings">
          <a href="#" className="link">Advanced settings</a>
        </div>
      </div>
    );
  };
  
export default SmartContractForm;
