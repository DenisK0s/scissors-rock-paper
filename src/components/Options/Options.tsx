// modules
import React, { FC } from "react";
import { useData } from "context";

// styles
import "./Options.css";

// types
import { IOptions } from "types/commonTypes";

// components
import Option from "./Option";

interface OptionsProps {
  items: IOptions[];
}

const Options: FC<OptionsProps> = ({ items }) => {
  const data = useData();

  const chooseOptionHandler = (opt: string) => data?.actions.chooseOption(opt);

  return (
    <ul className="options-list">
      {items.map(({ id, name }) => (
        <li key={id} className="options-list__item">
          <Option id={id} label={name} onClick={chooseOptionHandler} />
        </li>
      ))}
    </ul>
  );
};

export default Options;
