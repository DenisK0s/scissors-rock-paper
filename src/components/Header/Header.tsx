// modules
import { FC } from "react";

// styles
import "./Header.css";

// components
import StatsBar from "components/StatsBar";
import Container from "components/Utils/Container";

const Header: FC = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <StatsBar />
      </Container>
    </header>
  );
};

export default Header;
