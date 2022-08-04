// modules
import React, { FC } from "react";

// styles
import "views/views-style-modules/ChoisePage.css";

// components
import BetPanel from "components/BetPanel";
import Options from "components/Options";
import Link from "components/Utils/CustomLink";

// data
import { optsData } from "options/optsData";

const ChoicePage: FC = () => {
  return (
    <>
      <BetPanel />
      <Options items={optsData} />
      <Link to="/play">Start</Link>
    </>
  );
};

export default ChoicePage;
