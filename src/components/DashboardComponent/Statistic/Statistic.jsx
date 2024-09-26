import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward, faSearchPlus, faSearchMinus, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import './Statistic.css';

const data = [
  { time: "12:00", price: 25500 },
  { time: "13:00", price: 25600 },
  { time: "14:00", price: 25580 },
  { time: "15:00", price: 25560 },
  { time: "16:00", price: 26097 },
  { time: "17:00", price: 26050 },
  { time: "18:00", price: 26100 },
  { time: "19:00", price: 25980 },
  { time: "20:00", price: 26020 },
  { time: "21:00", price: 26080 },
  { time: "22:00", price: 26050 }
];

const Statistic = () => {
  return (
    <div className="statistic-container">
      <div className="chart-header">
        <h3>Statistic</h3>
        <div className="chart-icons">
          <FontAwesomeIcon icon={faBackward} />
          <FontAwesomeIcon icon={faForward} />
          <FontAwesomeIcon icon={faSearchPlus} />
          <FontAwesomeIcon icon={faSearchMinus} />
          <FontAwesomeIcon icon={faPause} />
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={[25500, 26200]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#4D8BFF" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistic;
