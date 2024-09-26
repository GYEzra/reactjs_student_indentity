import React, { useState, useCallback } from 'react';
import { useDropzone } from "react-dropzone";
import './AccountDashboard.css';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { FaUser, FaEdit,FaCamera } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import Sidebar from '../../components/DashboardComponent/sidebar/Sidebar';


const AccountDashboard = () => {
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
  <div className='ProfileDashboard'>
    <div className='accountDashboard_sidebar'>
        <Sidebar/>
      </div>
    <div className="accountDashboard">

      <div className="nav_accountDashboard">
        <div className="text_wellcomeDashboard">
        <h4>My Account</h4>
        <p>Wellcome to .....</p>
        </div>
        <div className="authDashboard">
          <IoIosNotifications size={30} className='icon_notifyDashboard'/>
          <img src={fileUrl || "https://imedia.imuzik.com.vn/media1/ckfinder/images/2(261).jpg"} alt="Uploaded avatar" />
          <p>Hello van a</p>
            <RiArrowDropDownFill size={33}/>
        </div>
      </div>
      <div className="containerDashboard">
        
          <div className="avatarDashboard">
              <div>
              <img src={fileUrl || "https://imedia.imuzik.com.vn/media1/ckfinder/images/2(261).jpg"} alt="Uploaded avatar" />
              <input {...getInputProps()} />
              </div>
              <div className="upload_imgDashboard" {...getRootProps()}> 
              <FaCamera size={20} className='edit_iconDashboard' />
              </div>
    
              <div className="text_infoDashboard">
                  <p> nguyễn văn a</p>
                  <p> tp.hcm</p>
                  <div className="btnDashboard">
                  <button>Follow</button>
                  <button>Message</button>
              </div>
              </div>
            
    </div>
        
        <div className="socialDashboard">
      
          <div className='box_socialDashboard'>
            <TiSocialFacebook size={30} className='iconDashboard' />
            <p>Facebook</p>
          </div>
    
          <div className='box_socialDashboard'>
            <TiSocialTwitter size={30} className='iconDashboard' />
            <p>Twitter</p> 
          </div>
        
          <div className='box_socialDashboard'>
            <TiSocialLinkedin size={30} className='iconDashboard' />
            <p>LinkedIn</p> 
          </div>
          
          <div className='box_socialDashboard'>
            <TiSocialInstagram size={30} className='iconDashboard' />
            <p>Instagram</p>
          </div>
        </div>
      <div className="infoDashboard">
      
        <div className="text_info1Dashboard">
          <div className="lable_iconDashboard">
                <FaUser className='iconDashboard'/>
                <p>Full Name</p> 
              </div>
              <div className="info_titleDashboard">
              <p>Johnatan Smith</p>
              </div>
        </div>
        <div className="text_info1Dashboard">
          <div className="lable_iconDashboard">
                <FaPhone className='iconDashboard'/>
                <p>Phone</p> 
              </div>
              <div className="info_titleDashboard">
              <p>Johnatan Smith</p>
              </div>
        </div>
        <div className="text_info1Dashboard">
          <div className="lable_icon">
                <MdEmail className='iconDashboard'/>
                <p>Email</p> 
              </div>
              <div className="info_titleDashboard">
              <p>Johnatan Smith</p>
              </div>
        </div>
        <div className="text_info1Dashboard">
          <div className="lable_iconDashboard">
                <FaLocationDot className='iconDashboard'/>
                <p>Address</p> 
              </div>
              <div className="info_titleDashboard">
              <p>Johnatan Smith Johnatan Smith Johnatan Smith</p>
              </div>
        </div>

            
          </div>

      </div>
 
  </div>
 </div>
  )
}

export default AccountDashboard




