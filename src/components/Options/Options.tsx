// modules
import React, { FC, useState } from "react";

// styles
import "./Options.css";

// types
import { IOptions } from "types/types";

// components
import Option from "./Option";

interface OptionsProps {
  items: IOptions[];
}

const Options: FC<OptionsProps> = ({ items }) => {
  return (
    <ul className="options-list">
      {items.map(({ id, name }) => (
        <li key={id} className="options-list__item">
          <Option id={id} label={name} onClick={() => {}} />
        </li>
      ))}
    </ul>
  );
};

export default Options;
