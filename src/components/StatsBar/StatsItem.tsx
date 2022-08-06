//modules
import React, { FC } from "react";

// styles
import "./StatsBar.css";

interface StatsItemProps {
  label: string;
  value: number | undefined | null;
}

const StatsItem: FC<StatsItemProps> = ({ label, value }) => {
  return (
    <p className="stats-bar__item">
      {label}: {value}
    </p>
  );
};

export default StatsItem;
