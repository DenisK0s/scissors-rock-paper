// modules
import React, { FC } from "react";

// styles
import "views/views-style-modules/ChoisePage.css";

// components
import BetPanel from "components/BetPanel";
import Options from "components/Options";
import Link from "components/Utils/CustomLink";

// options
import { optsData } from "options/optsData";

const ChoicePage: FC = () => {
  return (
    <div className="choise-page__content-wrapper">
      <BetPanel />
      <Options items={optsData} />
      <Link to="/play" extendClassName="choise-page__link">
        Start
      </Link>
    </div>
  );
};

export default ChoicePage;
