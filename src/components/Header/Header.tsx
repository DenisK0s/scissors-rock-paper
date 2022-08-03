import React, { FC } from "react";

// styled components
import { StyledHeader, HeaderContainer } from "./Header.styled";

// components
import StatsBar from "components/StatsBar";

const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <StatsBar />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
