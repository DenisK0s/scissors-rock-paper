// modules
import React, { FC, useState } from "react";

// styles
import "./BetPanel.css";

// components
import { ReactComponent as PlusIcon } from "assets/icons/plus-svgrepo-com.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minus-svgrepo-com.svg";

const BetPanel: FC = () => {
  return (
    <div className="bet-panel">
      <button className="bet-button">
        <MinusIcon className="bet-icon" />
      </button>
      <p className="bet-result">500</p>
      <button className="bet-button">
        <PlusIcon className="bet-icon" />
      </button>
    </div>
  );
};

export default BetPanel;
