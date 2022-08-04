// modules
import React, { FC } from "react";
import { Link } from "react-router-dom";

// styles
import "./CustomLink.css";

interface CustomLinkProps {
  children: string;
  to: string;
  extendClassName?: string;
}

const CustomLink: FC<CustomLinkProps> = ({ to, children, extendClassName }) => {
  const classNames = extendClassName ? `custom-link ${extendClassName}` : "custom-link";
  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  );
};

export default CustomLink;
