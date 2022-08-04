//modules
import React, { FC } from "react";

// styles
import "./StatsBar.css";

// components
import StatsItem from "./StatsItem";

interface StatsBarProps {}

const StatsBar: FC<StatsBarProps> = () => {
  return (
    <div className="stats-bar">
      <StatsItem label="Balance" value={0} />
      <StatsItem label="Bet" value={0} />
      <StatsItem label="Win" value={0} />
    </div>
  );
};

export default StatsBar;
