// modules
import React, { FC } from "react";
import { useData } from "context";

// styles
import "./BetPanel.css";

// icons
import { ReactComponent as PlusIcon } from "assets/icons/plus-svgrepo-com.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minus-svgrepo-com.svg";

interface BetPanelProps {
  optionId: string;
}

const BetPanel: FC<BetPanelProps> = ({ optionId }) => {
  const data = useData();

  const currentBet = data?.actions.getCurrentOptBet(optionId) ?? 500;
  const activeOptsQuantity = data?.data.activeOptsQuantity;

  console.log(activeOptsQuantity);

  const increaseBetHandler = () => data?.actions.increaseOptionBet(optionId);
  const decreaseBetHandler = () => data?.actions.decreaseOptionBet(optionId);

  return (
    <div className="bet-panel">
      <button className="bet-button" onClick={decreaseBetHandler} disabled={currentBet <= 0}>
        <MinusIcon className="bet-icon" />
      </button>
      <p className="bet-result">{currentBet}</p>
      <button
        className="bet-button"
        onClick={increaseBetHandler}
        disabled={currentBet > 5000 || activeOptsQuantity === 2}>
        <PlusIcon className="bet-icon" />
      </button>
    </div>
  );
};

export default BetPanel;
