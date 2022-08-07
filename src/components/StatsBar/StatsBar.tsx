//modules
import { FC } from "react";
import { useData } from "context";

// styles
import "./StatsBar.css";

// components
import StatsItem from "./StatsItem";

const StatsBar: FC = () => {
  const data = useData();

  const currentBalance = data?.data.balance;
  const betsAmount = data?.data.betsAmount;
  const winningAmount = data?.data.winningAmount;

  return (
    <div className="stats-bar">
      <StatsItem label="Balance" value={currentBalance} />
      <StatsItem label="Bet" value={betsAmount} />
      <StatsItem label="Win" value={winningAmount} />
    </div>
  );
};

export default StatsBar;
