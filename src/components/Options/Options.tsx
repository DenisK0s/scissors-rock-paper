// modules
import React, { FC } from "react";

// styles
import "./Options.css";

// types
import { IOption } from "types/commonTypes";

// components
import Option from "./Option";

interface OptionsProps {
  items: IOption[];
}

const Options: FC<OptionsProps> = ({ items }) => {
  return (
    <ul className="options-list">
      {items.map(({ id, optionName }) => (
        <li key={id} className="options-list__item">
          <Option id={id} label={optionName} />
        </li>
      ))}
    </ul>
  );
};

export default Options;
