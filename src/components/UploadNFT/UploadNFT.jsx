import React, { useState, useRef } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import DropZone from "../DropZone/DropZone";
import './UploadNFT.css'

const UploadNFT = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sliderRef = useRef(null);

  const categoryArray = [
    { image: 'https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-exercise-icon-for-your-project-png-image_1548186.jpg', category: "Sport" },
    { image: 'https://cdn-icons-png.flaticon.com/512/4893/4893176.png', category: "Arts" },
    { image: 'https://cdn-icons-png.flaticon.com/512/4472/4472584.png', category: "Music" },
    { image: 'https://cdn-icons-png.freepik.com/256/4207/4207278.png?semt=ais_hybrid', category: "Digital" },
    { image: 'https://cdn-icons-png.flaticon.com/512/3133/3133158.png', category: "Time" },
    { image: 'https://cdn-icons-png.freepik.com/512/8635/8635996.png', category: "Photography" },
  ];

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * 100, 
        behavior: 'smooth'
      });
    }
  };

  return (
   <div>
     <div className="upload">
      <DropZone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
      />
      <div className="upload-box">
        <div className="form-box-input">
          <label htmlFor="nft">Item Name</label>
          <input type="text" placeholder="Shoaib bhai" />
        </div>
        <div className="form-box-input">
          <label htmlFor="website">Website</label>
          <div className="form-box-input-box">
            <div className="form-box-input-box-icon">
              <MdOutlineHttp />
            </div>
            <input type="text" placeholder="website" />
          </div>
        </div>
        <p>
          Ciscrypt will include a link to this URL on this item's detail page, so
          that users can click to learn more about it. You are welcome to link
          to your own webpage with more details.
        </p>
      </div>
      <div className="form-box-input">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="6"
          placeholder="Something about yourself in a few words"
        ></textarea>
        <p>
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </p>
      </div>
      <div className="form-box-input">
        <label htmlFor="name">Choose collection</label>
        <p>Choose an existing collection or create a new one</p>
        <div className="upload-box-slider-div" ref={sliderRef}>
          {categoryArray.map((el, i) => (
            <div
              className={`upload-box-slider ${selectedCategory === i ? 'active' : ''}`}
              key={i}
              onClick={() => handleCategoryClick(i)}
            >
              <div className="upload-box-slider-box">
                <div className="upload-box-slider-box-img">
                  <img
                    src={el.image}
                    alt={el.category}
                    width={70}
                    height={70}
                    style={{ objectFit: "contain" }}
                  />
                  <div className="upload-box-slider-box-img-icon">
                    {selectedCategory === i && <TiTick />}
                  </div>
                </div>
                <p>{el.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="form-box-input-social">
        <div className="form-box-input">
          <label htmlFor="royalties">Royalties</label>
          <div className="form-box-input-box">
            <div className="form-box-input-box-icon">
              <FaPercent />
            </div>
            <input type="text" placeholder="20%" />
          </div>
        </div>
        <div className="form-box-input">
          <label htmlFor="size">Size</label>
          <div className="form-box-input-box">
            <div className="form-box-input-box-icon">
              <MdOutlineAttachFile />
            </div>
            <input type="text" placeholder="165MB" />
          </div>
        </div>
        <div className="form-box-input">
          <label htmlFor="properties">Properties</label>
          <div className="form-box-input-box">
            <div className="form-box-input-box-icon">
              <AiTwotonePropertySafety />
            </div>
            <input type="text" placeholder="Properties" />
          </div>
        </div>
      </div>
      <div className="upload-box-btn">
        <button type="button" className="upload-box-btn-style">Upload</button>
        <button type="button" className="upload-box-btn-style">Preview</button>
      </div>
    </div>
   </div>
  );
};

export default UploadNFT;
