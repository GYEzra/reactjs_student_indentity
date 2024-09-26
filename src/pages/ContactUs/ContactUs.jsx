import React from 'react'
import './ContactUs.css'
import { FaFacebookF ,FaInstagram,FaLinkedinIn,FaYoutube} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Navbar from "../../components/navbar/Navbar";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel.jsx";
import Footer from "../../components/footer/Footer.jsx"

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
    <div className="contact_container">
      <div className="about">
        <div className="des_about">
          <h2>Building an open digital economy</h2>
          <p>At OpenSea, we're excited about a brand new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability of digital goods.</p>
          <p>A core part of our vision is that open protocols like Ethereum and interoperable standards like ERC-721 and ERC-1155 will enable vibrant new economies. We're building tools that allow consumers to trade their items freely, creators to launch new digital works, and developers to build rich, integrated marketplaces for their digital items.</p>
          <p>We're proud to be the first and largest marketplace for NFTs.</p>
        </div>
        <div className="img_about">
          <img src="../img/about.jpg" alt="Hình" />
        </div>
      </div>

      <div className="logo_company">
        <h1>Backed by top firms & industry leaders</h1>
        <p>Who are helping us pave the way towards a brand new digital economy</p>
          <LogoCarousel/>
      </div>
  

      <div className="address_contact">
          <div className="location_contact">
                  <CiLocationOn className='icon_location'/>
                <div className="des_address">
                  <h3>Location</h3>
                  <p>20 Cooper Square, Neu York, NY 10003, USA</p>
                </div>
          </div>
              <div className="location_contact">
                  <MdOutlineMailOutline className='icon_location'/>
                <div className="des_address">
                  <h3>Email</h3>
                  <p>blockchain@gmail.com</p>
                </div>
              </div>
              <div className="location_contact">
                  <IoPhonePortraitOutline className='icon_location'/>
                <div className="des_address">
                  <h3>Phone</h3>
                  <p>012.456.7890</p>
                </div>
              </div>

              
            </div>
      <div className="contact">
        <div className="left_contact">

          <div className="des_container_contact">

            <div className="des_contact">
              <h2>Contact Us</h2>
              <p>In 2017 the world witnessed the birth of CryptoKitties. For the first time, the world experienced a decentralized application built on blockchains but targetted towards a mainstream audience.</p>
            </div>

            <div className="social_contact">
              <h3>Follow us on</h3>
              <div className="social_contact_icon">
                <FaFacebookF className='contact_icon'/>
                <RiInstagramFill className='contact_icon'/>
                <FaLinkedinIn className='contact_icon'/>
                <FaYoutube className='contact_icon'/>
              </div>
            </div>

          </div>
        </div>

        <div className="right_contact">
          <div className="form_contact">

            <div className="box_contact_form_name">
              <div className="box_con_name">
                <p>First Name</p>
                <input type="text" placeholder=' First Name' />
              </div>
              <div className="box_con_name">
                <p>Last Name</p>
                <input type="text" placeholder='Last Name' />
              </div>
              </div>
              <div className="box_contact_form">
                <p>Email</p>
                <input type="email" placeholder='Email' />
              </div>
              <div class="box_contact_form">
                <p>Message</p>
              <textarea class="message_contact" placeholder="Message"></textarea>
            </div>
              <button className='send_contact'>Send Message</button>
          </div>
        </div>
      </div>
   
          </div>
    <Footer/>
    </div>
      
  )
}

export default ContactUs
