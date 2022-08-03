//modules
import React, { FC } from "react";

// styled components
import { StyledStatsItem } from "./StatsBar.styled";

interface StatsItemProps {
  label: string;
  value: number;
}

const StatsItem: FC<StatsItemProps> = ({ label, value }) => {
  return (
    <StyledStatsItem>
      {label}: {value}
    </StyledStatsItem>
  );
};

export default StatsItem;
