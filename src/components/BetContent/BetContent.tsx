// modules
import React, { FC } from "react";

// styles
import "./BetContent.css";

// components

const BetContent: FC = () => {
  return (
    <div className="bet-content-box">
      <div className="bet-content-item">
        <h2 className="player-name">{}</h2>
        <p className="bet-amount">{}</p>
      </div>
      <div className="bet-content-item">
        <h2 className="player-name">{}</h2>
        <p className="bet-amount">{}</p>
      </div>
    </div>
  );
};

export default BetContent;
