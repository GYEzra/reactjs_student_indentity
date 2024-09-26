import React,{useState} from "react";
import "./NFTDetail.css";
import { FaEye, FaHeart, FaShareAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import ShareNFTModal from "../../components/DashboardComponent/ShareNFTModal/ShareNFTModal";
import BuyModal from "../../components/DashboardComponent/BuyModal/BuyModal";
import SellModal from "../../components/DashboardComponent/SellModal/SellModal";
const NFTDetail = () => {
  const bids = [
    { name: "Esther Howard", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
    { name: "Robert Fox", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
    { name: "Bessie Cooper", avatar: "https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png", bid: "2.65 ETH", time: "3 hours ago" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  const openSellModal = () => setIsSellModalOpen(true);
  const closeSellModal = () => setIsSellModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openBuyModal = () => setIsBuyModalOpen(true);
  const closeBuyModal = () => setIsBuyModalOpen(false);
  return (
    <div className="nft-detail-container1">
      <div className="nft-main1">
        <div className="nft-image-section1">
          <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="Creative Artistic Design" className="nft-image11" />
          <div className="nft-thumbnails1">
            <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail1" className="nft-thumbnail1" /> 
            <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail3" className="nft-thumbnail1" />
            <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail2" className="nft-thumbnail1" />
             <img src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-5.jpg" alt="thumbnail4" className="nft-thumbnail1" />
          </div>
        </div>
        <div className="nft-info-section1">
        <div className="nft-title1-container">
        <h1 className="nft-title1">Creative Artistic Design</h1>
        <div className="nft-title1-icons">
            <Link to="/TransferItem" className="nft-icon play-icon">
                <IoMdSend />
            </Link>
            <Link onClick={openModal} className="nft-icon share-icon">
                <CiShare1 />
            </Link>
            <ShareNFTModal isOpen={isModalOpen} onClose={closeModal} />
            <Link to="/more-options" className="nft-icon more-icon">
                <CiMenuKebab />
            </Link>
        </div>
         </div>

        
          <p className="nft-id1">NFT ID : 2548859</p>
          <div className="nft-stats1">
            <div><FaEye /> 200</div>
            <div><FaHeart /> 185</div>
            <FaShareAlt />
          </div>
          <div className="nft-creator1">
            <img src="https://png.pngtree.com/png-clipart/20230108/original/pngtree-nft-avatar-vector-element-png-image_8887536.png" alt="Millar Smith" className="creator-avatar1" />
            <div>
              <p className="creator-name1">Millar Smith</p>
              <p className="creator-email1">hitam@gmail.com</p>
            </div>
          </div>
          <div className="nft-bid-info1">
            <p>Current Bid: <strong>2.55 ETH</strong></p>
            <p>Auction Time: <strong>20h 45m 15s</strong></p>
          </div>
          <p className="nft-description1">
            Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable...
          </p>
          <div className="nft-actions1">
            <button className="sell-now-btn1" onClick={openSellModal}>Sell</button>
            <SellModal isOpen={isSellModalOpen} onClose={closeSellModal} />
            <button className="place-bid-btn1" onClick={openBuyModal}>Buy Now</button>
            <BuyModal isOpen={isBuyModalOpen} onClose={closeBuyModal} />
          </div>
          <div className="nft-bids-section1">
            <h2>Bids</h2>
            <div className="tab-navigation1">
                <span className="active-tab1">Bids</span>
                <span>Info</span>
                <span>Activity</span>
            </div>
            {bids.map((bid, index) => (
                <div key={index} className="nft-bid-item1">
                    <div className="bid-details1">
                        <img src={bid.avatar} alt={bid.name} className="bid-avatar1" />
                        <div className="bid-info1">
                            <p className="bid-name1">{bid.name} <span className="bid-action1">placed a bid</span></p>
                            <p className="bid-time1">{bid.time}</p>
                        </div>
                    </div>
                    <div className="bid-amount-section1">
                        <p className="bid-amount1">{bid.bid}</p>
                        <p className="usd-amount1">{bid.usd}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
