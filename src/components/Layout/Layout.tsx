//modules
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// styles
import "./Layout.css";

// components
import Header from "components/Header";
import Container from "components/Utils/Container";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
