// modules
import React, { FC } from "react";

// styles
import "./Container.css";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className: extendedClassName }) => {
  const classNames = extendedClassName ? `container ${extendedClassName}` : "container";
  return <div className={classNames}>{children}</div>;
};

export default Container;
