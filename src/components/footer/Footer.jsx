
import React from 'react'
import "./footer.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

const Footer = () => {
  return (
   <div className="footer">
    <div className="sb__footer section__padding">

      <div className="sb__footer-links">

        <div className="sb__footer-links-div1">
          <h4>For Business</h4>
          <p className='content'>hứ qsha iu wdqhb ydgwqh yhwqjd yhjqwd uy yqhwjad 2yqhjwda 2yiqhjda qhwjad 2yqhjwda 2yiqhjda 2yiqwhdj</p>
        </div>

        <div className="sb__footer-links-div">
          <h4>Company</h4> 
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
        </div>
         <div className="sb__footer-links-div">
          <h4>Company</h4> 
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
        </div>
        
          <div className="sb__footer-links-div">
          <h4>Partnets</h4>
            <a href="/"><p>Employee</p></a>
           <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
             <a href="/"><p>Employee</p></a>
        </div>  
         <div className="sb__footer-links-div">
          <h4>Company</h4> 
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
        </div>
         <div className="sb__footer-links-div">
          <h4>Company</h4> 
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
        </div>
          <div className="sb__footer-links-div">
          <h4>Partnets</h4>
         
            <a href="/"><p>Employee</p></a>
           <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
             <a href="/"><p>Employee</p></a>
        </div>
          <div className="sb__footer-links-div">
          <h4>Partnets</h4>
            <a href="/"><p>Employee</p></a>
           <a href="/"><p>Employee</p></a>
            <a href="/"><p>Employee</p></a>
             <a href="/"><p>Employee</p></a>
        </div>
        

        <hr></hr> 
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>

          <div className="sb__footer-below-links">
            <p><a href="/">Terms & Conditions</a></p>
             <p><a href="/">Privacy</a></p>
              <p><a href="/">Security</a></p>
               <p><a href="/">Cookie Declaration</a></p>

          <div className="socialmedia">
            <a href="/"><p><TiSocialFacebook size={18}/></p></a>
           <a href="/"><p><TiSocialTwitter size={18}/></p></a>
            <a href="/"><p><TiSocialLinkedin size={18}/></p></a>
            <a href="/"><p><TiSocialInstagram size={18}/></p></a>
          </div>
          
     
        
         
          </div>
        
        </div>
      </div>
    </div>
   </div>
  )
}

export default Footer
