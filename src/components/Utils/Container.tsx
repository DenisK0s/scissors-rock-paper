// modules
import React, { FC } from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: 2rem;
`;

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
