// modules
import { FC } from "react";

// styles
import "./BetContent.css";

// types
import { IOption } from "types/commonTypes";

interface BetContentProps {
  playerName: string | undefined;
  betOptions: IOption[];
}

const BetContent: FC<BetContentProps> = ({ playerName = "Player", betOptions }) => {
  return (
    <div className="bet-content-box">
      <div className="bet-content-box__item">
        <h2 className="player-name">{playerName}</h2>
        {betOptions?.map(({ id, optionName, bet }) => (
          <p key={id} className="bet-option">
            {optionName}: {bet}
          </p>
        ))}
      </div>
      <div className="bet-content-box__item">
        <h2 className="player-name">Computer</h2>
      </div>
    </div>
  );
};

export default BetContent;
