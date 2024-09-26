import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import './History.css'; 

const historyData = [
  {
    date: "2024-04-17 12:25:27",
    currency: "Bitcoin (BTC)",
    wallet: "1N4Qbzg6LSXUXyXu2MDuGfzxwMA7do8AyL",
    status: "expectation",
    statusClass: "expectation",
    price: "-0.00119693"
  },
  {
    date: "2023-02-09 17:12:36",
    currency: "Ethereum (ETH)",
    wallet: "1N4Qbzg6LSXUXyXu2MDuGfzxwMA7do8AyL",
    status: "rejected",
    statusClass: "rejected",
    price: "-0.00119693"
  }
];

const History = () => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "ascending" });
  const [data, setData] = useState(historyData);
  const sortData = (key) => {
    let sortedData = [...data];
    if (sortConfig.direction === "ascending") {
      sortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      sortedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }

    setSortConfig({
      key,
      direction: sortConfig.direction === "ascending" ? "descending" : "ascending",
    });

    setData(sortedData);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FontAwesomeIcon icon={faSortUp} />
      ) : (
        <FontAwesomeIcon icon={faSortDown} />
      );
    }
    return null; 
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <span onClick={() => sortData("date")}>
          Date {getSortIcon("date")}
        </span>
        <span onClick={() => sortData("currency")}>
          Currency {getSortIcon("currency")}
        </span>
        <span onClick={() => sortData("wallet")}>
          Wallet {getSortIcon("wallet")}
        </span>
        <span onClick={() => sortData("status")}>
          Status {getSortIcon("status")}
        </span>
        <span onClick={() => sortData("price")}>
          Price {getSortIcon("price")}
        </span>
      </div>
      {data.map((item, index) => (
        <div key={index} className="history-row">
          <span>{item.date}</span>
          <span>{item.currency}</span>
          <span>{item.wallet}</span>
          <span className={`status ${item.statusClass}`}>{item.status}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default History;
