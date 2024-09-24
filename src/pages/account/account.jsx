

import React, { useState, useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import './account.css';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { FaUser, FaEdit,FaCamera } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";


const Account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFileUrl(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",

  });

  return (

    <div className="account">

    <div className="nav_account">
      <div className="text_wellcome">
       <h4>My Account</h4>
       <p>Wellcome to .....</p>
      </div>
      <div className="auth">
        <IoIosNotifications size={30} className='icon_notify'/>
        <img src={fileUrl || "https://imedia.imuzik.com.vn/media1/ckfinder/images/2(261).jpg"} alt="Uploaded avatar" />
         <p>Hello van a</p>
          <RiArrowDropDownFill size={33}/>
      </div>
    </div>

    <div className="container">
      
        <div className="avatar">
            <div>
            <img src={fileUrl || "https://imedia.imuzik.com.vn/media1/ckfinder/images/2(261).jpg"} alt="Uploaded avatar" />
            <input {...getInputProps()} />
            </div>
            <div className="upload_img" {...getRootProps()}> 
             <FaCamera size={20} className='edit_icon' />
            </div>
  
            <div className="text_info">
                <p> nguyễn văn a</p>
                <p> tp.hcm</p>
                 <div className="btn">
                <button>Follow</button>
                <button>Message</button>
            </div>
            </div>
           
  </div>
      
      <div className="social">
     
        <div className='box_social'>
          <TiSocialFacebook size={30} className='icon' />
          <p>Facebook</p>
        </div>
  
        <div className='box_social'>
          <TiSocialTwitter size={30} className='icon' />
          <p>Twitter</p> 
        </div>
       
        <div className='box_social'>
          <TiSocialLinkedin size={30} className='icon' />
          <p>LinkedIn</p> 
        </div>
        
        <div className='box_social'>
          <TiSocialInstagram size={30} className='icon' />
          <p>Instagram</p>
        </div>
      </div>
    <div className="info">
    
      <div className="text_info1">
         <div className="lable_icon">
              <FaUser className='icon'/>
              <p>Full Name</p> 
            </div>
            <div className="info_title">
             <p>Johnatan Smith</p>
            </div>
      </div>
       <div className="text_info1">
         <div className="lable_icon">
              <FaPhone className='icon'/>
              <p>Phone</p> 
            </div>
            <div className="info_title">
             <p>Johnatan Smith</p>
            </div>
      </div>
       <div className="text_info1">
         <div className="lable_icon">
              <MdEmail className='icon'/>
              <p>Email</p> 
            </div>
            <div className="info_title">
             <p>Johnatan Smith</p>
            </div>
      </div>
       <div className="text_info1">
         <div className="lable_icon">
              <FaLocationDot className='icon'/>
              <p>Address</p> 
            </div>
            <div className="info_title">
             <p>Johnatan Smith Johnatan Smith Johnatan Smith</p>
            </div>
      </div>

          
        </div>

       </div>
 
 </div>
     
  )
}

export default Account




