// modules
import React, { FC } from "react";

// styles
import "./BetContent.css";

// componentsx

const BetContent: FC = () => {
  return (
    <div className="bet-content-box">
      <div className="bet-content-box__item">
        <h2 className="player-name">{}</h2>
        <p className="bet-amount">{}</p>
      </div>
      <div className="bet-content-box__item">
        <h2 className="player-name">{}</h2>
        <p className="bet-amount">{}</p>
      </div>
    </div>
  );
};

export default BetContent;
