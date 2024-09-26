import React, { useState, useEffect } from 'react';
import './AssetNFTDisplay.css';
import { LuLayoutGrid } from "react-icons/lu";
import { CgLayoutGridSmall } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const AssetNFTDisplay = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('a-z');
  const [gridOption, setGridOption] = useState(4);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAssets([
        { name: 'Zeeverse: Items', image: 'https://via.placeholder.com/250', floorPrice: '< 0.01 ETH', volume24h: '0.06 ETH' },
        { name: 'Digital Warrior', image: 'https://via.placeholder.com/250', floorPrice: '0.45 ETH', volume24h: '0.10 ETH' },
        { name: 'Space Explorer', image: 'https://via.placeholder.com/250', floorPrice: '2.82 ETH', volume24h: '1.50 ETH' },
        { name: 'Wizard Master', image: 'https://via.placeholder.com/250', floorPrice: '1.41 ETH', volume24h: '0.75 ETH' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    switch (sortOption) {
      case 'a-z': return a.name.localeCompare(b.name);
      case 'z-a': return b.name.localeCompare(a.name);
      case 'low-high': return parseFloat(a.floorPrice) - parseFloat(b.floorPrice);
      case 'high-low': return parseFloat(b.floorPrice) - parseFloat(a.floorPrice);
      default: return 0;
    }
  });

  if (loading) return <div className="loading">Loading data...</div>;

  return (
    <div className="dashboard">
      <h1>Asset NFT Display</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Filter NFTs by name..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="filter-input"
        />
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="a-z">Sort A-Z</option>
          <option value="z-a">Sort Z-A</option>
          <option value="low-high">Sort by Price (Low to High)</option>
          <option value="high-low">Sort by Price (High to Low)</option>
        </select>

        <div className="grid-icons">
          <button onClick={() => setGridOption(2)}>
            <LuLayoutGrid size={24} />
          </button>
          <button onClick={() => setGridOption(3)}>
            <CgLayoutGridSmall size={40} />
          </button>
          <button onClick={() => setGridOption(4)}>
            <TfiLayoutGrid4Alt size={24} />
          </button>
        </div>
      </div>

      <div className={`asset-list grid-${gridOption}`}>
        {sortedAssets.map((asset, index) => (
          <div key={index} className="asset-card">
            <img src={asset.image} alt={asset.name} className="asset-image" />
            <div className="asset-info">
              <h3>{asset.name}</h3>
              <div className="price-info">
                <span>Floor: {asset.floorPrice}</span>
                <span>24h Volume: {asset.volume24h}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetNFTDisplay;
