import React from 'react';
import './CreatePage.css';

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
const CreatePage = () => {
  return (
    <div className='CreatePage'>  
        
    <div className="create-page">
   
      <div className="left-sectionn">
        <div className="logo_created">
          <img src="/img/background.jpg" alt="" />
         <h1>Create</h1>
        </div>
        
        <div className="options1">

            <div className="option_created">
                <div className="left_option">
                  <div className="lable_created">
                    <BsFillMenuButtonWideFill className='icon_created'/>
                    <h3>Drop</h3>
                  </div>
                  <p>A drop is the release of a new project. This usually happens on a specified date and time. Items will be revealed after they have been purchased.</p>
                </div>
                   <a href="/SmartContractForm">
              <div className="right_option">
                  <FaLongArrowAltRight className='icon_arrow'/>
                </div>
              </a>
            </div>

            <div className="option_created">
              <div className="left_option">
                  <div className="lable_created">
                    <MdCollectionsBookmark className='icon_created'/>
                    <h3>Collection or item</h3>
                  </div>
                 <p>Create a new NFT collection or add an NFT to an existing one. Your items will display immediately. List for sale when you're ready.</p>
              </div>

                <a href="/NFTCreation">
              <div className="right_option">
                  <FaLongArrowAltRight className='icon_arrow'/>
                </div>
              </a>
            </div>
          </div>
        <a href="/learn-more" className="learn-more">Learn more</a>
      </div>

      <div className="right-sectionn">
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
