// modules
import React, { FC } from "react";

// styles
import "views/views-style-modules/ChoisePage.css";

// components
import Options from "components/Options";
import Link from "components/Utils/CustomLink";

// options
import { optsData } from "options/optsData";

const ChoicePage: FC = () => {
  return (
    <div className="choise-page__content-wrapper">
      <Options items={optsData} />
      <Link to="/play" extendClassName="choise-page__link">
        Start Game
      </Link>
    </div>
  );
};

export default ChoicePage;
