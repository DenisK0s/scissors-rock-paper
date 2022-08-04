// modules
import React, { FC } from "react";

// styles
import "./Options.css";

interface OptionProps {
  id: string;
  label: string;
  onClick: (value: string) => void;
}

const Option: FC<OptionProps> = ({ id, label, onClick }) => {
  return (
    <p className="options-card" onClick={() => onClick(id)}>
      {label}
    </p>
  );
};

export default Option;
