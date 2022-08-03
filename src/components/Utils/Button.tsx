// modules
import React, { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 120px;
  height: 50px;
  padding: 5px;
  margin-top: 15px;

  color: inherit;

  border: 1px solid #fff;
  border-radius: 5px;
`;

interface ButtonProps {
  label?: string;
  className?: string;
  // type?: string;
}

const Button: FC<ButtonProps> = ({ label, className }) => {
  return <StyledButton className={className}>{label}</StyledButton>;
};

export default Button;
