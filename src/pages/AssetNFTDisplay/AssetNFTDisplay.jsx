import React, { useState, useEffect } from 'react';
import './AssetNFTDisplay.css'; // Separate CSS file

const AssetNFTDisplay = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('a-z');

  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setAssets([
        {
          name: 'Digital Warrior',
          image: 'https://via.placeholder.com/150',
          currentBid: 0.45,
        },
        {
          name: 'Space Explorer',
          image: 'https://via.placeholder.com/150',
          currentBid: 2.82,
        },
        {
          name: 'Wizard Master',
          image: 'https://via.placeholder.com/150',
          currentBid: 1.41,
        },
        {
          name: 'Colorful Magic',
          image: 'https://via.placeholder.com/150',
          currentBid: 2.05,
        },
      ]);
      setLoading(false);
    }, 2000);

  }, []);


  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    switch (sortOption) {
      case 'a-z':
        return a.name.localeCompare(b.name);
      case 'z-a':
        return b.name.localeCompare(a.name);
      case 'low-high':
        return a.currentBid - b.currentBid;
      case 'high-low':
        return b.currentBid - a.currentBid;
      default:
        return 0;
    }
  });

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  return (
    <div className="dashboard">
      <h1>Asset NFT Display</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Filter NFTs by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="a-z">Sort A-Z</option>
          <option value="z-a">Sort Z-A</option>
          <option value="low-high">Sort by Bid (Low to High)</option>
          <option value="high-low">Sort by Bid (High to Low)</option>
        </select>
      </div>

      <div className="asset-list">
        {sortedAssets.map((asset, index) => (
          <div key={index} className="asset-item">
            <img src={asset.image} alt={asset.name} className="asset-image" />
            <div className="asset-info">
              <h3>{asset.name}</h3>
              <p>Current Bid: {asset.currentBid} ETH</p>
              <button className="bid-btn">Bid Now!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetNFTDisplay;
