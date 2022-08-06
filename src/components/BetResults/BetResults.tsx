// modules
import React, { FC } from "react";

// styles
import "./BetResults.css";

// icons
import { ReactComponent as VersusIcon } from "assets/icons/versus-icon.svg";

interface BetResultsProps {
  playerOption: string;
  computerOption: string;
}

const BetResults: FC<BetResultsProps> = ({ playerOption, computerOption }) => {
  return (
    <div className="bet-results-box">
      <h2 className="bet-results-box__title">{playerOption}</h2>
      <VersusIcon className="bet-results-box__icon" />
      <h2 className="bet-results-box__title">{computerOption}</h2>
    </div>
  );
};

export default BetResults;
