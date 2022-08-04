// modules
import React, { FC } from "react";

// styles
import "views/views-style-modules/PlayPage.css";

// components
import Button from "components/Utils/Button";
import Link from "components/Utils/CustomLink";
import BetContent from "components/BetContent";

const PlayPage: FC = () => {
  return (
    <>
      <Link to="/choise">New bet</Link>
      <div className="play-page-content-wrapper">
        <BetContent />
        <div className="bet-results"></div>
        <Button>Play</Button>
      </div>
    </>
  );
};

export default PlayPage;
