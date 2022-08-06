// modules
import React, { FC } from "react";

// styles
import "./Options.css";

// components
import BetPanel from "components/BetPanel";

interface OptionProps {
  id: string;
  label: string;
  onClick?: (value: string) => void;
}

const Option: FC<OptionProps> = ({ id, label, onClick }) => {
  return (
    <div className="option-card">
      <BetPanel optionId={id} />
      <p className="option-card__label">{label}</p>
    </div>
  );
};

export default Option;
