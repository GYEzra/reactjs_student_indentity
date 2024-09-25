import React, { useState } from 'react';
import './SmartContractForm.css'

import { BiSolidImageAdd } from "react-icons/bi";
import { LuScrollText } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { MdOutlineDraw,MdOutlineMoreHoriz,MdOutlineFileUpload } from "react-icons/md";
import { FaEye,FaEthereum } from "react-icons/fa";
import { GiRoundKnob } from "react-icons/gi";
import { FaEyeLowVision,FaRegCircleDot } from "react-icons/fa6";







const SmartContractForm = () => {
    const [contractName, setContractName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
  
    return (

      <div className="contract-page">
        <div className="contract_container">
          <div className="left_contract">
            <div className="description">
              <h2>Let's create a smart contract for your drop.</h2>
              <p>You'll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.{' '} <a href="#" className="link">What is a contract?</a></p>
            </div>
            
            <div className="logo-upload">
              <div className="lable_box_group">
                <h3>Logo image</h3>
                <FaRegCircleDot className='icon_lable'/>
              </div>
           
               <div className="upload-box">
                  <div className="box_img">
                    <MdOutlineFileUpload className='icon_upload'/>
                  </div>
                  <div className="box_des">
                    <h3>Drag and drop or click to upload</h3>
                    <p>You may change this after deploying your contract.</p>
                    <p>Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</p>
                  </div>
               </div>
            </div>

            <div className="contract-details">
               <div className="input-group1">
                <div className="lable_box_group">
                 <h3>Contract name</h3>
                  <FaRegCircleDot className='icon_lable'/>
                </div>
                  <input type="text" value={contractName} onChange={(e) => setContractName(e.target.value)} placeholder="My Collection Name" className='input_group'/>
              </div>
              <div className="input-group2">
               <div className="lable_box_group">
                  <h3>Token symbol</h3>
                     <FaRegCircleDot className='icon_lable'/>
                </div>
                 <input type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} placeholder="MCN" className='input_group'/>
              </div>
            </div>

            <div className="blockchain-options">
              <div className="lable_box_group">
                <h3>Blockchain</h3>
                     <FaRegCircleDot className='icon_lable'/>
              </div>
               
               <div className="options3">
                  <div className="option3">
                    <FaEthereum color='white' className='icon_option3'/>
                    <h4>Ethereum</h4>
                    <div className="tag">
                      <p>Most popular</p>
                    </div>
                    
                    <p>Estimated cost to deploy contract: $13.53</p>
                  </div>
                  <div className="option3">
                    <GiRoundKnob color='white' className='icon_option3'/>
                    <h4>Base</h4>
                    <div className="tag">
                      <p>Cheaper</p>
                    </div>
                   
                    <p>Estimated cost to deploy contract: $0.01</p>
                  </div>
                  <div className="option3">
                    <MdOutlineMoreHoriz color='white' className='icon_option3'/>
                    <h4>See more options</h4>
                  </div>
               </div>
            </div>
              <div className="advanced-settings">
                <a href="#">Advanced settings</a>
            </div>

          </div>
          <div className="right_contract">
            <div className="doc">
              <div className="tilte_item">
                 <h3>After you deploy your contract you'll be able to:</h3>
              </div>
              <div className="list_des">
                <div className="list_item">
                    <LuScrollText className='icon_item'/>
                    <div className="lable_item">
                      <h4>Manage collection settings</h4>
                      <p>Edit collection details earnings, and links.</p>
                    </div>
                </div>
                <div className="list_item">
                    <BsStars className='icon_item'/>
                    <div className="lable_item">
                      <h4>Set up your drop</h4>
                      <p>Set up your mint schedule and presale stages.</p>
                    </div>
                </div>
                <div className="list_item">
                    <MdOutlineDraw className='icon_item'/>
                    <div className="lable_item">
                      <h4>Prepare designs</h4>
                      <p>Customize your pages and upload all asset.</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="doc">
              <div className="tilte_item">
                  <h3>Your community:</h3>
              </div>
              <div className="list_des">
                <div className="list_item">
                    <FaEyeLowVision className='icon_item'/>
                    <div className="lable_item">
                      <h4>Can't view</h4>
                      <p>Your drop page or items items until you publish them.</p>
                    </div>
                </div>
                <div className="list_item">
                    <FaEye className='icon_item'/>
                    <div className="lable_item">
                      <h4>Can view</h4>
                      <p>SCan view that you've deployed a contract onto the blockchain.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div className="contract-form">
      //   <h1 className="form-header">Let's create a smart contract for your drop.</h1>
      //   <p className="form-description">
      //     You'll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.{' '}
      //     <a href="#" className="link">What is a contract?</a>
      //   </p>
  
      //   <div className="form-container">
      //     <div className="left-section">
      //       <div className="logo-upload">
      //         <p className="upload-label">Logo image</p>
      //         <div className="upload-box">
      //           <p>Drag and drop or click to upload</p>
      //           <small>Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF</small>
      //         </div>
      //       </div>
  
      //       <div className="contract-details">
      //         <div className="input-group">
      //           <label>Contract name</label>
      //           <input
      //             type="text"
      //             value={contractName}
      //             onChange={(e) => setContractName(e.target.value)}
      //             placeholder="My Collection Name"
      //           />
      //         </div>
  
      //         <div className="input-group">
      //           <label>Token symbol</label>
      //           <input
      //             type="text"
      //             value={tokenSymbol}
      //             onChange={(e) => setTokenSymbol(e.target.value)}
      //             placeholder="MCN"
      //           />
      //         </div>
      //       </div>
  
      //       <div className="blockchain-options">
      //         <h3 className="options-header">Blockchain</h3>
      //         <div className="options3">
                // <div className="option3 ethereum selected">
                //   <p>Ethereum</p>
                //   <span className="tag">Most popular</span>
                //   <small>Estimated cost to deploy contract: $13.53</small>
                // </div>
                // <div className="option3 base">
                //   <p>Base</p>
                //   <small>Estimated cost to deploy contract: $0.01</small>
                // </div>
                // <div className="option3 more">
                //   <p>See more options</p>
                // </div>
      //         </div>
      //       </div>
      //     </div>
  
      //     <div className="right-section">
      //       <h3 className="section-header">After you deploy your contract you'll be able to:</h3>
      //       <ul className="list">
      //         <li className="list-item">Manage collection settings</li>
      //         <li className="list-item">Set up your drop</li>
      //         <li className="list-item">Prepare designs</li>
      //       </ul>
      //       <h4 className="section-header">Your community:</h4>
      //       <p className="section-description">Can't view your drop page or items until you publish them.</p>
      //       <p className="section-description">Can view that you've deployed a contract onto the blockchain.</p>
      //     </div>
      //   </div>
        // <div className="advanced-settings">
        //   <a href="#" className="link">Advanced settings</a>
        // </div>
      // </div>
    );
  };
  
export default SmartContractForm;
