import React from 'react';
import './CreatePageDashboard.css';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import Sidebar from '../../components/DashboardComponent/sidebar/Sidebar';
import Navbar from '../../components/DashboardComponent/navbar/Navbar';
const CreatePageDashboard = () => {
  return (
    <div className='CreatePageDashboard'>
      <div className='CreatePageDashboard_SideBar'>
      <Sidebar/>
      </div>
      
      <div className='CreatePageDB'>  
        <Navbar/>
        <div className="create-pageDashboard">
          <div className="left-sectionnDashboard">
            <div className="logo_createdDashboard">
              <img src="/img/background.jpg" alt="LOGO11" />
            <h1>Create</h1>
            </div>
          <div className="optionsDashboard">
              <div className="option_createdDashboard">
                  <div className="left_optionDashboard">
                    <div className="lable_createdDashboard">
                      <BsFillMenuButtonWideFill className='icon_createdDashboard'/>
                      <h3>Drop</h3>
                    </div>
                    <p>A drop is the release of a new project. This usually happens on a specified date and time. Items will be revealed after they have been purchased.</p>
                  </div>
                    <a href="/SmartContractForm">
                <div className="right_optionDashboard">
                    <FaLongArrowAltRight className='icon_arrowDashboard'/>
                  </div>
                </a>
              </div>

              <div className="option_createdDashboard">
                <div className="left_optionDashboard">
                    <div className="lable_createdDashboard">
                      <MdCollectionsBookmark className='icon_createdDashboard'/>
                      <h3>Collection or item</h3>
                    </div>
                  <p>Create a new NFT collection or add an NFT to an existing one. Your items will display immediately. List for sale when you're ready.</p>
                </div>

                  <a href="/NFTCreation">
                <div className="right_optionDashboard">
                    <FaLongArrowAltRight className='icon_arrowDashboard'/>
                  </div>
                </a>
              </div>
            </div>
          <a href="/learn-more" className="learn-more">Learn more</a>
        </div>

        <div className="right-sectionnDashboard">
          <img
            src="https://blog.redbrick.vn/wp-content/uploads/2021/05/buc-tranh-noi-tieng-the-gioi-doart-4-1.jpg"
            alt="Featured Crowd"
          />
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default CreatePageDashboard;
