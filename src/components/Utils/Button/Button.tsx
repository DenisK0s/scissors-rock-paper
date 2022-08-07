// modules
import React, { FC } from "react";

// styles
import "./Button.css";

interface ButtonProps {
  children: string | React.ReactElement;
  extendClassName?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  extendClassName,
  children,
  type = "button",
  onClick,
  disabled,
}) => {
  const classNames = extendClassName ? `button ${extendClassName}` : "button";
  return (
    <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
