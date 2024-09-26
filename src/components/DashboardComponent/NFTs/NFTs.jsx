import React, { useState, useEffect } from "react";
import { FaTh, FaBars, FaFilter } from "react-icons/fa";
import "./NFTs.css";

const NFTs = () => {
  const [sortOrder, setSortOrder] = useState('titleAsc');
  const [filterCollection, setFilterCollection] = useState('All');
  const [items, setItems] = useState([
    {
      username: "@cameronwilliamson",
      title: "Pulses Of Imagination #214",
      collection: "Chromory",
      price: "0.40 ETH",
      image: "https://cdn.mos.cms.futurecdn.net/mpGh6USjRkE3dPQnF8tXRC-1200-80.jpg"
    },
    {
      username: "@cameronwilliamson",
      title: "Sulses Of Imagination #214",
      collection: "Chromory",
      price: "0.30 ETH",
      image: "https://cdn.mos.cms.futurecdn.net/mpGh6USjRkE3dPQnF8tXRC-1200-80.jpg"
    },
    {
      username: "@cameronwilliamson",
      title: "Lmagination of Pulses",
      collection: "Chromory",
      price: "0.10 ETH",
      image: "https://cdn.mos.cms.futurecdn.net/mpGh6USjRkE3dPQnF8tXRC-1200-80.jpg"
    },
    {
      username: "@cameronwilliamson",
      title: "Lmagination of Pulses",
      collection: "Chromory",
      price: "0.10 ETH",
      image: "https://cdn.mos.cms.futurecdn.net/mpGh6USjRkE3dPQnF8tXRC-1200-80.jpg"
    }
  ]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setFilteredItems(items.filter(item => 
        filterCollection === 'All' || item.collection === filterCollection
      ));
      sortItems(sortOrder);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [items, sortOrder, filterCollection]);

  const sortItems = (criteria) => {
    let sortedItems = [...filteredItems];
    if (criteria === 'titleAsc') {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === 'titleDesc') {
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    } else if (criteria === 'priceAsc') {
      sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (criteria === 'priceDesc') {
      sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="NFTs">
      <div className="NFTs-header">
        <p>{filteredItems.length} items</p>
        <div className="nft-controls">
          <select
            onChange={(e) => {
              setFilterCollection(e.target.value);
            }}
          >
            <option value="All">All Collections</option>
            <option value="Chromory">Chromory</option>
          </select>
          <select
            onChange={(e) => {
              setSortOrder(e.target.value);
              sortItems(e.target.value);
            }}
          >
            <option value="titleAsc">Title: A-Z</option>
            <option value="titleDesc">Title: Z-A</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
          <div className="nft-icons">
            <FaTh className="icon" />
            <FaBars className="icon" />
            <FaFilter className="icon" />
          </div>
        </div>
      </div>
      <div className="nft-grid">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          filteredItems.map((item, index) => (
            <div key={index} className="nft-card">
              <img src={item.image} alt={item.title} className="nft-image" />
              <div className="nft-info">
                <p className="nft-username">{item.username}</p>
                <p className="nft-title">{item.title}</p>
                <p className="nft-collection">{item.collection}</p>
                <p className="nft-price">{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NFTs;
