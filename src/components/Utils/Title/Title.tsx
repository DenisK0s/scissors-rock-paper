// modules
import React, { FC } from "react";

// styles
// import s from "./Title.module.css";

interface PropsTitle {
  label?: string;
  className?: string;
}

const Title: FC<PropsTitle> = ({ label, className }) => {
  return <h1 className={className}>{label}</h1>;
};

export default Title;
