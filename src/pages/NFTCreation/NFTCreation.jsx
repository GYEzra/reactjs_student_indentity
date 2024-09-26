import React from 'react';
import './NFTCreation.css';


const NFTCreation = () => {
  return (
    <div className='NFTCreation_CN'>
      <div className="nft-creation-container">
        <div>
          <h1>Create an NFT</h1>
          <h5>Once your item is minted, you will not be able to change any of its information</h5>
          <div className="media-upload">
            <div className="upload-box">
              <p>Drag and drop media</p>
              <p><a href="#">Browse files</a></p>
              <p>Max size: 50MB</p>
              <p>JPG, PNG, GIF, SVG, MP4</p>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="collection-section">
            <button className="create-collection-btn">+ Create a new collection</button>
            <p>Not all collections are eligible. <a href="#">Learn more</a></p>
          </div>
          <form className="nft-form">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Name your NFT" />
            </div>
            <div className="form-group">
              <label>Supply *</label>
              <input type="number" defaultValue={1} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Enter a description"></textarea>
            </div>
            <div className="form-group">
              <label>External link</label>
              <input type="text" placeholder="https://collection.io/item/123" />
            </div>
            <div className="form-group">
              <label>Traits</label>
              <button className="add-trait-btn">+ Add trait</button>
            </div>
            <button type="submit" className="create-btn">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NFTCreation;
