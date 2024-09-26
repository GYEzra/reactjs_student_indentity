import React from 'react';
import './AssetComponent.css'; 

const AssetComponent = () => {
    const assets = [
        {
            name: 'Bitcoin',
            balance: '1.5 BTC',
            value: '1,200,000,000 VNĐ',
            totalValue: '1,800,000,000 VNĐ',
            quantity: '1.5',
        },
        {
            name: 'Ethereum',
            balance: '3.0 ETH',
            value: '1,800,000,000 VNĐ',
            totalValue: '5,400,000,000 VNĐ',
            quantity: '3.0',
        },
        {
            name: 'Ripple',
            balance: '1500 XRP',
            value: '300,000,000 VNĐ',
            totalValue: '450,000,000 VNĐ',
            quantity: '1500',
        },
        
    ];

    return (
        <div>
            <h1>Thông Tin Tài Sản Số</h1>
             <div className='AssentComponentDashboard'>
            {assets.map((asset, index) => (
                <div className="asset-component" key={index}>
                    <h2 className="asset-title">{asset.name}</h2>
                    <div className="asset-details">
                        <p><strong>Số dư:</strong> {asset.balance}</p>
                        <p><strong>Giá trị:</strong> {asset.value}</p>
                        <p><strong>Tổng giá trị:</strong> {asset.totalValue}</p>
                        <p><strong>Số lượng:</strong> {asset.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
       
    );
};

export default AssetComponent;
