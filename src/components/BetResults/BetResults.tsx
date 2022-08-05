// modules
import React, { FC } from "react";

// styles
import "./BetResults.css";

// icons
import { ReactComponent as VersusIcon } from "assets/icons/versus-icon.svg";

const BetResults: FC = () => {
  return (
    <div className="bet-results-box">
      <h2 className="bet-results-box__title">One</h2>
      <VersusIcon className="bet-results-box__icon" />
      <h2 className="bet-results-box__title">Two</h2>
    </div>
  );
};

export default BetResults;
