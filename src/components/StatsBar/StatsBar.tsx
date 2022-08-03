//modules
import React, { FC } from "react";

// styled components
import { StyledStatsBar } from "./StatsBar.styled";

// components
import StatsItem from "./StatsItem";

interface StatsBarProps {}

const StatsBar: FC<StatsBarProps> = () => {
  return (
    <StyledStatsBar>
      <StatsItem label="Balance" value={0} />
      <StatsItem label="Bet" value={0} />
      <StatsItem label="Win" value={0} />
    </StyledStatsBar>
  );
};

export default StatsBar;
