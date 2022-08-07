// modules
import { FC } from "react";

// styles
import "./BetResults.css";

// icons
import { ReactComponent as VersusIcon } from "assets/icons/versus-icon.svg";

interface BetResultsProps {
  playerOption: string;
  computerOption: string;
  result: string;
}

const BetResults: FC<BetResultsProps> = ({ playerOption, computerOption, result }) => {
  let playerResultclassMames;
  let computerResultclassMames;

  if (result === "won") {
    playerResultclassMames = "bet-results-box__title won";
    computerResultclassMames = "bet-results-box__title loss";
  }

  if (result === "loss") {
    playerResultclassMames = "bet-results-box__title loss";
    computerResultclassMames = "bet-results-box__title won";
  }

  return (
    <div className="bet-results-box">
      <h2 className={playerResultclassMames}>{playerOption}</h2>
      <VersusIcon className="bet-results-box__icon" />
      <h2 className={computerResultclassMames}>{computerOption}</h2>
    </div>
  );
};

export default BetResults;
