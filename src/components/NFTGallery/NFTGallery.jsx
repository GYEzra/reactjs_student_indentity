import React from 'react';
import './NFTGallery.scss';

const NFTGallery = () => {
  const nftData = [
    {
      id: 1,
      title: "Clone #17373",
      imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
      likes: 22,
      timeRemaining: "3h:15m:20s",
      price: "1.000 ETH",
      stock: "61 in stock"
    },
    {
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },{
        id: 1,
        title: "Clone #17373",
        imageUrl: "https://media.vneconomy.vn/w900/images/upload/2022/06/16/untitled.png",
        likes: 22,
        timeRemaining: "3h:15m:20s",
        price: "1.000 ETH",
        stock: "61 in stock"
      },
  ];

  return (
    <div className="nft-gallery">
      <div className="nft-gallery-header">
        <div className="nft-gallery-title">Featured NFTs</div>
        <div className="nft-gallery-subtitle">
          Discover the most outstanding NFTs in all topics of life
        </div>
        <nav className="nft-gallery-nav">
          <ul className="nft-gallery-categories">
            <li className="nft-gallery-category">NFTs</li>
            <li className="nft-gallery-category">Arts</li>
            <li className="nft-gallery-category">Musics</li>
            <li className="nft-gallery-category">Sports</li>
            <li className="nft-gallery-category">Photography</li>
          </ul>
        </nav>
      </div>
      
      <div className="nft-gallery-filters">

        <div className="nft-gallery-media-types">
          <div className="nft-gallery-media-type">Images</div>
          <div className="nft-gallery-media-type">Video</div>
          <div className="nft-gallery-media-type">Music</div>
          <div className="nft-gallery-media-type-verified">Verified</div>
        </div>
      </div>
      
      <div className="nft-gallery-items">
        {nftData.map((nft) => (
          <div className="nft-gallery-item" key={nft.id}>
            <div className="nft-gallery-item-image">
              <img src={nft.imageUrl} alt={nft.title} />
            </div>
            <div className="nft-gallery-item-info">
              <div className="nft-gallery-item-likes">{nft.likes}</div>
              <div className="nft-gallery-item-timer">{nft.timeRemaining}</div>
              <div className="nft-gallery-item-title">{nft.title}</div>
              <div className="nft-gallery-item-price">{nft.price}</div>
              <div className="nft-gallery-item-stock">{nft.stock}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
