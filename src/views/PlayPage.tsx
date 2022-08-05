// modules
import React, { FC } from "react";

// styles
import "views/views-style-modules/PlayPage.css";

// components
import Button from "components/Utils/Button";
import Link from "components/Utils/CustomLink";
import BetContent from "components/BetContent";
import BetResults from "components/BetResults";

const PlayPage: FC = () => {
  return (
    <div className="play-page-content-wrapper">
      <Link to="/choise" extendClassName="play-page__next-bet-link">
        New round
      </Link>
      <BetContent />
      <BetResults />
      <Button>Play</Button>
    </div>
  );
};

export default PlayPage;
