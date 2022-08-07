// modules
import { FC } from "react";
import { useData } from "context";

// styles
import "./Options.css";

// components
import BetPanel from "components/BetPanel";

// types
import { IOption } from "types/commonTypes";

interface OptionProps {
  id: string;
  label: string;
}

const Option: FC<OptionProps> = ({ id, label }) => {
  const data = useData();

  const activeOptsQuantity = data?.data.activeOptsQuantity;
  const options = data?.data.options;
  const inactiveOption = options?.find((bet) => bet.bet === 0) as IOption;
  const isInactiveOption = inactiveOption.id === id;

  const classMames =
    activeOptsQuantity === 2 && isInactiveOption ? "option-card deactivated" : "option-card";
  return (
    <div className={classMames}>
      <BetPanel optionId={id} />
      <p className="option-card__label">{label}</p>
    </div>
  );
};

export default Option;
