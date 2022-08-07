// modules
import { FC } from "react";
import { Link } from "react-router-dom";

// styles
import "./CustomLink.css";

interface CustomLinkProps {
  children: string;
  to: string;
  extendClassName?: string;
  onClick?: () => void;
}

const CustomLink: FC<CustomLinkProps> = ({ to, children, extendClassName, onClick }) => {
  const classNames = extendClassName ? `custom-link ${extendClassName}` : "custom-link";
  return (
    <Link to={to} className={classNames} onClick={onClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
