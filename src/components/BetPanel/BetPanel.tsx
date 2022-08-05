// modules
import React, { FC, useState } from "react";
import { useData } from "context";

// styles
import "./BetPanel.css";

// icons
import { ReactComponent as PlusIcon } from "assets/icons/plus-svgrepo-com.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minus-svgrepo-com.svg";

// options
// import constants from "options/constants";

const BetPanel: FC = () => {
  const data = useData();

  const increaseBetHandler = () => data?.actions.increaseBet();
  const decreaseBetHandler = () => data?.actions.decreaseBet();

  return (
    <div className="bet-panel">
      <button className="bet-button" onClick={decreaseBetHandler}>
        <MinusIcon className="bet-icon" />
      </button>
      <p className="bet-result">{data?.data.bet}</p>
      <button className="bet-button" onClick={increaseBetHandler}>
        <PlusIcon className="bet-icon" />
      </button>
    </div>
  );
};

export default BetPanel;
