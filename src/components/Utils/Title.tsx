// modules
import React, { FC } from "react";
import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
`;

interface PropsTitle {
  label?: string;
  className?: string;
}

const Title: FC<PropsTitle> = ({ label, className }) => {
  return <StyledTitle className={className}>{label}</StyledTitle>;
};

export default Title;
