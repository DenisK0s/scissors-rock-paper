// modules
import styled from "styled-components";

// components
import { StyledContainer } from "components/Utils/Container";

export const StyledHeader = styled.header`
  background-color: rgb(32, 44, 55);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  outline: 1px solid #ffff;
`;
