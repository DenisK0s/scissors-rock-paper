// modules
import { FC, useEffect } from "react";
import { useData } from "context";
import Swal from "sweetalert2";

// styles
import "views/views-style-modules/ChoisePage.css";

// components
import Options from "components/Options";
import Link from "components/Utils/CustomLink";

// options
import { optsData } from "options/optsData";

const ChoicePage: FC = () => {
  const data = useData();

  const options = data?.data.options;
  const areActiveOptsExist = options?.some((bet) => bet.bet !== 0);

  const correctPath = !areActiveOptsExist ? "/choise" : "/play";
  const checkAreActiveOptsExist = () => {
    if (!areActiveOptsExist) {
      Swal.fire("You haven't placed your bets!");
    }
  };
  return (
    <div className="choise-page__content-wrapper">
      <h1 className="choise-page-title">Make your bet</h1>
      <Options items={optsData} />
      <Link to={correctPath} extendClassName="choise-page__link" onClick={checkAreActiveOptsExist}>
        Start Game
      </Link>
    </div>
  );
};

export default ChoicePage;
