// modules
import React, { FC } from "react";
import styled from "styled-components";

// components
import Title from "components/Utils/Title";
import Button from "components/Utils/Button";

const StyledGreetingBox = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  background-color: black;

  pointer-events: none;
`;

const StyledGreetingContent = styled.p`
  margin-top: 15px;
  width: 30vw;
  height: 30vw;

  outline: 1px solid #ffff;
`;

const GreetingPage: FC = () => {
  return (
    <StyledGreetingBox>
      <Title label="Hello my friend !!!" />
      <StyledGreetingContent />
      <Button label="Let's go" />
    </StyledGreetingBox>
  );
};

export default GreetingPage;
