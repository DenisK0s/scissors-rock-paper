//modules
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// styled components
import { Main } from "./Layout.styled";

// components
import Header from "components/Header";
import Container from "components/Utils/Container";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};

export default Layout;
